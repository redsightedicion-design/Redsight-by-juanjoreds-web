// Todo el contenido del sitio vive aquí: cambia textos, proyectos y contacto sin tocar el diseño.

export const site = {
  // Dirección pública de la web (con https://). Necesaria para que WhatsApp y redes muestren la imagen de vista previa.
  url: process.env.NEXT_PUBLIC_SITE_URL || "",
  // Imagen de vista previa al compartir el enlace (1200×630): /public/og.jpg
  ogImage: "/og.jpg",
  brand: "Redsight",
  by: "by juanjoreds",
  director: "Juan José Rojas Cano",
  location: "Pereira, Colombia",
  tagline: "Contenido audiovisual para hoteles y marcas de turismo que quieren contar mejor su historia.",
  // Reel principal (horizontal): archivo en /public/media (recomendado: 1080p, < 15 MB)
  reel: "/media/showreel-tuirak.mp4",
  reelPoster: "/media/showreel-tuirak.jpg",
  // Portada: mosaico de reels verticales (clips de 6 s sin texto). solo: el que se ve en celular.
  heroVideos: [
    { src: "/media/hero-1.mp4", poster: "/media/hero-1.jpg", offset: 0, solo: true },
    { src: "/media/hero-2.mp4", poster: "/media/hero-2.jpg", offset: 2 },
    { src: "/media/hero-3.mp4", poster: "/media/hero-3.jpg", offset: 4 },
    { src: "/media/hero-4.mp4", poster: "/media/hero-4.jpg", offset: 1 },
  ],
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
// reels: nombres de los videos en /public/media (nombre.mp4 + nombre.jpg de portada) para el muro de reels. wide: video horizontal.
export const projects = [
  {
    slug: "casa-tuirak",
    name: "Casa Tuirák",
    category: "Hotel boutique",
    region: "Eje Cafetero",
    years: "3 años",
    views: ["1.8 M", "708 mil", "248 mil"],
    tone: ["#2b3a1f", "#0c120a"],
    cover: "/media/tuirak-1.jpg",
    preview: "/media/tuirak-1.mp4",
    reels: ["tuirak-1", "tuirak-2", "tuirak-3"],
  },
  {
    slug: "la-colina-spa",
    name: "La Colina Spa",
    category: "Spa & bienestar",
    region: "Eje Cafetero",
    years: "4 años",
    views: ["950 mil", "368 mil", "66 mil"],
    tone: ["#3a2f1d", "#120e08"],
    cover: "/media/colina-1.jpg",
    preview: "/media/colina-1.mp4",
    reels: ["colina-1", "colina-2", "colina-3"],
  },
  {
    slug: "balcon-del-cielo",
    name: "Balcón del Cielo",
    category: "Glamping",
    region: "Eje Cafetero",
    years: "1 año",
    views: ["901 mil", "139 mil", "35 mil"],
    tone: ["#1d2a3a", "#080c12"],
    cover: "/media/balcon-1.jpg",
    preview: "/media/balcon-1.mp4",
    reels: ["balcon-1", "balcon-2"],
  },
  {
    slug: "attraversiamo",
    name: "Attraversiamo",
    category: "Hotel & experiencias",
    region: "Eje Cafetero",
    years: "5 años",
    views: ["627 mil", "336 mil", "196 mil"],
    tone: ["#3a1d1d", "#120808"],
    cover: "/media/attraversiamo-1.jpg",
    preview: "/media/attraversiamo-1.mp4",
    reels: ["attraversiamo-1", "attraversiamo-2"],
  },
  {
    slug: "termales-santa-rosa",
    name: "Termales Santa Rosa de Cabal",
    category: "Termales",
    region: "Santa Rosa de Cabal",
    years: "4 años",
    views: ["98.5 k"],
    tone: ["#1d3a36", "#08120f"],
    wide: true,
    cover: "/media/termales-1.jpg",
    preview: "/media/termales-1.mp4",
    reels: ["termales-1"],
  },
  {
    slug: "bosko-guatape",
    name: "Bosko",
    category: "Hotel",
    region: "Guatapé",
    years: "",
    views: [],
    tone: ["#1d2f3a", "#08100f"],
    cover: "/media/bosko-1.jpg",
    preview: "/media/bosko-1.mp4",
    reels: ["bosko-1"],
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
  whatsapp: "573122853795",
  instagram: "",
  projectTypes: ["Reels para redes", "Film de marca", "Fotografía", "Documental", "Otro"],
};
