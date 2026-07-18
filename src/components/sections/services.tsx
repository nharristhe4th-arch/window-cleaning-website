import Link from "next/link";
import { Building2, Calendar, CheckCircle2, ClipboardList, Home, Store } from "lucide-react";
import { Container, SectionHeading } from "@/components/section";
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal";
import { services } from "@/lib/site-data";

const icons = {
  building: Building2,
  storefront: Store,
  clipboard: ClipboardList,
  home: Home,
  calendar: Calendar,
} as const;

export function Services() {
  return (
    <section id="services" className="bg-gradient-to-b from-sky-50/70 via-white to-sky-50/70 py-24 sm:py-32">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="What We Do"
            title="Commercial window cleaning for every kind of business"
            description="From single storefronts to full commercial portfolios, we tailor every service to how your business actually operates."
          />
        </Reveal>

        <RevealGroup className="mt-16 grid gap-6 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = icons[service.icon];
            const isFeature = index === services.length - 1;
            return (
              <RevealItem
                key={service.slug}
                id={service.slug}
                className={`group relative flex flex-col rounded-3xl border p-8 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 ${
                  isFeature
                    ? "border-transparent bg-gradient-to-br from-sky-500 to-sky-600 text-white shadow-lg shadow-sky-300/50 lg:col-span-3 lg:flex-row lg:items-center lg:gap-12"
                    : "border-sky-200/60 bg-white/70 shadow-sm shadow-sky-200/40 hover:shadow-lg hover:shadow-sky-200/50"
                }`}
              >
                <div className={isFeature ? "lg:flex-1" : ""}>
                  <div
                    className={`flex size-12 items-center justify-center rounded-2xl ${
                      isFeature ? "bg-white/15 text-white" : "bg-sky-100 text-sky-600"
                    }`}
                  >
                    <Icon className="size-6" />
                  </div>
                  <h3 className={`mt-5 text-xl font-bold ${isFeature ? "text-white" : "text-slate-800"}`}>
                    {service.name}
                  </h3>
                  <p className={`mt-3 text-sm leading-relaxed ${isFeature ? "text-white/80" : "text-slate-500"}`}>
                    {service.description}
                  </p>
                </div>
                <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-2 lg:flex-1">
                  {service.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className={`flex items-center gap-2 text-sm ${isFeature ? "text-white/90" : "text-slate-600"}`}
                    >
                      <CheckCircle2
                        className={`size-4 shrink-0 ${isFeature ? "text-white" : "text-sky-500"}`}
                      />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </RevealItem>
            );
          })}
        </RevealGroup>

        <Reveal className="mt-14 flex flex-col items-center gap-4 text-center">
          <p className="text-slate-500">Not sure which service fits your building?</p>
          <Link
            href="/contact"
            className="text-base font-semibold text-sky-700 underline underline-offset-4 transition-colors duration-300 hover:text-sky-500"
          >
            Talk to us — we&apos;ll recommend a plan →
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
