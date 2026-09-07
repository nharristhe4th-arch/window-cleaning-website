import { company } from "@/lib/site-data";
import { QuoteForm } from "@/components/quote-form";
export function Contact({ page = false, defaultLocation = "" }: { page?: boolean; defaultLocation?: string }) {
  const Heading = page ? "h1" : "h2";
  return <section id="quote" className="sg-section sg-section--wash"><span id="contact" /><div className="sg-wrap">
    <div className="sg-contact-heading"><span className="sg-eyebrow">Squeegee Guys</span><Heading>{page ? "Get a free window-cleaning quote" : "Get a free quote"}</Heading><p>I’m Nick, owner of Squeegee Guys. Tell me where the property is and what needs cleaning.</p></div>
    <div className="sg-contact-layout">
      <div className="sg-card sg-form-card"><QuoteForm defaultLocation={defaultLocation} /></div>
      <aside className="sg-contact-details"><h2>Charleston-area window cleaning</h2><p>For your home or a property you manage.</p><ul><li>Charleston</li><li>Mount Pleasant</li><li>Daniel Island</li></ul><p>Nearby? Include your address in your request.</p><div className="sg-contact-links"><a href={company.phoneHref}>{company.phone}</a><a href={`mailto:${company.email}`}>{company.email}</a></div></aside>
    </div>
  </div></section>;
}
