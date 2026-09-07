// Replace src/components/quote-form.tsx together with the supplied quote.ts.
"use client";

import { useActionState, useEffect, useId, useRef, useState } from "react";
import { useFormStatus } from "react-dom";
import { company, serviceAreas } from "@/lib/site-data";
import { submitQuoteRequest, type QuoteFormState } from "@/app/actions/quote";

function SubmitButton() {
  const { pending } = useFormStatus();
  return <button className="sg-cta" type="submit" disabled={pending} aria-busy={pending}>
    {pending ? "Sending your request…" : "Get a free quote"}
  </button>;
}

export function QuoteForm({ defaultLocation = "" }: { defaultLocation?: string }) {
  const [state, action] = useActionState<QuoteFormState, FormData>(submitQuoteRequest, { status: "idle" });
  const [fields, setFields] = useState({ name: "", email: "", phone: "", service: "", location: defaultLocation, message: "" });
  const prefix = useId();
  const errorRef = useRef<HTMLDivElement>(null);
  const successRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (state.status === "error") errorRef.current?.focus();
    if (state.status === "success") successRef.current?.focus();
  }, [state]);
  function set(field: keyof typeof fields, value: string) { setFields(previous => ({ ...previous, [field]: value })); }

  if (state.status === "success") return (
    <div ref={successRef} tabIndex={-1} className="sg-success" role="status">
      <h2>Your quote request has been sent</h2>
      <p>Thanks for the details. This is a quote request, not a booked appointment.</p>
    </div>
  );

  return (
    <form action={action} className="sg-form">
      <p className="sg-help">Required fields are marked “required.”</p>
      {state.status === "error" && <div ref={errorRef} tabIndex={-1} className="sg-error" role="alert">
        {state.message}
        {state.errors && <ul>{Object.entries(state.errors).map(([key, message]) => <li key={key}><a href={`#${prefix}-${key}`}>{message}</a></li>)}</ul>}
        {!state.errors && <> Try again, or email <a href={`mailto:${company.email}`}>{company.email}</a>.</>}
      </div>}
      <div className="sg-field">
        <label htmlFor={`${prefix}-name`}>Your name (required)</label>
        <input id={`${prefix}-name`} name="name" required autoComplete="name" maxLength={150} value={fields.name} onChange={e => set("name", e.target.value)} aria-invalid={Boolean(state.errors?.name)} />
      </div>
      <div className="sg-field">
        <label htmlFor={`${prefix}-email`}>Email (required)</label>
        <input id={`${prefix}-email`} name="email" required type="email" autoComplete="email" maxLength={254} value={fields.email} onChange={e => set("email", e.target.value)} aria-invalid={Boolean(state.errors?.email)} />
      </div>
      <div className="sg-field">
        <label htmlFor={`${prefix}-location`}>Town (required)</label>
        <select id={`${prefix}-location`} name="location" required value={fields.location} onChange={e => set("location", e.target.value)} aria-invalid={Boolean(state.errors?.location)}>
          <option value="">Choose your town</option>
          {serviceAreas.map(area => <option key={area.slug} value={area.name}>{area.name}</option>)}
          <option value="Other nearby area">Other nearby area</option>
        </select>
      </div>
      <div className="sg-field">
        <label htmlFor={`${prefix}-phone`}>Phone (optional)</label>
        <input id={`${prefix}-phone`} name="phone" type="tel" autoComplete="tel" maxLength={50} value={fields.phone} onChange={e => set("phone", e.target.value)} />
      </div>
      <div className="sg-field">
        <label htmlFor={`${prefix}-service`}>Service needed (optional)</label>
        <select id={`${prefix}-service`} name="service" value={fields.service} onChange={e => set("service", e.target.value)}>
          <option value="">Choose an option</option><option value="Outside">Exterior window cleaning</option><option value="Inside">Interior window cleaning</option><option value="Inside and outside">Interior and exterior window cleaning</option><option>Pressure washing</option><option>Soft washing</option><option>Multiple services</option><option>Not sure</option>
        </select>
      </div>
      <div className="sg-field">
        <label htmlFor={`${prefix}-message`}>Anything else? (optional)</label>
        <p id={`${prefix}-notes-help`} className="sg-help">Add any details you’d like us to know.</p>
        <textarea id={`${prefix}-message`} name="message" rows={2} maxLength={5000} aria-describedby={`${prefix}-notes-help`} value={fields.message} onChange={e => set("message", e.target.value)} />
      </div>
      <SubmitButton />
    </form>
  );
}
