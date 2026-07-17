import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container, SectionHeading } from "@/components/section";
import { process } from "@/lib/site-data";

export function Process() {
  return (
    <section id="process" className="bg-brand-navy-950 py-24 sm:py-32">
      <Container>
        <SectionHeading
          light
          eyebrow="How It Works"
          title="Getting spotless windows is simple"
          description="No complicated back-and-forth. Just a fast quote, a scheduled visit, and consistently clean glass."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {process.map((item, index) => (
            <div key={item.step} className="relative rounded-3xl border border-white/10 bg-white/5 p-8">
              <span className="text-5xl font-bold text-brand-sky-400/40">{item.step}</span>
              <h3 className="mt-4 text-xl font-bold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">{item.description}</p>
              {index < process.length - 1 && (
                <ArrowRight className="absolute top-8 -right-4 hidden size-6 text-white/20 md:block" />
              )}
            </div>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <Button asChild size="lg" className="h-14 rounded-full bg-brand-sky-500 px-8 text-base font-semibold text-white hover:bg-brand-sky-400">
            <Link href="/contact">Schedule Your Estimate</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
