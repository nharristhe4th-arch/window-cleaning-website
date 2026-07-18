import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container, SectionHeading } from "@/components/section";
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal";
import { process } from "@/lib/site-data";

export function Process() {
  return (
    <section id="process" className="bg-gradient-to-b from-white via-sky-50/60 to-white py-24 sm:py-32">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="How It Works"
            title="Getting spotless windows is simple"
            description="No complicated back-and-forth. Just a fast quote, a scheduled visit, and consistently clean glass."
          />
        </Reveal>

        <RevealGroup className="mt-16 grid gap-8 md:grid-cols-3">
          {process.map((item, index) => (
            <RevealItem
              key={item.step}
              className="relative rounded-3xl border border-sky-200/60 bg-white/70 p-8 shadow-sm shadow-sky-200/40 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-sky-200/50"
            >
              <span className="text-5xl font-bold text-sky-200">{item.step}</span>
              <h3 className="mt-4 text-xl font-bold text-slate-800">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-500">{item.description}</p>
              {index < process.length - 1 && (
                <ArrowRight className="absolute top-8 -right-4 hidden size-6 text-sky-300 md:block" />
              )}
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal delay={0.2} className="mt-14 flex justify-center">
          <Button asChild size="lg" className="h-14 rounded-full px-8 text-base font-semibold">
            <Link href="/contact">Schedule Your Estimate</Link>
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
