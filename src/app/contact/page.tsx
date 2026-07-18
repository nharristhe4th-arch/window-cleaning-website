import type { Metadata } from "next";
import { Container } from "@/components/section";
import { Contact } from "@/components/sections/contact";
import { Faq } from "@/components/sections/faq";
import { company } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contact Us: Get a Free Commercial Window Cleaning Quote",
  description:
    "Request a free quote from Squeegee Guys, a student-owned commercial window cleaning company serving the Indianapolis metro and greater Charleston region.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-white via-sky-50 to-white py-20 sm:py-28">
        <Container className="text-center">
          <span className="inline-flex items-center rounded-full border border-sky-200/60 bg-white/70 px-4 py-1.5 text-xs font-semibold text-sky-900 shadow-sm shadow-sky-200/40 backdrop-blur-md">
            {company.reviewCount} Five-Star Google Reviews
          </span>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-balance text-slate-800 sm:text-5xl">
            Request Your Free Quote
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-balance text-slate-500">
            Tell us about your building and we will follow up with a fast, no-obligation
            estimate. Most requests hear back the same business day.
          </p>
        </Container>
      </section>
      <Contact />
      <Faq />
    </>
  );
}
