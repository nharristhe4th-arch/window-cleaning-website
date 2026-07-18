import Link from "next/link";
import { Phone, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { SafeImage } from "@/components/safe-image";
import { company } from "@/lib/site-data";
import { images } from "@/lib/images";

export function CtaBanner({
  title = "Let's Keep Your Business Looking Its Best",
  description = "Request a free, no-obligation quote today. Most requests get a response the same business day.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24">
      <div className="absolute inset-0">
        <SafeImage
          src={images.officeBuildingAlt}
          alt="Glass office building exterior"
          fill
          sizes="100vw"
          className="object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-sky-50/95 to-white" />
      </div>
      <Reveal>
        <Container className="relative flex flex-col items-center gap-6 text-center">
          <h2 className="max-w-2xl text-3xl font-bold text-balance text-slate-800 sm:text-4xl">{title}</h2>
          <p className="max-w-xl text-lg text-slate-500">{description}</p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button asChild size="lg" className="h-14 rounded-full px-8 text-base font-semibold">
              <Link href="/contact">
                <Sparkles className="size-5" />
                Get Your Free Quote
              </Link>
            </Button>
            <a
              href={company.phoneHref}
              className="inline-flex h-14 items-center justify-center gap-2 rounded-full border border-sky-200/60 bg-white/70 px-8 text-base font-semibold text-sky-900 shadow-sm shadow-sky-200/40 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/90 hover:shadow-md hover:shadow-sky-200/50"
            >
              <Phone className="size-5" />
              {company.phone}
            </a>
          </div>
        </Container>
      </Reveal>
    </section>
  );
}
