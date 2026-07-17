import Link from "next/link";
import { Phone, ShieldCheck, Sparkles, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/section";
import { SafeImage } from "@/components/safe-image";
import { company } from "@/lib/site-data";
import { images } from "@/lib/images";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-navy-950">
      <div className="absolute inset-0">
        <SafeImage
          src={images.heroBuilding}
          alt="Modern glass office building exterior"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-950 via-brand-navy-950/75 to-brand-navy-950/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy-950 via-brand-navy-950/55 to-transparent" />
      </div>

      <Container className="relative flex min-h-[92vh] flex-col justify-center gap-10 py-28 lg:py-36">
        <div className="flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold text-white/90">
            <Star className="size-3.5 fill-brand-sky-400 text-brand-sky-400" />
            {company.reviewCount} Five-Star Google Reviews
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold text-white/90">
            <ShieldCheck className="size-3.5 text-brand-sky-400" />
            Insured &amp; Student-Owned
          </span>
        </div>

        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-balance text-white sm:text-5xl lg:text-7xl">
            Commercial Window Cleaning Done Right
          </h1>
          <p className="mt-6 max-w-xl text-lg text-balance text-white/75 sm:text-xl">
            Professional window cleaning that helps your business make the best first
            impression — for retail storefronts, offices, medical buildings, and more
            across the Indianapolis metro and greater Charleston region.
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <Button
            asChild
            size="lg"
            className="h-14 rounded-full bg-brand-sky-500 px-8 text-base font-semibold text-white shadow-lg shadow-brand-sky-500/20 hover:bg-brand-sky-400"
          >
            <Link href="/contact">
              <Sparkles className="size-5" />
              Get Free Quote
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="h-14 rounded-full border-white/20 bg-white/5 px-8 text-base font-semibold text-white hover:bg-white/10 hover:text-white"
          >
            <Link href="/contact">Request Estimate</Link>
          </Button>
          <a
            href={company.phoneHref}
            className="inline-flex h-14 items-center justify-center gap-2 rounded-full px-8 text-base font-semibold text-white/90 underline-offset-4 hover:text-white hover:underline"
          >
            <Phone className="size-5" />
            Call Today: {company.phone}
          </a>
        </div>
      </Container>
    </section>
  );
}
