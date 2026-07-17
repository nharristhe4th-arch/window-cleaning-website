import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { TrustBar } from "@/components/sections/trust-bar";
import { Services } from "@/components/sections/services";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { ScrollShowcase } from "@/components/sections/scroll-showcase";
import { Process } from "@/components/sections/process";
import { About } from "@/components/sections/about";
import { Testimonials } from "@/components/sections/testimonials";
import { Faq } from "@/components/sections/faq";
import { ServiceAreasTeaser } from "@/components/sections/service-areas-teaser";
import { CtaBanner } from "@/components/sections/cta-banner";
import { Contact } from "@/components/sections/contact";

export const metadata: Metadata = {
  title: "Commercial Window Cleaning in Indianapolis & Charleston",
  description:
    "Student-owned commercial window cleaning for storefronts, offices, and medical buildings across the Indianapolis metro and greater Charleston region. Get a free quote today.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Services />
      <WhyChooseUs />
      <ScrollShowcase />
      <Process />
      <About />
      <Testimonials />
      <Faq />
      <ServiceAreasTeaser />
      <CtaBanner />
      <Contact />
    </>
  );
}
