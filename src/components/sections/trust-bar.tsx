import { Container } from "@/components/section";
import { trustSignals } from "@/lib/site-data";

export function TrustBar() {
  return (
    <section className="border-b border-border bg-white">
      <Container className="grid grid-cols-2 gap-8 py-10 sm:grid-cols-4">
        {trustSignals.map((item) => (
          <div key={item.label} className="text-center">
            <div className="text-3xl font-bold text-brand-navy-950 sm:text-4xl">{item.stat}</div>
            <div className="mt-1 text-xs font-medium tracking-wide text-muted-foreground uppercase sm:text-sm">
              {item.label}
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
}
