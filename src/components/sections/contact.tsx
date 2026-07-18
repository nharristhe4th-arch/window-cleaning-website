import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { Container, Eyebrow } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { QuoteForm } from "@/components/quote-form";
import { company, regions } from "@/lib/site-data";

export function Contact() {
  return (
    <section id="contact" className="bg-gradient-to-b from-sky-50/70 via-white to-sky-50/70 py-24 sm:py-32">
      <Container className="grid gap-12 lg:grid-cols-5">
        <Reveal className="lg:col-span-2">
          <Eyebrow>Get In Touch</Eyebrow>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">
            Schedule your free estimate
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-500">
            Tell us a bit about your building and we will get back to you with a fast,
            no-obligation quote — most requests are answered the same business day.
          </p>

          <div className="mt-10 space-y-5">
            <a href={company.phoneHref} className="flex items-center gap-3 text-slate-800">
              <span className="flex size-10 items-center justify-center rounded-xl bg-sky-100 text-sky-600">
                <Phone className="size-4" />
              </span>
              <span className="font-medium">{company.phone}</span>
            </a>
            <a href={`mailto:${company.email}`} className="flex items-center gap-3 text-slate-800">
              <span className="flex size-10 items-center justify-center rounded-xl bg-sky-100 text-sky-600">
                <Mail className="size-4" />
              </span>
              <span className="font-medium">{company.email}</span>
            </a>
            <div className="flex items-start gap-3 text-slate-800">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-sky-100 text-sky-600">
                <MapPin className="size-4" />
              </span>
              <div className="text-sm">
                {regions.map((region) => (
                  <p key={region.name} className="font-medium">
                    {region.name}, {region.state}
                  </p>
                ))}
              </div>
            </div>
            <div className="flex items-start gap-3 text-slate-800">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-sky-100 text-sky-600">
                <Clock className="size-4" />
              </span>
              <div className="text-sm">
                {company.hours.map((h) => (
                  <p key={h.days} className="flex justify-between gap-6 font-medium">
                    <span>{h.days}</span>
                    <span className="text-slate-500">{h.hours}</span>
                  </p>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="rounded-3xl border border-sky-200/60 bg-white/80 p-8 shadow-sm shadow-sky-200/40 backdrop-blur-md lg:col-span-3">
          <QuoteForm />
        </Reveal>
      </Container>
    </section>
  );
}
