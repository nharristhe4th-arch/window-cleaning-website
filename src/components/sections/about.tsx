import { GraduationCap, HeartHandshake, TrendingUp } from "lucide-react";
import { Container, Eyebrow } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { SafeImage } from "@/components/safe-image";
import { images } from "@/lib/images";
import { company } from "@/lib/site-data";

const points = [
  {
    icon: GraduationCap,
    title: "Started in college",
    description:
      "Squeegee Guys began while our founder was still a student, after noticing how much dirty windows hurt a business's image compared to a competitor's spotless storefront next door.",
  },
  {
    icon: TrendingUp,
    title: "Grown through hard work",
    description:
      "Word of mouth, quality service, and consistent follow-through have driven our growth, not gimmicks or discounting.",
  },
  {
    icon: HeartHandshake,
    title: "Built for long-term relationships",
    description:
      "We would rather earn a recurring account than chase one-time jobs. Most of our growth comes from businesses who kept us on.",
  },
];

export function About() {
  return (
    <section className="bg-white py-14 sm:py-24 lg:py-32">
      <Container className="grid items-center gap-16 lg:grid-cols-2">
        <Reveal>
          <Eyebrow>Our Story</Eyebrow>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">
            A student-owned business built on doing the job right
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-slate-500">
            {company.name} started while our founder was in college, after seeing firsthand
            how much clean windows affect the way customers perceive a business. A
            storefront with streaky, dusty glass sends a message, and it is not the one
            most business owners want to send.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-slate-500">
            What started as a handful of storefront accounts has grown into a company
            trusted by offices, medical practices, restaurants, and property managers
            across two regions. That growth has come the hard way: through reliable
            scheduling, careful work, and treating every customer like a long-term
            relationship rather than a one-time job.
          </p>

          <div className="mt-10 space-y-6">
            {points.map((point) => (
              <div key={point.title} className="flex gap-4">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-sky-100 text-sky-600">
                  <point.icon className="size-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800">{point.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-500">
                    {point.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.15} className="relative">
          <div className="relative aspect-4/5 overflow-hidden rounded-3xl shadow-2xl shadow-sky-200/60">
            <SafeImage
              src={images.officeInterior}
              alt="Clean, professional commercial office space with spotless windows"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-8 -left-8 hidden w-56 rounded-2xl border border-sky-200/60 bg-white/80 p-6 shadow-xl shadow-sky-200/40 backdrop-blur-md sm:block">
            <div className="text-3xl font-bold text-sky-600">{company.reviewCount}</div>
            <div className="mt-1 text-sm text-slate-500">Five-star Google reviews and growing</div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
