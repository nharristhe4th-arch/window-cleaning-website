import { CalendarCheck, CheckCircle2, GraduationCap, History, Star } from "lucide-react";
import { Container, SectionHeading } from "@/components/section";
import { company, whyChooseUs, whyUsPillars } from "@/lib/site-data";

const pillarIcons = {
  "graduation-cap": GraduationCap,
  history: History,
  "calendar-check": CalendarCheck,
  star: Star,
} as const;

export function WhyChooseUs() {
  return (
    <section id="why-us" className="bg-white py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow={company.tagline}
          title="A local, college-owned team that shows up and gets it right"
          description="We built Squeegee Guys on the fundamentals that make businesses trust a vendor for the long term — and four years in, we've got the track record to back it up."
        />

        <p className="mx-auto mt-8 max-w-3xl text-center text-lg leading-relaxed text-muted-foreground">
          {company.name} was founded by {company.founders} — two college students who turned a simple
          observation, that clean windows change how customers see a business, into a company built on
          doing the job right every time. {company.yearsExperience} years later, we&apos;re still locally
          owned and operated, still run by people who show up to the job site, and still living by the
          tagline that&apos;s followed us since day one: <span className="font-semibold text-brand-navy-950">{company.tagline}</span>.
        </p>

        <div className="mt-16 grid gap-8 sm:grid-cols-2">
          {whyUsPillars.map((pillar) => {
            const Icon = pillarIcons[pillar.icon as keyof typeof pillarIcons];
            return (
              <div
                key={pillar.title}
                className="flex flex-col gap-4 rounded-2xl border border-border bg-secondary/30 p-8"
              >
                <div className="flex size-12 items-center justify-center rounded-full bg-brand-navy-950/5 text-brand-navy-800">
                  <Icon className="size-6" />
                </div>
                <h3 className="text-xl font-semibold text-brand-navy-950">{pillar.title}</h3>
                <p className="leading-relaxed text-muted-foreground">{pillar.paragraph}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-20 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
          {whyChooseUs.map((item) => (
            <div key={item.title} className="flex flex-col gap-3">
              <div className="flex size-10 items-center justify-center rounded-full bg-brand-navy-950/5 text-brand-navy-800">
                <CheckCircle2 className="size-5" />
              </div>
              <h3 className="font-semibold text-brand-navy-950">{item.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
