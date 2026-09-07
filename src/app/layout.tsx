import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { company, serviceAreas } from "@/lib/site-data";
import { siteUrl } from "@/lib/site-url";
const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"], display: "swap" });
const title = "Window Cleaning Charleston, SC | Squeegee Guys";
const description = "Residential, commercial, and property management window cleaning in Charleston, Mount Pleasant, and Daniel Island. Get a free quote from Squeegee Guys.";
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: title, template: "%s | Squeegee Guys" }, description,
  authors: [{ name: company.name }],
  openGraph: { type: "website", locale: "en_US", url: siteUrl, siteName: company.name, title, description },
  twitter: { card: "summary_large_image", title, description },
  robots: { index: true, follow: true },
};
const jsonLd = {
  "@context": "https://schema.org", "@type": "Organization",
  name: company.name, url: siteUrl, telephone: "+13177641211", email: company.email,
  description: "Owner-operated window cleaning in Charleston, Mount Pleasant, and Daniel Island, South Carolina.",
  areaServed: serviceAreas.map(area => ({ "@type": area.slug === "daniel-island" ? "Place" : "City", name: `${area.name}, South Carolina` })),
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={`${geistSans.variable} h-full antialiased`}><body className="flex min-h-full flex-col">
    <a className="sg-skip" href="#main-content">Skip to content</a>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\u003c") }} />
    <SiteHeader /><main id="main-content" className="flex-1">{children}</main><SiteFooter />
  </body></html>;
}
