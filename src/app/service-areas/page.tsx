import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { Container, SectionHeading } from "@/components/section";
import { CtaBanner } from "@/components/sections/cta-banner";
import { regions, serviceAreas } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Commercial Window Cleaning Service Areas",
  description:
    "Squeegee Guys provides commercial window cleaning throughout the Indianapolis metro area — including Carmel, Fishers, Noblesville, Westfield, and Zionsville — and the greater Charleston region, including Mount Pleasant, North Charleston, Summerville, and Goose Creek.",
  alternates: {
    canonical: "/service-areas",
  },
};

export default function ServiceAreasPage() {
  return (
    <>
      <section className="bg-brand-navy-950 py-20 sm:py-28">
        <Container className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-balance text-white sm:text-5xl">
            Commercial Window Cleaning Service Areas
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-balance text-white/70">
            Proudly serving businesses throughout the Indianapolis metro area and the
            greater Charleston region. Do not see your city? Contact us — we are happy
            to check if you are within our service area.
          </p>
        </Container>
      </section>

      <section className="bg-white py-24 sm:py-32">
        <Container>
          <SectionHeading title="Where we work" align="left" />
          <div className="mt-14 grid gap-12 lg:grid-cols-2">
            {regions.map((region) => (
              <div key={region.name}>
                <div className="flex items-center gap-2 text-brand-navy-800">
                  <MapPin className="size-5" />
                  <h2 className="text-2xl font-bold text-brand-navy-950">{region.name}</h2>
                </div>
                <p className="mt-2 text-muted-foreground">{region.summary}</p>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {serviceAreas
                    .filter((a) => a.region === region.name)
                    .map((area) => (
                      <Link
                        key={area.slug}
                        href={`/service-areas/${area.slug}`}
                        className="group flex items-center justify-between rounded-2xl border border-border bg-secondary/30 px-5 py-4 text-sm font-semibold text-brand-navy-950 transition-colors hover:border-brand-sky-500 hover:bg-white"
                      >
                        Commercial Window Cleaning {area.name}
                        <ArrowRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-brand-sky-500" />
                      </Link>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
