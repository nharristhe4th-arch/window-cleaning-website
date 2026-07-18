import { Quote, Star } from "lucide-react";
import { Container, SectionHeading } from "@/components/section";
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal";
import { company, testimonials } from "@/lib/site-data";

export function Testimonials() {
  return (
    <section className="bg-gradient-to-b from-sky-50/70 via-white to-sky-50/70 py-14 sm:py-24 lg:py-32">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="What Customers Say"
            title={`Trusted by homes and businesses with ${company.reviewCount} five-star reviews`}
            description="We measure success by whether customers keep us on. Here's what a few of them have to say."
          />
        </Reveal>

        <RevealGroup className="no-scrollbar -mx-6 mt-16 flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-2 md:mx-0 md:grid md:grid-cols-2 md:overflow-visible md:px-0 md:pb-0 lg:grid-cols-3">
          {testimonials.map((t) => (
            <RevealItem
              key={t.name}
              className="flex w-[85%] shrink-0 snap-center flex-col rounded-3xl border border-sky-200/60 bg-white/70 p-7 shadow-sm shadow-sky-200/40 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-sky-200/50 md:w-auto md:shrink"
            >
              <div className="flex items-center gap-0.5 text-sky-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-current" />
                ))}
              </div>
              <Quote className="mt-4 size-6 text-sky-200" />
              <blockquote className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                {t.quote}
              </blockquote>
              <figcaption className="mt-6 border-t border-sky-200/60 pt-4">
                <div className="font-semibold text-slate-800">{t.name}</div>
                <div className="text-xs text-slate-500">
                  {t.role} &middot; {t.location}
                </div>
              </figcaption>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
