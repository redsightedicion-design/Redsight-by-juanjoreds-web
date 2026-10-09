"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

// Cursor personalizado: crece y muestra una etiqueta sobre elementos con data-cursor="Texto"
export default function Cursor() {
  const dot = useRef(null);
  const label = useRef(null);

  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    document.documentElement.classList.add("has-cursor");
    const xTo = gsap.quickTo(dot.current, "x", { duration: 0.35, ease: "power3" });
    const yTo = gsap.quickTo(dot.current, "y", { duration: 0.35, ease: "power3" });

    const move = (e) => {
      dot.current.classList.add("is-moving");
      xTo(e.clientX);
      yTo(e.clientY);
    };
    const over = (e) => {
      const t = e.target.closest("[data-cursor], a, button, input, textarea, select");
      const text = t?.dataset?.cursor || "";
      dot.current.classList.toggle("is-hover", !!t);
      dot.current.classList.toggle("is-label", !!text);
      label.current.textContent = text;
    };
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerover", over);
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerover", over);
      document.documentElement.classList.remove("has-cursor");
    };
  }, []);

  return (
    <div className="cursor" ref={dot} aria-hidden="true">
      <span ref={label} />
    </div>
  );
}
