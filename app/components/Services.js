"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { services } from "../data";

export default function Services() {
  const root = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".service", {
        y: 50,
        autoAlpha: 0,
        stagger: 0.12,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: ".services-grid", start: "top 85%" },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section className="services section" id="servicios" ref={root}>
      <p className="eyebrow">(03) Lo que hacemos</p>
      <div className="services-grid">
        {services.map((s, i) => (
          <article className="service" key={s.title}>
            <span className="service-index">0{i + 1}</span>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
