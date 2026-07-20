import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { company } from "@/lib/site-data";
import { siteUrl } from "@/lib/site-url";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Squeegee Guys | Residential & Commercial Window Cleaning in Indianapolis & Charleston",
    template: "%s | Squeegee Guys",
  },
  description:
    "Squeegee Guys is a student-owned window cleaning company serving homes and businesses in Indianapolis, Carmel, Fishers, and the greater Charleston, SC region. Residential, storefront, office, and recurring maintenance window cleaning with 16+ five-star reviews.",
  keywords: [
    "commercial window cleaning",
    "storefront window cleaning",
    "office window cleaning",
    "business window cleaning",
    "window cleaners near me",
    "commercial glass cleaning",
    "property management window cleaning",
    "commercial window cleaning Indianapolis",
    "commercial window cleaning Charleston",
  ],
  authors: [{ name: company.name }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: company.name,
    title: "Squeegee Guys | Residential & Commercial Window Cleaning",
    description:
      "Professional, recurring window cleaning for homes and businesses, including storefronts, offices, and medical buildings, across the Indianapolis metro and greater Charleston region.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Squeegee Guys | Residential & Commercial Window Cleaning",
    description:
      "Student-owned, locally operated window cleaning for homes and businesses across the Indianapolis metro and greater Charleston region.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: company.name,
  description:
    "Student-owned commercial window cleaning company serving businesses across the Indianapolis metro area and the greater Charleston region.",
  telephone: company.phone,
  email: company.email,
  url: siteUrl,
  priceRange: "$$",
  areaServed: [
    { "@type": "City", name: "Indianapolis" },
    { "@type": "City", name: "Carmel" },
    { "@type": "City", name: "Fishers" },
    { "@type": "City", name: "Noblesville" },
    { "@type": "City", name: "Westfield" },
    { "@type": "City", name: "Zionsville" },
    { "@type": "City", name: "Charleston" },
    { "@type": "City", name: "Mount Pleasant" },
    { "@type": "City", name: "North Charleston" },
    { "@type": "City", name: "Summerville" },
    { "@type": "City", name: "Goose Creek" },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "16",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
