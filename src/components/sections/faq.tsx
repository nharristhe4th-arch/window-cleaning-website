import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Container, SectionHeading } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { faqs } from "@/lib/site-data";

export function Faq() {
  return (
    <section id="faq" className="bg-gradient-to-b from-white via-sky-50/40 to-white py-14 sm:py-24 lg:py-32">
      <Container className="max-w-3xl">
        <Reveal>
          <SectionHeading
            eyebrow="Common Questions"
            title="Frequently asked questions"
            description="Answers to what commercial customers ask us most often. Have a different question? We are happy to help."
          />
        </Reveal>

        <Reveal delay={0.15}>
          <Accordion
            type="single"
            collapsible
            className="mt-12 overflow-hidden rounded-3xl border border-sky-200/60 bg-white/70 px-6 shadow-sm shadow-sky-200/40 backdrop-blur-md"
          >
            {faqs.map((faq) => (
              <AccordionItem key={faq.question} value={faq.question} className="border-sky-200/60">
                <AccordionTrigger className="py-5 text-base font-semibold text-slate-800 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed text-slate-500">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </Container>
    </section>
  );
}
