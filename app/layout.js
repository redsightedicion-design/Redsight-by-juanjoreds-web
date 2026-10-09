import "./globals.css";

export const metadata = {
  title: "Redsight by juanjoreds — Contenido audiovisual para hoteles",
  description:
    "Productora audiovisual de Pereira, Colombia. Reels, films de marca, fotografía y documental para hoteles, spas y marcas de turismo.",
};

export const viewport = { themeColor: "#0a0a0a" };

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
