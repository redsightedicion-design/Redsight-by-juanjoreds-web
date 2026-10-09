// Todo el contenido del sitio vive aquí: cambia textos, proyectos y contacto sin tocar el diseño.

export const site = {
  brand: "Redsight",
  by: "by juanjoreds",
  director: "Juan José Rojas Cano",
  location: "Pereira, Colombia",
  tagline: "Contenido audiovisual para hoteles y marcas de turismo que quieren contar mejor su historia.",
  // Reel principal: pon el archivo en /public/media/reel.mp4 (recomendado: 1080p, 20–40 s, sin audio, < 15 MB)
  reel: "/media/reel.mp4",
  reelPoster: "/media/reel-poster.jpg",
};

export const about =
  "Nacimos en Pereira, Colombia, con una visión clara: crear contenido audiovisual de alto nivel para marcas que quieren contar mejor su historia. Con más de 10 años de experiencia en storytelling, turismo y hospitalidad, hemos desarrollado proyectos para marcas de Alemania, Italia, República Dominicana y Colombia, y participado en producciones documentales para canales regionales del país.";

export const stats = [
  { value: 10, suffix: "+", label: "años contando historias" },
  { value: 6, suffix: "M+", label: "visualizaciones en proyectos de hotel" },
  { value: 4, suffix: "", label: "países con clientes" },
  { value: 5, suffix: "", label: "marcas de hospitalidad aliadas" },
];

// cover / preview: rutas en /public/media (imagen y clip corto en bucle). Mientras no existan se muestra un fondo de color.
export const projects = [
  {
    slug: "casa-tuirak",
    name: "Casa Tuirák",
    category: "Hotel boutique",
    region: "Eje Cafetero",
    years: "3 años",
    views: ["1.8 M", "708 mil", "248 mil"],
    tone: ["#2b3a1f", "#0c120a"],
    cover: "/media/casa-tuirak.jpg",
    preview: "/media/casa-tuirak.mp4",
  },
  {
    slug: "la-colina-spa",
    name: "La Colina Spa",
    category: "Spa & bienestar",
    region: "Eje Cafetero",
    years: "4 años",
    views: ["950 mil", "368 mil", "66 mil"],
    tone: ["#3a2f1d", "#120e08"],
    cover: "/media/la-colina-spa.jpg",
    preview: "/media/la-colina-spa.mp4",
  },
  {
    slug: "balcon-del-cielo",
    name: "Balcón del Cielo",
    category: "Glamping",
    region: "Eje Cafetero",
    years: "1 año",
    views: ["901 mil", "139 mil", "35 mil"],
    tone: ["#1d2a3a", "#080c12"],
    cover: "/media/balcon-del-cielo.jpg",
    preview: "/media/balcon-del-cielo.mp4",
  },
  {
    slug: "attraversiamo",
    name: "Attraversiamo",
    category: "Hotel & experiencias",
    region: "Eje Cafetero",
    years: "5 años",
    views: ["627 mil", "336 mil", "196 mil"],
    tone: ["#3a1d1d", "#120808"],
    cover: "/media/attraversiamo.jpg",
    preview: "/media/attraversiamo.mp4",
  },
  {
    slug: "termales-santa-rosa",
    name: "Termales Santa Rosa de Cabal",
    category: "Termales",
    region: "Santa Rosa de Cabal",
    years: "4 años",
    views: ["98.5 k"],
    tone: ["#1d3a36", "#08120f"],
    cover: "/media/termales-santa-rosa.jpg",
    preview: "/media/termales-santa-rosa.mp4",
  },
];

export const services = [
  { title: "Reels para hoteles", text: "Contenido vertical pensado para redes que llena habitaciones: recorridos, experiencias y gastronomía." },
  { title: "Films de marca", text: "Piezas cinematográficas para web, campañas y ferias que cuentan la esencia de tu lugar." },
  { title: "Fotografía", text: "Habitaciones, espacios y momentos con la misma mirada que el video, listos para OTAs y web." },
  { title: "Documental", text: "Historias reales con ritmo de cine, como las producidas para canales regionales del país." },
];

export const contact = {
  // Crea un formulario gratis en https://formspree.io y pega aquí su endpoint (ej. "https://formspree.io/f/abcdwxyz")
  formEndpoint: "",
  // Correo de respaldo: si no hay endpoint, el formulario abre el correo con el mensaje ya escrito
  email: "",
  // Número en formato internacional sin "+" ni espacios (ej. "573001234567")
  whatsapp: "",
  instagram: "",
  projectTypes: ["Reels para redes", "Film de marca", "Fotografía", "Documental", "Otro"],
};
