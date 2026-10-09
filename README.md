# Redsight by juanjoreds — sitio web

Portafolio web de Redsight: contenido audiovisual para hoteles y marcas de turismo.
Hecho con Next.js, GSAP (animaciones) y Lenis (scroll suave). Se exporta como sitio estático.

## Ver el sitio en tu computador

```bash
npm install
npm run dev      # abre http://localhost:3000
npm run build    # genera el sitio final en /out
```

## Cambiar contenido

Todos los textos, proyectos, servicios y datos de contacto están en `app/data.js`.

## Agregar videos e imágenes

Copia los archivos en `public/media/` con estos nombres:

| Archivo | Uso |
| --- | --- |
| `reel.mp4` | Reel principal en la portada (1080p, 20–40 s, menos de 15 MB) |
| `reel-poster.jpg` | Imagen mientras carga el reel |
| `<proyecto>.jpg` | Portada de cada proyecto (formato vertical 4:5) |
| `<proyecto>.mp4` | Clip corto en bucle que aparece al pasar el mouse (5–8 s, sin audio, menos de 4 MB) |

Los nombres de cada proyecto están en `app/data.js` (`casa-tuirak`, `la-colina-spa`, `balcon-del-cielo`, `attraversiamo`, `termales-santa-rosa`).
Mientras un archivo no exista se muestra un fondo de color.

## Formulario de contacto

1. Crea una cuenta gratis en [Formspree](https://formspree.io) y un formulario nuevo.
2. Pega su endpoint en `contact.formEndpoint` dentro de `app/data.js`.
3. Completa también `email`, `whatsapp` e `instagram`.
