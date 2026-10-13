"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Media from "./Media";
import { site } from "../data";

export default function Hero() {
  const root = useRef(null);
  const [reelOpen, setReelOpen] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".hero-char", { yPercent: 120 });
      gsap.set(".hero-fade", { autoAlpha: 0, y: 20 });
      const intro = () =>
        ctx.add(() =>
          gsap
            .timeline()
          .fromTo(".hero-media", { scale: 1.25 }, { scale: 1, duration: 2.2, ease: "expo.out" })
          .to(".hero-char", { yPercent: 0, stagger: 0.045, duration: 1.1, ease: "power4.out" }, 0.1)
          .to(".hero-fade", { autoAlpha: 1, y: 0, stagger: 0.12, duration: 0.9, ease: "power3.out" }, 0.6)
        );
      window.addEventListener("preloader:done", intro, { once: true });

      gsap.to(".hero-media", {
        yPercent: 25,
        ease: "none",
        scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: true },
      });
      gsap.to(".hero-title", {
        yPercent: -40,
        autoAlpha: 0.2,
        ease: "none",
        scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: true },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setReelOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section className="hero" id="inicio" ref={root}>
      <div className="hero-media-wrap" data-cursor="Ver reel" onClick={() => setReelOpen(true)}>
        <Media className="hero-media" video={site.reel} image={site.reelPoster} tone={["#2a2f22", "#050505"]} />
        <div className="hero-shade" />
      </div>

      <div className="hero-content">
        <p className="hero-fade eyebrow">Productora audiovisual — {site.location}</p>
        <h1 className="hero-title">
          {site.brand.split("").map((c, i) => (
            <span key={i} className="mask">
              <span className="hero-char">{c}</span>
            </span>
          ))}
        </h1>
        <p className="hero-fade hero-by">{site.by}</p>
        <div className="hero-bottom">
          <p className="hero-fade hero-tagline">{site.tagline}</p>
          <button className="hero-fade btn-reel" onClick={() => setReelOpen(true)}>
            <span className="btn-reel-icon">▶</span> Ver reel
          </button>
        </div>
      </div>

      <div className="hero-fade scroll-hint">
        <span>Scroll</span>
        <i />
      </div>

      {reelOpen && (
        <div className="reel-modal" onClick={() => setReelOpen(false)} data-cursor="Cerrar">
          <video src={site.reel} poster={site.reelPoster} controls autoPlay playsInline onClick={(e) => e.stopPropagation()} />
          <button className="reel-close" onClick={() => setReelOpen(false)} aria-label="Cerrar reel">
            ✕
          </button>
        </div>
      )}
    </section>
  );
}
