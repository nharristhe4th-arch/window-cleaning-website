"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  const section = useRef<HTMLElement>(null);
  const glass = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = section.current;
    const pane = glass.current;
    if (!root || !pane) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    const paint = () => {
      frame = 0;
      root.classList.toggle("is-animated", !reduced.matches);
      if (reduced.matches) return;
      const desktop = window.innerWidth >= 900 && window.innerHeight >= 700;
      const bounds = desktop ? root.getBoundingClientRect() : pane.getBoundingClientRect();
      const distance = desktop ? window.innerHeight * .55 : bounds.height * .8;
      const travelled = desktop ? 80 - bounds.top : window.innerHeight * .72 - bounds.top;
      const progress = Math.min(1, Math.max(0, travelled / distance));
      // The clipping boundary and blade share the same 14-degree geometry.
      const slant = Math.tan(14 * Math.PI / 180) * pane.clientWidth / 2;
      const centre = -slant - 18 + progress * (pane.clientHeight + 2 * slant + 36);
      pane.style.setProperty("--wipe", `${centre}px`);
      pane.style.setProperty("--slant", `${slant}px`);
      pane.style.setProperty("--tool-opacity", progress > .98 ? "0" : "1");
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(paint); };
    paint();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    reduced.addEventListener("change", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      reduced.removeEventListener("change", schedule);
    };
  }, []);

  return <section ref={section} className="sg-clean-hero" aria-labelledby="home-heading">
    <div className="sg-clean-stage"><div className="sg-wrap sg-clean-layout">
      <div className="sg-clean-copy">
        <span className="sg-eyebrow">Squeegee Guys · Charleston, SC</span>
        <h1 id="home-heading">Window Cleaning<br /><span>Done Right.</span></h1>
        <p>Professional window cleaning for homes and businesses across the greater Charleston region, from everyday residential care to storefronts, offices, and properties under your management.</p>
        <div className="sg-clean-categories" aria-label="Our services"><span>Residential</span><span>Commercial</span><span>Property management</span></div>
        <Link className="sg-cta" href="/contact#quote">Get a free quote <span aria-hidden="true">↗</span></Link>
        <p className="sg-clean-location">Charleston · Mount Pleasant · Daniel Island</p>
      </div>
      <div className="sg-window-demo">
        <div ref={glass} className="sg-window" role="img" aria-label="Before and after window cleaning, revealed as you scroll">
          <Image src="/images/work/window-after.webp" alt="" fill preload sizes="(max-width: 899px) 100vw, 520px" className="sg-window-view" />
          <div className="sg-window-dirt">
            <Image src="/images/work/window-before.webp" alt="" fill preload sizes="(max-width: 899px) 100vw, 520px" className="sg-window-view" />
          </div>
          <div className="sg-squeegee"><div className="sg-squeegee-blade" /><div className="sg-squeegee-neck" /><div className="sg-squeegee-handle" /></div>
        </div>
        <div className="sg-window-sill" aria-hidden="true" />
        <p className="sg-scroll-hint"><span aria-hidden="true">↓</span> Before to after. Scroll to clean.</p>
      </div>
    </div></div>
  </section>;
}
