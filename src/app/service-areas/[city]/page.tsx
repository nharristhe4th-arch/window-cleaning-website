import Link from "next/link";
import { notFound } from "next/navigation";
import { serviceAreas } from "@/lib/site-data";
import { pageMetadata } from "@/lib/page-metadata";
import { QuoteForm } from "@/components/quote-form";
type Props = { params: Promise<{ city: string }> };
export const dynamicParams = false;
export function generateStaticParams() { return serviceAreas.map(area => ({ city: area.slug })); }
export async function generateMetadata({ params }: Props) {
  const { city } = await params;
  const area = serviceAreas.find(a => a.slug === city);
  if (!area) notFound();
  return pageMetadata(area.title, area.description, `/service-areas/${area.slug}`);
}
export default async function CityPage({ params }: Props) {
  const { city } = await params;
  const area = serviceAreas.find(a => a.slug === city);
  if (!area) notFound();
  return <>
    <section className="sg-hero"><div className="sg-wrap"><Link className="sg-text-link sg-breadcrumb" href="/service-areas">Service areas</Link><h1>{area.heading}</h1><p>{area.intro}</p><Link className="sg-cta" href="#quote">Get a free quote</Link></div></section>
    <section className="sg-section"><div className="sg-wrap sg-split"><div><span className="sg-eyebrow">{area.name}</span><h2>{area.focusTitle}</h2>{area.paragraphs.map(p => <p key={p}>{p}</p>)}</div><aside className="sg-card"><h3>For your quote</h3><p>Inside, outside, or both? Include the glass you want cleaned and any access limits.</p><p>List screens or tracks you want included. Mention hard-water spots before asking about the price.</p></aside></div></section>
    <section id="quote" className="sg-section sg-section--wash"><div className="sg-wrap sg-contact-layout"><div><h2>Get a free quote for {area.name}</h2><p className="sg-form-intro">Include the windows you want cleaned and any access rules.</p><div className="sg-card sg-form-card"><QuoteForm defaultLocation={area.name} /></div></div><aside className="sg-contact-details"><h2>Other service areas</h2><nav aria-label="Other service areas" className="sg-area-nav">{serviceAreas.filter(a => a.slug !== area.slug).map(a => <Link className="sg-text-link" key={a.slug} href={`/service-areas/${a.slug}`}>{a.name}</Link>)}</nav><p>Nearby? Include your address in your quote request.</p></aside></div></section>
  </>;
}
