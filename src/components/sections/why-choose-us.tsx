import Image from "next/image";
export function WhyChooseUs() {
  return <section id="about-nick" className="sg-section"><span id="why-us" /><div className="sg-wrap sg-owner-grid">
    <figure><Image src="/images/team/founders.jpg" alt="Nick Harris and Eli Bennett in window-cleaning shirts" width={1200} height={1600} className="sg-photo sg-photo--portrait" sizes="(max-width: 767px) calc(100vw - 40px), 420px" /><figcaption className="sg-caption">Nick Harris and Eli Bennett.</figcaption></figure>
    <div><span className="sg-eyebrow">About Nick</span><h2>I own Squeegee Guys.<br />I also do the cleaning.</h2><p>I’m Nick Harris. I operate Squeegee Guys in Charleston and nearby areas.</p><p>For your home, tell me which windows need attention. For a property you manage, include the scope and access contact.</p><p className="sg-signature">Nick Harris<br /><span>Owner and window cleaner</span></p></div>
  </div></section>;
}
