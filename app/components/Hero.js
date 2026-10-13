"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { site } from "../data";

export default function Hero() {
  const root = useRef(null);
  const [reelOpen, setReelOpen] = useState(false);
  const tiles = useRef([]);

  // Portada: carga y reproduce solo los reels visibles (en celular, uno)
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let visible = true;
    const sync = () =>
      tiles.current.forEach((v, i) => {
        if (!v) return;
        const shown = getComputedStyle(v.parentElement).display !== "none";
        if (shown && !v.getAttribute("src")) {
          v.src = site.heroVideos[i].src;
          v.addEventListener("loadedmetadata", () => (v.currentTime = site.heroVideos[i].offset || 0), { once: true });
        }
        if (shown && visible && !reduce) v.play().catch(() => {});
        else v.pause();
      });
    sync();
    window.addEventListener("resize", sync, { passive: true });
    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
      sync();
    });
    io.observe(root.current);

    // Parallax suave del mosaico con el mouse
    let move;
    if (!reduce && window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      const gx = gsap.quickTo(".hero-grid", "x", { duration: 1.2, ease: "power3" });
      const gy = gsap.quickTo(".hero-grid", "y", { duration: 1.2, ease: "power3" });
      move = (e) => {
        gx((e.clientX / window.innerWidth - 0.5) * -28);
        gy((e.clientY / window.innerHeight - 0.5) * -16);
      };
      window.addEventListener("pointermove", move);
    }
    return () => {
      window.removeEventListener("resize", sync);
      if (move) window.removeEventListener("pointermove", move);
      io.disconnect();
    };
  }, []);

  useEffect(() => {
    let safety;
    const ctx = gsap.context(() => {
      gsap.set(".hero-char", { yPercent: 120 });
      gsap.set(".hero-fade", { autoAlpha: 0, y: 20 });
      let started = false;
      const intro = () => {
        if (started) return;
        started = true;
        ctx.add(() =>
          gsap
            .timeline()
            .fromTo(".hero-grid", { scale: 1.16, autoAlpha: 0 }, { scale: 1, autoAlpha: 1, duration: 2.2, ease: "expo.out" })
            .to(".hero-char", { yPercent: 0, stagger: 0.035, duration: 0.95, ease: "power4.out" }, 0.05)
            .to(".hero-fade", { autoAlpha: 1, y: 0, stagger: 0.1, duration: 0.8, ease: "power3.out" }, 0.45)
        );
      };
      window.addEventListener("preloader:done", intro, { once: true });
      safety = setTimeout(intro, 3000); // seguridad: si la carga se traba, la portada aparece igual

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
    return () => {
      clearTimeout(safety);
      ctx.revert();
    };
  }, []);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setReelOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section className="hero" id="inicio" ref={root}>
      <div className="hero-media-wrap" data-cursor="Ver reel" onClick={() => setReelOpen(true)}>
        <div className="hero-media">
          <div className="hero-grid">
            {site.heroVideos.map((v, i) => (
              <div key={v.src} className={`hc ${v.solo ? "solo" : ""}`}>
                <video ref={(el) => (tiles.current[i] = el)} poster={v.poster} muted loop playsInline preload="none" />
              </div>
            ))}
          </div>
          <div className="fog f1" />
          <div className="fog f2" />
          <div className="fog f3" />
        </div>
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
