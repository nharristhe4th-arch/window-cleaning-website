import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { Container, SectionHeading } from "@/components/section";
import { regions, serviceAreas } from "@/lib/site-data";

export function ServiceAreasTeaser() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Service Areas"
          title="Proudly serving two growing regions"
          description="If your business is nearby but you don't see your city listed, contact us — we're happy to see if you're within our service area."
        />

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          {regions.map((region) => (
            <div key={region.name} className="rounded-3xl border border-border bg-secondary/30 p-8">
              <div className="flex items-center gap-2 text-brand-navy-800">
                <MapPin className="size-5" />
                <h3 className="text-lg font-bold text-brand-navy-950">{region.name}</h3>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{region.summary}</p>
              <ul className="mt-6 grid grid-cols-2 gap-3">
                {serviceAreas
                  .filter((a) => a.region === region.name)
                  .map((area) => (
                    <li key={area.slug}>
                      <Link
                        href={`/service-areas/${area.slug}`}
                        className="group flex items-center justify-between rounded-xl border border-border bg-white px-4 py-3 text-sm font-medium text-brand-navy-950 transition-colors hover:border-brand-sky-500 hover:text-brand-sky-600"
                      >
                        {area.name}
                        <ArrowRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-brand-sky-500" />
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
