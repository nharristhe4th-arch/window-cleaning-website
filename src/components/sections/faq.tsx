import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Container, SectionHeading } from "@/components/section";
import { faqs } from "@/lib/site-data";

export function Faq() {
  return (
    <section id="faq" className="bg-white py-24 sm:py-32">
      <Container className="max-w-3xl">
        <SectionHeading
          eyebrow="Common Questions"
          title="Frequently asked questions"
          description="Answers to what commercial customers ask us most often. Have a different question? We are happy to help."
        />

        <Accordion type="single" collapsible className="mt-12">
          {faqs.map((faq) => (
            <AccordionItem key={faq.question} value={faq.question} className="border-border">
              <AccordionTrigger className="py-5 text-base font-semibold text-brand-navy-950 hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </section>
  );
}
