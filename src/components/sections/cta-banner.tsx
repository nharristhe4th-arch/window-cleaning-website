import Link from "next/link";
export function CtaBanner({title = "Get a window-cleaning quote", description = "Tell me where the property is and which windows need cleaning."}: {title?: string; description?: string}) {
  return <section className="sg-section sg-section--wash"><div className="sg-wrap"><h2>{title}</h2><p>{description}</p><Link href="/contact#quote" className="sg-cta">Get a free quote</Link></div></section>;
}
