import Link from "next/link";
import { serviceAreas } from "@/lib/site-data";
export function ServiceAreasTeaser() {
  return <section className="sg-coverage" aria-label="Where I work"><div className="sg-wrap sg-coverage-inner">
    <span className="sg-eyebrow">Where I work</span>
    <div>{serviceAreas.map(area => <Link key={area.slug} href={`/service-areas/${area.slug}`}>{area.name}<span aria-hidden="true"> ↗</span></Link>)}</div>
    <p>Nearby? Include your address in your quote request.</p>
  </div></section>;
}
