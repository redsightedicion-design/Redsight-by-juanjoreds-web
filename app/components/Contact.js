"use client";

import { useState } from "react";
import { contact } from "../data";

export default function Contact() {
  const [type, setType] = useState(contact.projectTypes[0]);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  async function onSubmit(e) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    data.tipo = type;

    if (contact.formEndpoint) {
      setStatus("sending");
      try {
        const res = await fetch(contact.formEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(data),
        });
        if (!res.ok) throw new Error();
        setStatus("sent");
        e.target.reset();
      } catch {
        setStatus("error");
      }
      return;
    }

    // Sin endpoint configurado: abre el correo con el mensaje ya armado
    const body = `Nombre: ${data.nombre}\nEmail: ${data.email}\nHotel / marca: ${data.marca}\nTipo de proyecto: ${data.tipo}\n\n${data.mensaje}`;
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(
      `Nuevo proyecto — ${data.marca || data.nombre}`
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <section className="contact section" id="contacto">
      <p className="eyebrow">(04) Contacto</p>
      <h2 className="contact-title">
        Hablemos de tu <em>próxima historia.</em>
      </h2>

      <div className="contact-grid">
        <form className="contact-form" onSubmit={onSubmit}>
          <div className="field-row">
            <label className="field">
              <span>Nombre</span>
              <input name="nombre" required autoComplete="name" />
            </label>
            <label className="field">
              <span>Email</span>
              <input name="email" type="email" required autoComplete="email" />
            </label>
          </div>
          <label className="field">
            <span>Hotel / marca</span>
            <input name="marca" />
          </label>

          <fieldset className="chips">
            <legend>¿Qué necesitas?</legend>
            {contact.projectTypes.map((t) => (
              <button
                type="button"
                key={t}
                className={`chip ${type === t ? "is-on" : ""}`}
                onClick={() => setType(t)}
              >
                {t}
              </button>
            ))}
          </fieldset>

          <label className="field">
            <span>Cuéntanos del proyecto</span>
            <textarea name="mensaje" rows={4} required />
          </label>

          <button className="btn-send" type="submit" disabled={status === "sending"}>
            {status === "sending" ? "Enviando…" : status === "sent" ? "¡Mensaje enviado!" : "Enviar mensaje"}
            <span aria-hidden="true">→</span>
          </button>
          {status === "error" && <p className="form-error">No se pudo enviar. Escríbenos por WhatsApp.</p>}
        </form>

        <aside className="contact-side">
          {contact.whatsapp && (
            <a className="contact-link" href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noreferrer">
              <span>WhatsApp</span>
              <em>Escríbenos ahora ↗</em>
            </a>
          )}
          {contact.email && (
            <a className="contact-link" href={`mailto:${contact.email}`}>
              <span>Email</span>
              <em>{contact.email}</em>
            </a>
          )}
          {contact.instagram && (
            <a className="contact-link" href={`https://instagram.com/${contact.instagram}`} target="_blank" rel="noreferrer">
              <span>Instagram</span>
              <em>@{contact.instagram} ↗</em>
            </a>
          )}
          <p className="contact-note">Desde el Eje Cafetero para hoteles y marcas de Colombia y el mundo.</p>
        </aside>
      </div>
    </section>
  );
}
