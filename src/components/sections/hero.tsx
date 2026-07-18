"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Phone, ShieldCheck, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FloatingPaths } from "@/components/ui/background-paths";
import { Container } from "@/components/section";
import { company } from "@/lib/site-data";

const title = "Window Cleaning Done Right";
const words = title.split(" ");

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-sky-50 to-white">
      <div className="absolute inset-0">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>

      <Container className="relative flex min-h-[92vh] flex-col justify-center gap-10 py-28 lg:py-36">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap items-center gap-3"
        >
          <span className="inline-flex items-center gap-1.5 rounded-full border border-sky-200/60 bg-white/70 px-4 py-1.5 text-xs font-semibold text-sky-900 shadow-sm shadow-sky-200/40 backdrop-blur-md">
            <Star className="size-3.5 fill-sky-500 text-sky-500" />
            {company.reviewCount} Five-Star Google Reviews
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-sky-200/60 bg-white/70 px-4 py-1.5 text-xs font-semibold text-sky-900 shadow-sm shadow-sky-200/40 backdrop-blur-md">
            <ShieldCheck className="size-3.5 text-sky-500" />
            Insured &amp; Student-Owned
          </span>
        </motion.div>

        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-7xl">
            {words.map((word, wordIndex) => (
              <span key={wordIndex} className="mr-4 inline-block last:mr-0">
                {word.split("").map((letter, letterIndex) => (
                  <motion.span
                    key={`${wordIndex}-${letterIndex}`}
                    initial={{ y: 60, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      delay: wordIndex * 0.1 + letterIndex * 0.03,
                      type: "spring",
                      stiffness: 150,
                      damping: 25,
                    }}
                    className="inline-block bg-gradient-to-r from-sky-900 to-sky-600 bg-clip-text text-transparent"
                  >
                    {letter}
                  </motion.span>
                ))}
              </span>
            ))}
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-xl text-lg text-balance text-slate-600 sm:text-xl"
          >
            Professional window cleaning for homes and businesses across the
            Indianapolis metro and greater Charleston region — from everyday
            residential care to storefronts, offices, and medical buildings
            that need to make a great first impression.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-4 sm:flex-row sm:items-center"
        >
          <Button asChild size="lg" className="h-14 rounded-full px-8 text-base">
            <Link href="/contact">Get Free Quote</Link>
          </Button>
          <a
            href={company.phoneHref}
            className="inline-flex h-14 items-center justify-center gap-2 rounded-full border border-sky-200/60 bg-white/70 px-8 text-base font-semibold text-sky-900 shadow-sm shadow-sky-200/40 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/90 hover:shadow-md hover:shadow-sky-200/50"
          >
            <Phone className="size-5" />
            Call Today: {company.phone}
          </a>
        </motion.div>
      </Container>
    </section>
  );
}
