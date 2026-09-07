import { faqs } from "@/lib/site-data";
export function Faq() {
  return <section id="faq" className="sg-section"><div className="sg-wrap sg-faq-wrap">
    <span className="sg-eyebrow">Questions</span><h2>Frequently asked questions</h2>
    <div className="sg-faq-list">{faqs.map(faq => <details key={faq.question}><summary>{faq.question}<span aria-hidden="true">+</span></summary><p>{faq.answer}</p></details>)}</div>
  </div></section>;
}
