const words = ["Hoteles", "Spas", "Glamping", "Termales", "Turismo", "Documental"];

export default function Marquee() {
  const row = words.flatMap((w) => [w, "✦"]);
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {[...row, ...row].map((w, i) => (
          <span key={i} className={w === "✦" ? "marquee-star" : ""}>
            {w}
          </span>
        ))}
      </div>
    </div>
  );
}
