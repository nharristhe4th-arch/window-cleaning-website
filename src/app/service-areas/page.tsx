import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { Container, SectionHeading } from "@/components/section";
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal";
import { CtaBanner } from "@/components/sections/cta-banner";
import { regions, serviceAreas } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Commercial Window Cleaning Service Areas",
  description:
    "Squeegee Guys provides commercial window cleaning throughout the Indianapolis metro area, including Carmel, Fishers, Noblesville, Westfield, and Zionsville, and the greater Charleston region, including Mount Pleasant, North Charleston, Summerville, and Goose Creek.",
  alternates: {
    canonical: "/service-areas",
  },
};

export default function ServiceAreasPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-white via-sky-50 to-white py-20 sm:py-28">
        <Container className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-balance text-slate-800 sm:text-5xl">
            Commercial Window Cleaning Service Areas
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-balance text-slate-500">
            Proudly serving businesses throughout the Indianapolis metro area and the
            greater Charleston region. Do not see your city? Contact us, and we are happy
            to check if you are within our service area.
          </p>
        </Container>
      </section>

      <section className="bg-white py-14 sm:py-24 lg:py-32">
        <Container>
          <Reveal>
            <SectionHeading title="Where we work" align="left" />
          </Reveal>
          <div className="mt-14 grid gap-12 lg:grid-cols-2">
            {regions.map((region) => (
              <Reveal key={region.name}>
                <div className="flex items-center gap-2 text-sky-600">
                  <MapPin className="size-5" />
                  <h2 className="text-2xl font-bold text-slate-800">{region.name}</h2>
                </div>
                <p className="mt-2 text-slate-500">{region.summary}</p>
                <RevealGroup className="mt-6 grid gap-3 sm:grid-cols-2">
                  {serviceAreas
                    .filter((a) => a.region === region.name)
                    .map((area) => (
                      <RevealItem key={area.slug}>
                        <Link
                          href={`/service-areas/${area.slug}`}
                          className="group flex items-center justify-between rounded-2xl border border-sky-200/60 bg-white/70 px-5 py-4 text-sm font-semibold text-slate-800 shadow-sm shadow-sky-200/40 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-sky-400 hover:shadow-md hover:shadow-sky-200/50"
                        >
                          Commercial Window Cleaning {area.name}
                          <ArrowRight className="size-4 text-slate-400 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:text-sky-500" />
                        </Link>
                      </RevealItem>
                    ))}
                </RevealGroup>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
