import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { Container, SectionHeading } from "@/components/section";
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal";
import { regions, serviceAreas } from "@/lib/site-data";

export function ServiceAreasTeaser() {
  return (
    <section className="bg-gradient-to-b from-sky-50/70 via-white to-sky-50/70 py-24 sm:py-32">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Service Areas"
            title="Proudly serving two growing regions"
            description="If your business is nearby but you don't see your city listed, contact us — we're happy to see if you're within our service area."
          />
        </Reveal>

        <RevealGroup className="mt-16 grid gap-10 lg:grid-cols-2">
          {regions.map((region) => (
            <RevealItem
              key={region.name}
              className="rounded-3xl border border-sky-200/60 bg-white/70 p-8 shadow-sm shadow-sky-200/40 backdrop-blur-md"
            >
              <div className="flex items-center gap-2 text-sky-600">
                <MapPin className="size-5" />
                <h3 className="text-lg font-bold text-slate-800">{region.name}</h3>
              </div>
              <p className="mt-2 text-sm text-slate-500">{region.summary}</p>
              <ul className="mt-6 grid grid-cols-2 gap-3">
                {serviceAreas
                  .filter((a) => a.region === region.name)
                  .map((area) => (
                    <li key={area.slug}>
                      <Link
                        href={`/service-areas/${area.slug}`}
                        className="group flex items-center justify-between rounded-xl border border-sky-200/60 bg-white px-4 py-3 text-sm font-medium text-slate-800 transition-all duration-300 hover:-translate-y-0.5 hover:border-sky-400 hover:text-sky-600 hover:shadow-md hover:shadow-sky-200/50"
                      >
                        {area.name}
                        <ArrowRight className="size-4 text-slate-400 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:text-sky-500" />
                      </Link>
                    </li>
                  ))}
              </ul>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
