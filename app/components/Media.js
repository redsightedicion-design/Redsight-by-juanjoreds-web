"use client";

import { useEffect, useRef, useState } from "react";

// Muestra video (o imagen) solo cuando el archivo carga; mientras tanto (o si no existe) un fondo degradado.
export default function Media({ video, image, tone = ["#1a1a1a", "#0a0a0a"], label, className = "" }) {
  const img = useRef(null);
  const [imageOk, setImageOk] = useState(false);
  const [videoOk, setVideoOk] = useState(false);

  // La imagen puede terminar de cargar antes de que React se hidrate
  useEffect(() => {
    if (img.current?.complete && img.current.naturalWidth > 0) setImageOk(true);
  }, []);

  return (
    <div className={`media ${className}`} style={{ "--tone-a": tone[0], "--tone-b": tone[1] }}>
      <div className="media-fallback">{label && <span>{label}</span>}</div>
      {image && (
        <img
          ref={img}
          src={image}
          alt=""
          loading="lazy"
          className={imageOk ? "is-ready" : ""}
          onLoad={() => setImageOk(true)}
        />
      )}
      {video && (
        <video
          src={video}
          className={videoOk ? "is-ready" : ""}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          onLoadedData={() => setVideoOk(true)}
        />
      )}
    </div>
  );
}
