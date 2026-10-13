"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Preloader() {
  const root = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          if (root.current) root.current.style.display = "none";
        },
      });
      // Carga corta; la portada empieza a animarse mientras la cortina sube
      tl.from(".pl-char", { yPercent: 110, stagger: 0.035, duration: 0.55, ease: "power4.out" })
        .to(".pl-bar", { scaleX: 1, duration: 0.6, ease: "power2.inOut" }, "-=0.3")
        .to(".pl-char", { yPercent: -110, stagger: 0.02, duration: 0.35, ease: "power4.in" }, "+=0.05")
        .to(root.current, { yPercent: -100, duration: 0.6, ease: "expo.inOut" }, "-=0.15")
        .call(() => window.dispatchEvent(new Event("preloader:done")), null, "-=0.4");
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <div className="preloader" ref={root} aria-hidden="true">
      <div className="pl-word">
        {"Redsight".split("").map((c, i) => (
          <span key={i} className="pl-mask">
            <span className="pl-char">{c}</span>
          </span>
        ))}
      </div>
      <div className="pl-bar" />
    </div>
  );
}
