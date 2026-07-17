import Link from "next/link";
import { Building2, Calendar, CheckCircle2, ClipboardList, Home, Store } from "lucide-react";
import { Container, SectionHeading } from "@/components/section";
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
    <section id="services" className="bg-secondary/40 py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="What We Do"
          title="Commercial window cleaning for every kind of business"
          description="From single storefronts to full commercial portfolios, we tailor every service to how your business actually operates."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = icons[service.icon];
            const isFeature = index === services.length - 1;
            return (
              <div
                key={service.slug}
                id={service.slug}
                className={`group relative flex flex-col rounded-3xl border border-border bg-card p-8 shadow-sm transition-shadow hover:shadow-lg ${
                  isFeature ? "lg:col-span-3 lg:flex-row lg:items-center lg:gap-12 lg:bg-brand-navy-950 lg:text-white" : ""
                }`}
              >
                <div className={isFeature ? "lg:flex-1" : ""}>
                  <div
                    className={`flex size-12 items-center justify-center rounded-2xl ${
                      isFeature ? "bg-white/10 text-brand-sky-400" : "bg-brand-navy-950/5 text-brand-navy-800"
                    }`}
                  >
                    <Icon className="size-6" />
                  </div>
                  <h3 className={`mt-5 text-xl font-bold ${isFeature ? "text-white" : "text-brand-navy-950"}`}>
                    {service.name}
                  </h3>
                  <p className={`mt-3 text-sm leading-relaxed ${isFeature ? "text-white/70" : "text-muted-foreground"}`}>
                    {service.description}
                  </p>
                </div>
                <ul className={`mt-6 grid grid-cols-2 gap-x-4 gap-y-2 lg:flex-1 ${isFeature ? "" : ""}`}>
                  {service.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className={`flex items-center gap-2 text-sm ${isFeature ? "text-white/85" : "text-foreground/80"}`}
                    >
                      <CheckCircle2
                        className={`size-4 shrink-0 ${isFeature ? "text-brand-sky-400" : "text-brand-navy-800"}`}
                      />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="mt-14 flex flex-col items-center gap-4 text-center">
          <p className="text-muted-foreground">
            Not sure which service fits your building?
          </p>
          <Link
            href="/contact"
            className="text-base font-semibold text-brand-navy-900 underline underline-offset-4 hover:text-brand-sky-500"
          >
            Talk to us — we&apos;ll recommend a plan →
          </Link>
        </div>
      </Container>
    </section>
  );
}
