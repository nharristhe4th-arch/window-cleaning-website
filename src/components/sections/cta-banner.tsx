import Link from "next/link";
import { Phone, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/section";
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
    <section className="relative overflow-hidden bg-brand-navy-950 py-20 sm:py-24">
      <div className="absolute inset-0">
        <SafeImage
          src={images.officeBuildingAlt}
          alt="Glass office building exterior"
          fill
          sizes="100vw"
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy-950 via-brand-navy-950/90 to-brand-navy-950/70" />
      </div>
      <Container className="relative flex flex-col items-center gap-6 text-center">
        <h2 className="max-w-2xl text-3xl font-bold text-balance text-white sm:text-4xl">{title}</h2>
        <p className="max-w-xl text-lg text-white/70">{description}</p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="h-14 rounded-full bg-brand-sky-500 px-8 text-base font-semibold text-white hover:bg-brand-sky-400"
          >
            <Link href="/contact">
              <Sparkles className="size-5" />
              Get Your Free Quote
            </Link>
          </Button>
          <a
            href={company.phoneHref}
            className="inline-flex h-14 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 text-base font-semibold text-white hover:bg-white/10"
          >
            <Phone className="size-5" />
            {company.phone}
          </a>
        </div>
      </Container>
    </section>
  );
}
