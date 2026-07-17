import type { Metadata } from "next";
import { Container } from "@/components/section";
import { Contact } from "@/components/sections/contact";
import { Faq } from "@/components/sections/faq";
import { company } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contact Us — Get a Free Commercial Window Cleaning Quote",
  description:
    "Request a free quote from Squeegee Guys, a student-owned commercial window cleaning company serving the Indianapolis metro and greater Charleston region.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-brand-navy-950 py-20 sm:py-28">
        <Container className="text-center">
          <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold text-white/90">
            {company.reviewCount} Five-Star Google Reviews
          </span>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-balance text-white sm:text-5xl">
            Request Your Free Quote
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-balance text-white/70">
            Tell us about your building and we will follow up with a fast, no-obligation
            estimate — most requests hear back the same business day.
          </p>
        </Container>
      </section>
      <Contact />
      <Faq />
    </>
  );
}
