import { CalendarCheck, CheckCircle2, GraduationCap, History, Star } from "lucide-react";
import { Container, SectionHeading } from "@/components/section";
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal";
import { SafeImage } from "@/components/safe-image";
import { images } from "@/lib/images";
import { company, whyChooseUs, whyUsPillars } from "@/lib/site-data";

const pillarIcons = {
  "graduation-cap": GraduationCap,
  history: History,
  "calendar-check": CalendarCheck,
  star: Star,
} as const;

export function WhyChooseUs() {
  return (
    <section id="why-us" className="bg-gradient-to-b from-white via-sky-50/50 to-white py-14 sm:py-24 lg:py-32">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={company.tagline}
            title="A local, college-owned team that shows up and gets it right"
            description={`We built Squeegee Guys on the fundamentals that make businesses trust a vendor for the long term, and ${company.yearsExperience} years in, we've got the track record to back it up.`}
          />
        </Reveal>

        <Reveal delay={0.15} className="mt-12 grid items-center gap-10 lg:grid-cols-2">
          <div className="relative order-1">
            <div className="relative aspect-4/5 overflow-hidden rounded-3xl shadow-2xl shadow-sky-200/60">
              <SafeImage
                src={images.founders}
                alt="Nick Harris and Eli Bennett, founders of Squeegee Guys"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -right-4 -bottom-8 hidden w-56 rounded-2xl border border-sky-200/60 bg-white/80 p-6 shadow-xl shadow-sky-200/40 backdrop-blur-md sm:block">
              <div className="text-2xl font-bold text-sky-600">Nick &amp; Eli</div>
              <div className="mt-1 text-sm text-slate-500">Founders, {company.name}</div>
            </div>
          </div>
          <p className="order-2 text-center text-lg leading-relaxed text-slate-500 lg:text-left">
            {company.name} was founded by {company.founders}, two college students who turned a simple
            observation, that clean windows change how customers see a business, into a company built on
            doing the job right every time. {company.yearsExperience}{" "}years later, we&apos;re still locally
            owned and operated, still run by people who show up to the job site, and still living by the
            tagline that&apos;s followed us since day one: <span className="font-semibold text-sky-600">{company.tagline}</span>.
          </p>
        </Reveal>

        <RevealGroup className="mt-16 grid gap-8 sm:grid-cols-2">
          {whyUsPillars.map((pillar) => {
            const Icon = pillarIcons[pillar.icon as keyof typeof pillarIcons];
            return (
              <RevealItem
                key={pillar.title}
                className="flex flex-col gap-4 rounded-2xl border border-sky-200/60 bg-white/70 p-8 shadow-sm shadow-sky-200/40 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-sky-200/50"
              >
                <div className="flex size-12 items-center justify-center rounded-full bg-sky-100 text-sky-600">
                  <Icon className="size-6" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800">{pillar.title}</h3>
                <p className="leading-relaxed text-slate-500">{pillar.paragraph}</p>
              </RevealItem>
            );
          })}
        </RevealGroup>

        <RevealGroup className="no-scrollbar -mx-6 mt-20 flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-2 sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-5">
          {whyChooseUs.map((item) => (
            <RevealItem
              key={item.title}
              className="flex w-[45%] shrink-0 snap-center flex-col gap-3 sm:w-auto sm:shrink"
            >
              <div className="flex size-10 items-center justify-center rounded-full bg-sky-100 text-sky-600">
                <CheckCircle2 className="size-5" />
              </div>
              <h3 className="font-semibold text-slate-800">{item.title}</h3>
              <p className="text-sm leading-relaxed text-slate-500">{item.description}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
