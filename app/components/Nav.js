"use client";

import { scrollToId } from "./SmoothScroll";
import { site } from "../data";

const links = [
  ["trabajos", "Trabajos"],
  ["nosotros", "Nosotros"],
  ["servicios", "Servicios"],
  ["contacto", "Contacto"],
];

export default function Nav() {
  return (
    <header className="nav">
      <button className="nav-logo" onClick={() => scrollToId("inicio")}>
        <em>{site.brand}</em>
      </button>
      <nav>
        {links.map(([id, text]) => (
          <button key={id} className="nav-link" onClick={() => scrollToId(id)}>
            {text}
          </button>
        ))}
      </nav>
    </header>
  );
}
