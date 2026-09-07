import Image from "next/image";
export function WorkGallery() {
  return <section id="our-work" className="sg-section sg-section--wash"><div className="sg-wrap">
    <span className="sg-eyebrow">Our work</span><h2>See the difference</h2>
    <div className="sg-work-grid">
      <figure><Image className="sg-photo sg-photo--comparison" src="/images/work/before-after-stone-sill.jpg" alt="Side-by-side views of a stone-sill window before and after cleaning" width={1448} height={1086} sizes="(max-width: 767px) calc(100vw - 40px), 704px" /><div className="sg-comparison-labels"><span>Before</span><span>After</span></div><figcaption className="sg-caption">Before and after: stone-sill window.</figcaption></figure>
      <figure><Image className="sg-photo sg-photo--action" src="/images/work/gallery-technician-action.jpg" alt="Squeegee Guys window cleaner using a water-fed pole to reach a second-story window" width={1500} height={2000} sizes="(max-width: 767px) calc(100vw - 40px), 352px" /><figcaption className="sg-caption">A water-fed pole reaching an upper-floor window.</figcaption></figure>
    </div>
    <div className="sg-grid sg-instagram-work">
      <figure><Image className="sg-photo" src="/images/work/charleston-concrete-before-after.webp" alt="Before and after pressure washing a concrete area beside a planter in Charleston" width={1080} height={1356} sizes="(max-width: 767px) calc(100vw - 40px), 548px" /><figcaption className="sg-caption">Pressure washing: concrete beside a planter, Charleston.</figcaption></figure>
      <figure><Image className="sg-photo" src="/images/work/charleston-brick-steps-before-after.webp" alt="Before and after cleaning brick entrance steps in Charleston" width={1080} height={1356} sizes="(max-width: 767px) calc(100vw - 40px), 548px" /><figcaption className="sg-caption">Before and after: brick entrance steps, Charleston.</figcaption></figure>
    </div>
    <p className="sg-instagram-source">From our <a href="https://www.instagram.com/squeegeeguys.windows/p/DcTm440jlZl/" target="_blank" rel="noopener noreferrer">Charleston job on Instagram</a>.</p>
  </div></section>;
}
