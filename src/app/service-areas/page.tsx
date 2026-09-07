import Link from "next/link";
import { pageMetadata } from "@/lib/page-metadata";
import { serviceAreas } from "@/lib/site-data";
export const metadata = pageMetadata("Charleston Window Cleaning Service Areas | Squeegee Guys", "Squeegee Guys cleans windows in Charleston, Mount Pleasant, and Daniel Island. Nearby? Include your address when requesting a free quote.", "/service-areas");
export default function ServiceAreasPage() {
  return <>
    <section className="sg-hero"><div className="sg-wrap"><span className="sg-eyebrow">Service areas</span><h1>Window cleaning around Charleston</h1><p>We provide residential, commercial, and property management window cleaning in Charleston, Mount Pleasant, and Daniel Island. Nearby? Include your address in your quote request.</p><Link className="sg-cta" href="/contact#quote">Get a free quote</Link></div></section>
    <section className="sg-section"><div className="sg-wrap"><h2>Where we work</h2><div className="sg-area-list">{serviceAreas.map(area => <article key={area.slug}><div><h3><Link href={`/service-areas/${area.slug}`}>{area.name}, SC <span aria-hidden="true">↗</span></Link></h3><p>{area.intro}</p></div></article>)}</div></div></section>
  </>;
}
