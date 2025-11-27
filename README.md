# 🏨 Hostal Franchesca - Página Web Oficial

Landing page moderna y profesional para el Hostal Franchesca, construida con React, Vite y Tailwind CSS.

## ✨ Características

- 🎨 Diseño moderno y responsive (mobile-first)
- ⚡ Desarrollado con Vite para máximo rendimiento
- 🎯 Componentes React modulares y reutilizables
- 💅 Estilizado con Tailwind CSS
- 🖼️ Galería de fotos interactiva con lightbox
- 💬 Carrusel de testimonios automático
- 📱 Botón flotante de WhatsApp
- 📍 Integración con Google Maps
- 📧 Formulario de contacto funcional
- 🔄 Navegación suave entre secciones
- 🎭 Animaciones y transiciones elegantes

## 🚀 Inicio Rápido

### Prerequisitos

- Node.js (versión 16 o superior)
- npm o yarn

### Instalación

1. Clona el repositorio:
```bash
git clone <url-del-repositorio>
cd hostal-franchesca-web
```

2. Instala las dependencias:
```bash
npm install
```

3. Inicia el servidor de desarrollo:
```bash
npm run dev
```

4. Abre tu navegador en `http://localhost:3000`

## 📦 Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Preview de la build de producción

## 🏗️ Estructura del Proyecto

```
hostal-franchesca-web/
├── public/              # Archivos estáticos
├── src/
│   ├── components/      # Componentes React
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Rooms.jsx
│   │   ├── Gallery.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Location.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   └── WhatsAppButton.jsx
│   ├── assets/          # Imágenes y recursos
│   ├── App.jsx          # Componente principal
│   ├── main.jsx         # Punto de entrada
│   └── index.css        # Estilos globales
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## 🎨 Componentes

### Navbar
Barra de navegación fija con menú responsive y efecto de scroll.

### Hero
Banner principal con información destacada y llamadas a la acción.

### About
Sección sobre el hostal con características y servicios.

### Rooms
Galería de habitaciones con precios y características.

### Gallery
Galería de fotos interactiva con efecto lightbox.

### Testimonials
Carrusel automático de reseñas de huéspedes.

### Location
Mapa interactivo e información de contacto.

### Contact
Formulario de reservas con validación.

### Footer
Pie de página con enlaces y redes sociales.

### WhatsAppButton
Botón flotante para contacto directo por WhatsApp.

## 🎨 Personalización

### Colores

Los colores principales se pueden modificar en `tailwind.config.js`:

```js
colors: {
  primary: {
    50: '#fdf8f3',
    // ... más tonos
  },
}
```

### Contenido

Para personalizar el contenido:

1. **Textos**: Edita directamente los componentes en `src/components/`
2. **Imágenes**: Reemplaza las URLs de Unsplash con tus propias imágenes
3. **Contacto**: Actualiza teléfono, email y dirección en componentes relevantes
4. **WhatsApp**: Cambia el número en `src/components/WhatsAppButton.jsx`
5. **Google Maps**: Actualiza el embed en `src/components/Location.jsx`

### Tipografía

El proyecto usa Google Fonts (Inter y Poppins). Puedes cambiarlas en:
- `index.html` - Enlaces de Google Fonts
- `tailwind.config.js` - Configuración de fuentes

## 📱 Responsive Design

La página está optimizada para todos los dispositivos:
- 📱 Mobile (< 768px)
- 💻 Tablet (768px - 1024px)
- 🖥️ Desktop (> 1024px)

## 🌐 Deployment

### Vercel (Recomendado)

1. Instala Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

### Netlify

1. Construye el proyecto:
```bash
npm run build
```

2. Arrastra la carpeta `dist` a Netlify

### GitHub Pages

1. Instala gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Agrega scripts en `package.json`:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

3. Deploy:
```bash
npm run deploy
```

## 🛠️ Tecnologías Utilizadas

- [React](https://reactjs.org/) - Librería de UI
- [Vite](https://vitejs.dev/) - Build tool
- [Tailwind CSS](https://tailwindcss.com/) - Framework de CSS
- [Lucide React](https://lucide.dev/) - Iconos
- [Google Fonts](https://fonts.google.com/) - Tipografía

## 📝 Tareas Pendientes

- [ ] Reemplazar imágenes placeholder con fotos reales del hostal
- [ ] Actualizar datos de contacto (teléfono, email, dirección)
- [ ] Configurar Google Maps con ubicación real
- [ ] Agregar más habitaciones según disponibilidad
- [ ] Implementar sistema de reservas backend
- [ ] Conectar formulario con servicio de email
- [ ] Optimizar imágenes para producción
- [ ] Agregar más idiomas (i18n)
- [ ] Implementar SEO avanzado
- [ ] Agregar Google Analytics

## 📄 Licencia

Este proyecto es privado y pertenece a Hostal Franchesca.

## 👥 Contacto

Para consultas sobre el proyecto:
- Email: info@hostalfranchesca.com
- Teléfono: +1 (234) 567-890

---

Hecho con ❤️ para Hostal Franchesca
