import { services } from "@/lib/site-data";
export function Services() {
  return <section id="services" className="sg-section"><div className="sg-wrap">
    <span className="sg-eyebrow">Window cleaning</span>
    <h2>For your home or a property you manage</h2>
    <p>Tell me where the property is and which windows need cleaning.</p>
    <div className="sg-grid">{services.map((service,i) => <article id={service.slug} key={service.slug} className="sg-card sg-service">
      <span className="sg-service-number" aria-hidden="true">{String(i+1).padStart(2,"0")}</span>
      <h3>{service.name}</h3><p>{service.description}</p><p>{service.detail}</p>
    </article>)}</div>
  </div></section>;
}
