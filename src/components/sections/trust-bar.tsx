import { Container } from "@/components/section";
import { RevealGroup, RevealItem } from "@/components/reveal";
import { trustSignals } from "@/lib/site-data";

export function TrustBar() {
  return (
    <section className="border-b border-sky-200/60 bg-white/60 backdrop-blur-sm">
      <Container>
        <RevealGroup className="grid grid-cols-2 gap-8 py-10 sm:grid-cols-4">
          {trustSignals.map((item) => (
            <RevealItem key={item.label} className="text-center">
              <div className="text-3xl font-bold text-sky-600 sm:text-4xl">{item.stat}</div>
              <div className="mt-1 text-xs font-medium tracking-wide text-slate-500 uppercase sm:text-sm">
                {item.label}
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
