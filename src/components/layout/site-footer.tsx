import Link from "next/link";
import { company, serviceAreas, services } from "@/lib/site-data";
export function SiteFooter() {
  return <footer className="sg-footer">
    <div className="sg-wrap sg-footer-grid">
      <div><Link className="sg-footer-brand" href="/">Squeegee Guys</Link>
        <p>Locally owned and operated. Residential, commercial, and property management window cleaning in Charleston, Mount Pleasant, and Daniel Island. Pressure washing and soft washing are also available.</p>
        <address><a href={company.phoneHref}>{company.phone}</a><a href={`mailto:${company.email}`}>{company.email}</a></address>
      </div>
      <nav aria-label="Window cleaning services"><h2>Window cleaning</h2>{services.map(s => <Link key={s.slug} href={`/#${s.slug}`}>{s.shortName}</Link>)}</nav>
      <nav aria-label="Service areas"><h2>Service areas</h2>{serviceAreas.map(a => <Link key={a.slug} href={`/service-areas/${a.slug}`}>{a.name}, SC</Link>)}<p>Nearby? Include your address in your quote request.</p></nav>
    </div>
    <div className="sg-wrap sg-footer-bottom">© {new Date().getFullYear()} Squeegee Guys. All rights reserved.</div>
  </footer>;
}
