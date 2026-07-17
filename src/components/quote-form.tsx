"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { AlertCircle, CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { serviceAreas, services } from "@/lib/site-data";
import { submitQuoteRequest, type QuoteFormState } from "@/app/actions/quote";

const initialState: QuoteFormState = { status: "idle" };

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      size="lg"
      disabled={pending}
      className="h-12 rounded-full bg-brand-navy-950 text-base font-semibold text-white hover:bg-brand-navy-900 sm:col-span-2"
    >
      {pending ? (
        <>
          <Loader2 className="size-4 animate-spin" />
          Sending...
        </>
      ) : (
        "Get Your Free Quote"
      )}
    </Button>
  );
}

export function QuoteForm() {
  const [state, formAction] = useActionState(submitQuoteRequest, initialState);

  if (state.status === "success") {
    return (
      <div className="flex flex-col items-center gap-3 rounded-2xl border border-brand-sky-500/30 bg-brand-sky-500/5 px-6 py-12 text-center">
        <CheckCircle2 className="size-10 text-brand-sky-500" />
        <h3 className="text-xl font-bold text-brand-navy-950">Request received</h3>
        <p className="max-w-sm text-sm text-muted-foreground">
          Thanks for reaching out. We typically respond to quote requests the same
          business day — we will be in touch shortly.
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      <div className="flex flex-col gap-2">
        <Label htmlFor="name">Full name</Label>
        <Input id="name" name="name" required placeholder="Jane Smith" className="h-11" />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="business">Business name</Label>
        <Input id="business" name="business" required placeholder="Acme Storefront" className="h-11" />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" required placeholder="jane@business.com" className="h-11" />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="phone">Phone</Label>
        <Input id="phone" name="phone" type="tel" required placeholder="(555) 123-4567" className="h-11" />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="service">Service needed</Label>
        <Select name="service">
          <SelectTrigger id="service" className="h-11 w-full">
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent>
            {services.map((service) => (
              <SelectItem key={service.slug} value={service.slug}>
                {service.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="location">Location</Label>
        <Select name="location">
          <SelectTrigger id="location" className="h-11 w-full">
            <SelectValue placeholder="Select your city" />
          </SelectTrigger>
          <SelectContent>
            {serviceAreas.map((area) => (
              <SelectItem key={area.slug} value={area.slug}>
                {area.name}, {area.stateAbbr}
              </SelectItem>
            ))}
            <SelectItem value="other">Nearby / not listed</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex flex-col gap-2 sm:col-span-2">
        <Label htmlFor="message">Tell us about your building</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Approximate window count, number of stories, how often you'd like service..."
          className="min-h-28"
        />
      </div>

      {state.status === "error" && state.message ? (
        <div className="flex items-start gap-2 rounded-xl border border-destructive/30 bg-destructive/5 px-4 py-3 text-sm text-destructive sm:col-span-2">
          <AlertCircle className="mt-0.5 size-4 shrink-0" />
          {state.message}
        </div>
      ) : null}

      <SubmitButton />
    </form>
  );
}
