import Image from "next/image";
export function WhyChooseUs() {
  return <section id="about-nick" className="sg-section"><span id="why-us" /><div className="sg-wrap sg-owner-grid">
    <figure><Image src="/images/team/founders.jpg" alt="Nick Harris and Eli Bennett in window-cleaning shirts" width={1200} height={1600} className="sg-photo sg-photo--portrait" sizes="(max-width: 767px) calc(100vw - 40px), 420px" /><figcaption className="sg-caption">Nick Harris and Eli Bennett.</figcaption></figure>
    <div><span className="sg-eyebrow">Our story</span><h2>A local team built on doing the job right</h2><p>Squeegee Guys was founded by Nick Harris and Eli Bennett, two college students who turned a simple observation—that clean windows change how customers see a business—into a company built on doing the job right.</p><p>We’re locally owned and operated, and still run by people who show up to the job site. Today, we provide residential, commercial, and property management window cleaning throughout the greater Charleston area.</p><p className="sg-signature">Nick Harris<br /><span>Owner and window cleaner</span></p></div>
  </div></section>;
}
