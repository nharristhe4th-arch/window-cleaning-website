"use server";

import { Resend } from "resend";
import { company, serviceAreas, services } from "@/lib/site-data";

export type QuoteFormState = {
  status: "idle" | "success" | "error";
  message?: string;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function submitQuoteRequest(
  _prevState: QuoteFormState,
  formData: FormData,
): Promise<QuoteFormState> {
  const name = String(formData.get("name") ?? "").trim();
  const business = String(formData.get("business") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const serviceSlug = String(formData.get("service") ?? "");
  const locationSlug = String(formData.get("location") ?? "");
  const message = String(formData.get("message") ?? "").trim();

  if (!name || !business || !email || !phone) {
    return { status: "error", message: "Please fill in all required fields." };
  }

  if (!EMAIL_PATTERN.test(email)) {
    return { status: "error", message: "Please enter a valid email address." };
  }

  if (!process.env.RESEND_API_KEY) {
    console.error(
      "RESEND_API_KEY is not set. Quote request was not emailed:",
      { name, business, email, phone },
    );
    return {
      status: "error",
      message:
        "Sorry, our quote form isn't fully set up yet. Please call or email us directly.",
    };
  }

  const serviceName = services.find((s) => s.slug === serviceSlug)?.name ?? "Not specified";
  const locationName =
    serviceAreas.find((a) => a.slug === locationSlug)?.name ?? "Not specified / nearby";

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: `${company.name} Website <onboarding@resend.dev>`,
      to: [company.email],
      replyTo: email,
      subject: `New quote request: ${business}`,
      text: [
        `Name: ${name}`,
        `Business: ${business}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        `Service: ${serviceName}`,
        `Location: ${locationName}`,
        "",
        "Message:",
        message || "(none)",
      ].join("\n"),
    });

    if (error) {
      console.error("Resend API returned an error:", error);
      return {
        status: "error",
        message: "Something went wrong sending your request. Please call or email us directly.",
      };
    }

    return { status: "success" };
  } catch (error) {
    console.error("Failed to send quote request email:", error);
    return {
      status: "error",
      message: "Something went wrong sending your request. Please call or email us directly.",
    };
  }
}
