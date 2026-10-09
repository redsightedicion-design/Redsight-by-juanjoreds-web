"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Media from "./Media";
import { projects } from "../data";

export default function Work() {
  const root = useRef(null);
  const preview = useRef(null);
  const [active, setActive] = useState(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".work-row").forEach((row) => {
        gsap.from(row, {
          y: 60,
          autoAlpha: 0,
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: { trigger: row, start: "top 92%" },
        });
      });
      gsap.from(".work-heading .mask > span", {
        yPercent: 110,
        duration: 1.1,
        ease: "power4.out",
        scrollTrigger: { trigger: ".work-heading", start: "top 85%" },
      });
    }, root);

    // Vista previa flotante que sigue al cursor (solo escritorio)
    const xTo = gsap.quickTo(preview.current, "x", { duration: 0.6, ease: "power3" });
    const yTo = gsap.quickTo(preview.current, "y", { duration: 0.6, ease: "power3" });
    const move = (e) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };
    window.addEventListener("pointermove", move);
    return () => {
      ctx.revert();
      window.removeEventListener("pointermove", move);
    };
  }, []);

  return (
    <section className="work section" id="trabajos" ref={root}>
      <div className="work-head">
        <p className="eyebrow">(02) Trabajos seleccionados</p>
        <h2 className="work-heading">
          <span className="mask">
            <span>Resultados</span>
          </span>{" "}
          <span className="mask">
            <span>
              <em>que se ven.</em>
            </span>
          </span>
        </h2>
      </div>

      <ul className="work-list" onPointerLeave={() => setActive(null)}>
        {projects.map((p, i) => (
          <li
            key={p.slug}
            className={`work-row ${active !== null && active !== i ? "is-dim" : ""}`}
            onPointerEnter={() => setActive(i)}
            data-cursor="Ver"
          >
            <span className="work-index">{String(i + 1).padStart(2, "0")}</span>
            <div className="work-main">
              <h3 className="work-name">{p.name}</h3>
              <p className="work-meta">
                {p.category} · {p.region} · {p.years} de trabajo
              </p>
            </div>
            <div className="work-views">
              <span className="work-views-num">{p.views[0]}</span>
              <span className="work-views-label">vistas en su reel top</span>
            </div>
            {/* En móvil se muestra la imagen dentro de la fila */}
            <Media className="work-thumb" image={p.cover} video={p.preview} tone={p.tone} label={p.name} />
          </li>
        ))}
      </ul>

      <div className={`work-preview ${active !== null ? "is-visible" : ""}`} ref={preview} aria-hidden="true">
        {projects.map((p, i) => (
          <div key={p.slug} className={`work-preview-item ${active === i ? "is-active" : ""}`}>
            <Media image={p.cover} video={p.preview} tone={p.tone} label={p.name} />
          </div>
        ))}
      </div>
    </section>
  );
}
