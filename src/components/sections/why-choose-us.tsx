import { CalendarCheck, CheckCircle2, GraduationCap, History, Star } from "lucide-react";
import { Container, SectionHeading } from "@/components/section";
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal";
import { company, whyChooseUs, whyUsPillars } from "@/lib/site-data";

const pillarIcons = {
  "graduation-cap": GraduationCap,
  history: History,
  "calendar-check": CalendarCheck,
  star: Star,
} as const;

export function WhyChooseUs() {
  return (
    <section id="why-us" className="bg-gradient-to-b from-white via-sky-50/50 to-white py-24 sm:py-32">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={company.tagline}
            title="A local, college-owned team that shows up and gets it right"
            description="We built Squeegee Guys on the fundamentals that make businesses trust a vendor for the long term — and four years in, we've got the track record to back it up."
          />
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mx-auto mt-8 max-w-3xl text-center text-lg leading-relaxed text-slate-500">
            {company.name} was founded by {company.founders} — two college students who turned a simple
            observation, that clean windows change how customers see a business, into a company built on
            doing the job right every time. {company.yearsExperience} years later, we&apos;re still locally
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

        <RevealGroup className="mt-20 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
          {whyChooseUs.map((item) => (
            <RevealItem key={item.title} className="flex flex-col gap-3">
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
