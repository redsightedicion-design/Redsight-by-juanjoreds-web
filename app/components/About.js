"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { about, stats, site } from "../data";

export default function About() {
  const root = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Las palabras se iluminan una a una mientras haces scroll
      gsap.fromTo(
        ".about-word",
        { opacity: 0.15 },
        {
          opacity: 1,
          stagger: 0.05,
          ease: "none",
          scrollTrigger: { trigger: ".about-text", start: "top 80%", end: "bottom 45%", scrub: true },
        }
      );
      // Contadores
      gsap.utils.toArray(".stat-num").forEach((el) => {
        const end = Number(el.dataset.value);
        const obj = { v: 0 };
        gsap.to(obj, {
          v: end,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 90%", once: true },
          onUpdate: () => (el.textContent = Math.round(obj.v)),
        });
      });
      gsap.from(".stat", {
        y: 40,
        autoAlpha: 0,
        stagger: 0.1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: ".stats", start: "top 85%" },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section className="about section" id="nosotros" ref={root}>
      <p className="eyebrow">(01) ¿Quiénes somos?</p>
      <p className="about-text">
        {about.split(" ").map((w, i) => (
          <span key={i} className="about-word">
            {w}{" "}
          </span>
        ))}
      </p>
      <p className="about-sign">
        Dirección — <em>{site.director}</em>
      </p>
      <div className="stats">
        {stats.map((s) => (
          <div className="stat" key={s.label}>
            <p className="stat-value">
              <span className="stat-num" data-value={s.value}>
                0
              </span>
              {s.suffix}
            </p>
            <p className="stat-label">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
