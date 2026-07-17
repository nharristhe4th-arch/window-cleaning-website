import { Quote, Star } from "lucide-react";
import { Container, SectionHeading } from "@/components/section";
import { company, testimonials } from "@/lib/site-data";

export function Testimonials() {
  return (
    <section className="bg-secondary/40 py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="What Businesses Say"
          title={`Trusted by businesses with ${company.reviewCount} five-star reviews`}
          description="We measure success by whether customers keep us on — here's what a few of them have to say."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-3xl border border-border bg-card p-7 shadow-sm"
            >
              <div className="flex items-center gap-0.5 text-brand-sky-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-current" />
                ))}
              </div>
              <Quote className="mt-4 size-6 text-brand-navy-950/15" />
              <blockquote className="mt-2 flex-1 text-sm leading-relaxed text-foreground/85">
                {t.quote}
              </blockquote>
              <figcaption className="mt-6 border-t border-border pt-4">
                <div className="font-semibold text-brand-navy-950">{t.name}</div>
                <div className="text-xs text-muted-foreground">
                  {t.role} &middot; {t.location}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
