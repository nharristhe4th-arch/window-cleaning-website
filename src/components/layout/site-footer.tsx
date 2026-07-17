import Link from "next/link";
import { Mail, MapPin, Phone, Sparkles } from "lucide-react";
import { Container } from "@/components/section";
import { company, regions, serviceAreas, services } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-brand-navy-950 text-white/70">
      <Container className="grid grid-cols-1 gap-12 py-16 sm:grid-cols-2 lg:grid-cols-5">
        <div className="sm:col-span-2 lg:col-span-2">
          <Link href="/" className="flex items-center gap-2 text-white">
            <span className="flex size-9 items-center justify-center rounded-lg bg-brand-sky-500/20 text-brand-sky-400">
              <Sparkles className="size-5" />
            </span>
            <span className="text-lg font-bold tracking-tight">{company.name}</span>
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-relaxed">
            Student-owned, locally operated commercial window cleaning. We help retail
            storefronts, offices, and medical buildings make a spotless first impression —
            backed by {company.reviewCount} five-star Google reviews.
          </p>
          <div className="mt-6 space-y-3 text-sm">
            <a href={company.phoneHref} className="flex items-center gap-2 hover:text-white">
              <Phone className="size-4 text-brand-sky-400" /> {company.phone}
            </a>
            <a href={`mailto:${company.email}`} className="flex items-center gap-2 hover:text-white">
              <Mail className="size-4 text-brand-sky-400" /> {company.email}
            </a>
            <div className="flex items-start gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0 text-brand-sky-400" />
              <span>Indianapolis Metro, IN &amp; Greater Charleston, SC</span>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white">Services</h3>
          <ul className="mt-4 space-y-3 text-sm">
            {services.map((service) => (
              <li key={service.slug}>
                <Link href={`/#services`} className="hover:text-white">
                  {service.shortName}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white">Indianapolis Metro</h3>
          <ul className="mt-4 space-y-3 text-sm">
            {serviceAreas
              .filter((area) => area.region === regions[0].name)
              .map((area) => (
                <li key={area.slug}>
                  <Link href={`/service-areas/${area.slug}`} className="hover:text-white">
                    {area.name}
                  </Link>
                </li>
              ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white">Greater Charleston</h3>
          <ul className="mt-4 space-y-3 text-sm">
            {serviceAreas
              .filter((area) => area.region === regions[1].name)
              .map((area) => (
                <li key={area.slug}>
                  <Link href={`/service-areas/${area.slug}`} className="hover:text-white">
                    {area.name}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-4 py-6 text-xs text-white/50 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>
          <p>Student-owned &amp; locally operated commercial window cleaning.</p>
        </Container>
      </div>
    </footer>
  );
}
