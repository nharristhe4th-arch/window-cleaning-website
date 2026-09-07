import Link from "next/link";
export function Pricing() {
  return <section id="pricing" className="sg-section sg-section--wash"><div className="sg-wrap sg-split">
    <div><span className="sg-eyebrow">Your quote</span><h2>Start with the glass you want cleaned</h2><p>Inside, outside, or both? Include your address and any windows that are hard to reach.</p><p>For managed properties, add each address and the work needed there.</p><Link href="/contact#quote" className="sg-cta">Get a free quote</Link></div>
    <div className="sg-card sg-quote-details"><h3>Details to include</h3><dl>
      <div><dt>The glass</dt><dd>Which windows need cleaning? A rough count helps, but it is optional.</dd></div>
      <div><dt>Access</dt><dd>Mention upper floors, locked gates, or windows that will not open.</dd></div>
      <div><dt>Extra work</dt><dd>List screens or tracks you want included. Flag any hard-water spots.</dd></div>
      <div><dt>Timing</dt><dd>Include your preferred date or a deadline for listing photos.</dd></div>
    </dl></div>
  </div></section>;
}
