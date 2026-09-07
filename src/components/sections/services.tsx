import { services } from "@/lib/site-data";
export function Services() {
  return <section id="services" className="sg-section"><div className="sg-wrap">
    <span className="sg-eyebrow">Window cleaning &amp; exterior washing</span>
    <h2>Residential, commercial &amp; property management</h2>
    <p>From single homes and storefronts to full property portfolios, we tailor every service to how your property is used. Window cleaning, pressure washing, and soft washing are available for residential and commercial properties.</p>
    <div className="sg-grid">{services.map((service,i) => <article id={service.slug} key={service.slug} className="sg-card sg-service">
      <span className="sg-service-number" aria-hidden="true">{String(i+1).padStart(2,"0")}</span>
      <h3>{service.name}</h3><p>{service.description}</p>{service.detail && <p>{service.detail}</p>}
    </article>)}</div>
  </div></section>;
}
