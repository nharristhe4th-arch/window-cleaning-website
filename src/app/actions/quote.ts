// Replace src/app/actions/quote.ts together with the supplied quote-form.tsx.
"use server";

import { Resend } from "resend";
import { company } from "@/lib/site-data";

export type QuoteFormState = {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: { name?: string; email?: string; location?: string };
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const properties = new Set(["Home", "HOA or managed property", "Storefront", "Office", "Other"]);
const services = new Set(["Outside", "Inside", "Inside and outside", "Not sure"]);
const failure: QuoteFormState = { status: "error", message: "Your request wasn’t sent. Your details are still here." };

export async function submitQuoteRequest(_previous: QuoteFormState, formData: FormData): Promise<QuoteFormState> {
  const field = (name: string) => String(formData.get(name) ?? "").trim();
  const name = field("name");
  const email = field("email");
  const location = field("location");
  const business = field("business");
  const phone = field("phone");
  const message = field("message");
  const property = field("property");
  const service = field("service");
  const errors: NonNullable<QuoteFormState["errors"]> = {};
  if (!name || name.length > 150) errors.name = "Enter your name.";
  if (!EMAIL_PATTERN.test(email) || email.length > 254) errors.email = "Enter an email address I can reply to.";
  if (!location || location.length > 200) errors.location = "Enter the property’s city or neighborhood.";
  if (Object.keys(errors).length) return { status: "error", message: "Check the highlighted details.", errors };
  if (business.length > 200 || phone.length > 50 || message.length > 5000) return { status: "error", message: "One of your answers is too long. Shorten it and try again." };
  if (!process.env.RESEND_API_KEY) {
    console.error("Quote email configuration is missing.");
    return failure;
  }
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      // Keeps the existing sender. A verified sender can be set in QUOTE_FROM_EMAIL.
      from: process.env.QUOTE_FROM_EMAIL || `${company.name} Website <onboarding@resend.dev>`,
      to: [company.email],
      replyTo: email,
      subject: `Window-cleaning quote: ${(business || name).replace(/[\r\n]+/g, " ")}`,
      text: [
        `Name: ${name}`, `Email: ${email}`, `Phone: ${phone || "Not supplied"}`,
        `Property city or neighborhood: ${location}`,
        `Property type: ${properties.has(property) ? property : "Not specified"}`,
        `Company or HOA: ${business || "Not supplied"}`,
        `Glass to clean: ${services.has(service) ? service : "Not specified"}`,
        "", "Property details:", message || "Not supplied",
      ].join("\n"),
    });
    if (error) { console.error("Quote email provider did not accept the request."); return failure; }
    return { status: "success" };
  } catch {
    console.error("Quote email request failed.");
    return failure;
  }
}
