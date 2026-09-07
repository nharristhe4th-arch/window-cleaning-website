import Link from "next/link";
export function Hero() {
  return <section className="sg-hero" aria-labelledby="home-heading">
    <div className="sg-wrap">
      <span className="sg-eyebrow">Owned and operated by Nick Harris</span>
      <h1 id="home-heading">Window cleaning<br className="sg-desktop-break" /> in Charleston, SC</h1>
      <p>I’m Nick, owner of Squeegee Guys. I clean windows for homeowners and property managers.</p>
      <p className="sg-hero-areas">Serving Charleston, Mount Pleasant, and Daniel Island.</p>
      <Link className="sg-cta" href="/contact#quote">Get a free quote <span aria-hidden="true">↗</span></Link>
    </div>
  </section>;
}
