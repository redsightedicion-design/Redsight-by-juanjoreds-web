"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { projects } from "../data";

// Muro de reels: cada video se reproduce en silencio al entrar en pantalla; ♪ activa el sonido (uno a la vez).
export default function Reels() {
  const root = useRef(null);
  const [soundOn, setSoundOn] = useState(null);
  const items = projects.flatMap((p) => (p.reels || []).map((r) => ({ id: r, name: p.name, wide: p.wide })));

  useEffect(() => {
    const videos = root.current.querySelectorAll("video");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let io;
    if (!reduce && "IntersectionObserver" in window) {
      io = new IntersectionObserver(
        (entries) =>
          entries.forEach((e) => {
            const v = e.target;
            if (e.isIntersecting) {
              v.preload = "auto";
              v.play().catch(() => {});
            } else v.pause();
          }),
        { threshold: 0.35 }
      );
      videos.forEach((v) => io.observe(v));
    }
    const ctx = gsap.context(() => {
      gsap.from(".reel-card", {
        y: 60,
        autoAlpha: 0,
        stagger: 0.06,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: ".reels-grid", start: "top 85%" },
      });
    }, root);
    return () => {
      io?.disconnect();
      ctx.revert();
    };
  }, []);

  useEffect(() => {
    root.current.querySelectorAll("video").forEach((v) => {
      v.muted = v.dataset.id !== soundOn;
      if (!v.muted) v.play().catch(() => {});
    });
  }, [soundOn]);

  return (
    <section className="reels section" id="reels" ref={root}>
      <p className="eyebrow">Reels para hoteles</p>
      <h2 className="reels-heading">
        La estética que <em>atrae miradas.</em>
      </h2>
      <div className="reels-grid">
        {items.map((it) => (
          <figure key={it.id} className={`reel-card ${it.wide ? "is-wide" : ""}`}>
            <video
              src={`/media/${it.id}.mp4`}
              poster={`/media/${it.id}.jpg`}
              data-id={it.id}
              muted
              loop
              playsInline
              preload="none"
              aria-label={`Reel de ${it.name}`}
            />
            <figcaption>{it.name}</figcaption>
            <button
              type="button"
              className="reel-sound"
              aria-pressed={soundOn === it.id}
              aria-label={soundOn === it.id ? "Silenciar" : "Activar sonido"}
              data-cursor="Sonido"
              onClick={() => setSoundOn((cur) => (cur === it.id ? null : it.id))}
            >
              ♪
            </button>
          </figure>
        ))}
      </div>
    </section>
  );
}
