import ScrollExpandMedia from "@/components/blocks/scroll-expansion-hero";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { equipment } from "@/lib/site-data";
import { images } from "@/lib/images";

export function ScrollShowcase() {
  return (
    <ScrollExpandMedia
      mediaType="image"
      mediaSrc={images.glassFacade}
      bgImageSrc={images.cityDusk}
      title="See The Difference"
      date="Professional Equipment"
      scrollToExpand="Scroll to expand"
      textBlend
    >
      <div className="mx-auto max-w-3xl text-center">
        <h3 className="text-2xl font-bold text-slate-800 sm:text-3xl">
          Streak-free results, powered by pure water technology
        </h3>
        <p className="mt-4 text-lg text-slate-500">
          We use professional water-fed pole systems and deionized pure water to safely
          clean windows from the ground, even several stories up. No streaks, no spots,
          no residue — just consistently spotless glass.
        </p>
        <div className="mt-8 grid gap-6 text-left sm:grid-cols-3">
          {equipment.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-sky-200/60 bg-white/70 p-5 shadow-sm shadow-sky-200/40 backdrop-blur-md"
            >
              <h4 className="font-semibold text-slate-800">{item.title}</h4>
              <p className="mt-2 text-sm text-slate-500">{item.description}</p>
            </div>
          ))}
        </div>
        <Button asChild size="lg" className="mt-10 h-12 rounded-full px-8 text-base">
          <Link href="/contact">Get Your Free Quote</Link>
        </Button>
      </div>
    </ScrollExpandMedia>
  );
}
