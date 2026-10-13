import "./globals.css";
import { site } from "./data";

const title = "Redsight by juanjoreds — Contenido audiovisual para hoteles";
const description =
  "Producción audiovisual para hoteles, spas y marcas de turismo: reels, films de marca y estrategia de contenido para atraer más miradas.";

export const metadata = {
  ...(site.url ? { metadataBase: new URL(site.url) } : {}),
  title,
  description,
  // Vista previa al compartir el enlace (WhatsApp, Facebook, Instagram, LinkedIn, X)
  openGraph: {
    type: "website",
    locale: "es_CO",
    siteName: "Redsight by juanjoreds",
    title,
    description,
    url: "/",
    images: [{ url: site.ogImage, width: 1200, height: 630, alt: "Redsight by juanjoreds — portada" }],
  },
  twitter: { card: "summary_large_image", title, description, images: [site.ogImage] },
};

export const viewport = { themeColor: "#120c08" };

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@300;400;500&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
