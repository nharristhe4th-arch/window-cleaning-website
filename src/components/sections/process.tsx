export function Process() {
  const steps = [
    { title: "Request a free quote", text: "Tell us about your property and how often you’d like service. We’ll prepare a quote based on the work you need." },
    { title: "Schedule your service", text: "We’ll find a time that works around your schedule or business hours and set up recurring visits if you’d like." },
    { title: "Enjoy spotless windows", text: "We handle the glass so you can get back to running your business or enjoying your home." },
  ];
  return <section id="process" className="sg-section sg-section--wash"><div className="sg-wrap">
    <span className="sg-eyebrow">How it works</span><h2>Getting spotless windows is simple</h2>
    <div className="sg-grid sg-services-grid">{steps.map((step,i) => <article key={step.title}><span className="sg-service-number">0{i+1}</span><h3>{step.title}</h3><p>{step.text}</p></article>)}</div>
  </div></section>;
}
