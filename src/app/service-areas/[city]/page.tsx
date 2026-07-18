import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2, MapPin, Star } from "lucide-react";
import { Container, SectionHeading } from "@/components/section";
import { CtaBanner } from "@/components/sections/cta-banner";
import { QuoteForm } from "@/components/quote-form";
import { SafeImage } from "@/components/safe-image";
import { serviceAreas, services, testimonials } from "@/lib/site-data";
import { images } from "@/lib/images";

type Params = { city: string };

export function generateStaticParams(): Params[] {
  return serviceAreas.map((area) => ({ city: area.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { city } = await params;
  const area = serviceAreas.find((a) => a.slug === city);
  if (!area) return {};

  const title = `Commercial Window Cleaning ${area.name}, ${area.stateAbbr}`;
  const description = `Professional commercial window cleaning in ${area.name}, ${area.state}. Storefront, office, and recurring maintenance window cleaning from a student-owned, locally operated company. Get a free quote.`;

  return {
    title,
    description,
    alternates: {
      canonical: `/service-areas/${area.slug}`,
    },
    openGraph: {
      title,
      description,
    },
  };
}

export default async function CityPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { city } = await params;
  const area = serviceAreas.find((a) => a.slug === city);
  if (!area) notFound();

  const localTestimonial =
    testimonials.find((t) => t.location.startsWith(area.name)) ?? testimonials[0];

  const otherAreas = serviceAreas.filter((a) => a.region === area.region && a.slug !== area.slug);

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-sky-50 to-white py-24 sm:py-32">
        <div className="absolute inset-0">
          <SafeImage
            src={images.cityBlueSky}
            alt={`Commercial building in ${area.name}, ${area.state}`}
            fill
            sizes="100vw"
            priority
            className="object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-sky-50/90 to-white" />
        </div>
        <Container className="relative">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-sky-200/60 bg-white/70 px-4 py-1.5 text-xs font-semibold text-sky-900 shadow-sm shadow-sky-200/40 backdrop-blur-md">
            <MapPin className="size-3.5 text-sky-500" />
            {area.region}
          </span>
          <h1 className="mt-6 max-w-2xl text-4xl font-bold tracking-tight text-balance text-slate-800 sm:text-5xl">
            Commercial Window Cleaning in {area.name}, {area.stateAbbr}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-balance text-slate-500">{area.intro}</p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-sky-500 px-8 text-base font-semibold text-white shadow-sm shadow-sky-300/40 transition-all duration-300 hover:-translate-y-px hover:bg-sky-400 hover:shadow-md hover:shadow-sky-300/50"
            >
              Get Your Free Quote
            </Link>
            <Link
              href="/service-areas"
              className="inline-flex h-14 items-center justify-center gap-2 rounded-full border border-sky-200/60 bg-white/70 px-8 text-base font-semibold text-sky-900 shadow-sm shadow-sky-200/40 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/90 hover:shadow-md hover:shadow-sky-200/50"
            >
              View All Service Areas
            </Link>
          </div>
        </Container>
      </section>

      <section className="bg-white py-24 sm:py-32">
        <Container className="grid gap-16 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <SectionHeading
              align="left"
              eyebrow={`Serving ${area.name}`}
              title={`Local, reliable commercial window cleaning for ${area.name} businesses`}
            />
            <p className="mt-6 text-lg leading-relaxed text-slate-500">{area.focus}</p>

            <div className="mt-10">
              <h3 className="text-sm font-semibold tracking-wide text-sky-600 uppercase">
                Areas we regularly service in {area.name}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {area.districts.map((district) => (
                  <span
                    key={district}
                    className="rounded-full border border-sky-200/60 bg-white/70 px-4 py-1.5 text-sm text-slate-600 shadow-sm shadow-sky-200/40 backdrop-blur-md"
                  >
                    {district}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-sm font-semibold tracking-wide text-sky-600 uppercase">
                What we offer in {area.name}
              </h3>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {services.map((service) => (
                  <li key={service.slug} className="flex items-start gap-2 text-sm text-slate-600">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-sky-500" />
                    {service.name}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-12 rounded-3xl border border-sky-200/60 bg-white/70 p-7 shadow-sm shadow-sky-200/40 backdrop-blur-md">
              <div className="flex items-center gap-0.5 text-sky-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-3 text-base leading-relaxed text-slate-600">
                {localTestimonial.quote}
              </blockquote>
              <p className="mt-4 text-sm font-semibold text-slate-800">
                {localTestimonial.name} &middot; {localTestimonial.role}
              </p>
            </div>

            {otherAreas.length > 0 && (
              <div className="mt-12">
                <h3 className="text-sm font-semibold tracking-wide text-sky-600 uppercase">
                  Also serving nearby
                </h3>
                <div className="mt-4 flex flex-wrap gap-3">
                  {otherAreas.map((other) => (
                    <Link
                      key={other.slug}
                      href={`/service-areas/${other.slug}`}
                      className="group flex items-center gap-1 text-sm font-medium text-sky-700 transition-colors duration-300 hover:text-sky-500"
                    >
                      {other.name}
                      <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="lg:col-span-2">
            <div className="sticky top-24 rounded-3xl border border-sky-200/60 bg-white/70 p-8 shadow-sm shadow-sky-200/40 backdrop-blur-md">
              <h3 className="text-xl font-bold text-slate-800">
                Request a free quote in {area.name}
              </h3>
              <p className="mt-2 text-sm text-slate-500">
                Most quote requests are answered the same business day.
              </p>
              <div className="mt-6">
                <QuoteForm />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CtaBanner
        title={`Let's keep your ${area.name} business looking its best`}
        description="Request a free, no-obligation quote today."
      />
    </>
  );
}
