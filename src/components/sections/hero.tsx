import Link from "next/link";
import { Phone, ShieldCheck, Star } from "lucide-react";
import { LiquidButton } from "@/components/ui/liquid-glass-button";
import { WebGLShader } from "@/components/ui/web-gl-shader";
import { Container } from "@/components/section";
import { company } from "@/lib/site-data";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-black">
      <WebGLShader />

      <Container className="relative flex min-h-[92vh] flex-col justify-center gap-10 py-28 lg:py-36">
        <div className="flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold text-white/90 backdrop-blur-sm">
            <Star className="size-3.5 fill-brand-sky-400 text-brand-sky-400" />
            {company.reviewCount} Five-Star Google Reviews
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold text-white/90 backdrop-blur-sm">
            <ShieldCheck className="size-3.5 text-brand-sky-400" />
            Insured &amp; Student-Owned
          </span>
        </div>

        <div className="max-w-3xl [text-shadow:0_2px_24px_rgba(0,0,0,0.85)]">
          <h1 className="text-4xl font-bold tracking-tight text-balance text-white sm:text-5xl lg:text-7xl">
            Window Cleaning Done Right
          </h1>
          <p className="mt-6 max-w-xl text-lg text-balance text-white/90 sm:text-xl">
            Professional window cleaning for homes and businesses across the
            Indianapolis metro and greater Charleston region — from everyday
            residential care to storefronts, offices, and medical buildings
            that need to make a great first impression.
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <Link href="/contact">
            <LiquidButton size="xl" className="text-white [text-shadow:0_2px_12px_rgba(0,0,0,0.9)]">
              Get Free Quote
            </LiquidButton>
          </Link>
          <a
            href={company.phoneHref}
            className="inline-flex h-14 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 text-base font-semibold text-white backdrop-blur-sm hover:bg-white/10"
          >
            <Phone className="size-5" />
            Call Today: {company.phone}
          </a>
        </div>
      </Container>
    </section>
  );
}
