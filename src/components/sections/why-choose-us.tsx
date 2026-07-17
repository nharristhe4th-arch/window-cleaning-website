import { CheckCircle2 } from "lucide-react";
import { Container, SectionHeading } from "@/components/section";
import { whyChooseUs } from "@/lib/site-data";

export function WhyChooseUs() {
  return (
    <section id="why-us" className="bg-white py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Why Businesses Choose Us"
          title="A window cleaning partner you can actually rely on"
          description="We built Squeegee Guys on the fundamentals that make businesses trust a vendor for the long term."
        />

        <div className="mt-16 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
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
