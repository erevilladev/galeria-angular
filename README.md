# Galería Fotográfica Interactiva (Angular SPA)

**Asignatura:** Desarrollo de Aplicaciones en Red II  
**Actividad:** Actividad 2 Individual - Creación de una galería  
**Estudiante:** Brayian Ramirez Revilla  
**Fecha de entrega:** 12/10/26  

---

## 📌 Descripción del Proyecto

Esta aplicación es una Single Page Application (SPA) desarrollada con el framework **Angular** y **TypeScript**. Implementa una galería de imágenes interactiva, moderna y totalmente adaptativa (*responsive*), diseñada bajo una arquitectura modular basada en componentes independientes.

### 🚀 Características y Funcionalidades
1. **Estructura en Componentes:**
   - `GalleryComponent`: Componente contenedor principal que gestiona el estado, filtros, ordenación y ciclo de vida de la galería.
   - `ImageCardComponent`: Componente individual para representar cada tarjeta de imagen con efectos visuales, metadatos y botones de interacción.
   - `ImageModalComponent`: Lightbox/Modal de alta definición para visualización ampliada con controles de navegación (anterior/siguiente), soporte para teclado (`ArrowLeft`, `ArrowRight`, `Escape`) y cierre al hacer clic fuera.
2. **Carga Dinámica:** Las imágenes y sus metadatos (título, descripción, categoría, autor, fecha, etiquetas, likes) se gestionan desde un array tipado en un servicio Angular (`ImageService`), cumpliendo con la exigencia de no cargarlas directamente en el HTML.
3. **Interacción con el Usuario:**
   - Lightbox modal con navegación secuencial.
   - Sistema de "Me gusta" (Likes) reactivo con animación y contador dinámico.
   - Filtrado en tiempo real por categorías temáticas (Naturaleza, Arquitectura, Tecnología, Viajes, Arte).
   - Buscador por texto predictivo y filtros de ordenación (por likes o alfabético).
4. **Diseño Responsive:** Grid fluido en CSS puro (`CSS Grid` y `Flexbox`) con adaptación automática a pantallas móviles, tablets y monitores de escritorio.

---

## 🛠️ Requisitos Previos e Instalación

Para ejecutar este proyecto en local se requiere:
- **Node.js** (versión 18+ o superior)
- **npm** (versión 9+ o superior)

### Pasos de instalación:
```bash
# Entrar a la carpeta del proyecto
cd galeria-angular

# Instalar dependencias
npm install
```

---

## 💻 Ejecución en Entorno Local

Para iniciar el servidor de desarrollo local:
```bash
npm start
```
Abre tu navegador y accede a `http://localhost:4200/`. La aplicación se recargará automáticamente al modificar los archivos de código fuente.

---

## 🌐 Despliegue en GitHub Pages (Paso a Paso)

Dado que el despliegue a GitHub Pages lo realizarás de forma manual, sigue estos sencillos pasos:

### 1. Inicializar y subir el repositorio a tu cuenta de GitHub
```bash
# Si no has creado el repositorio en GitHub, créalo con el nombre: galeria-angular
git init
git add .
git commit -m "feat: implementacion completa de galeria interactiva Angular"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/galeria-angular.git
git push -u origin main
```

### 2. Compilar con la base-href de tu repositorio
```bash
npm run build:gh
```
*(Nota: Si tu repositorio tiene otro nombre distinto a `galeria-angular`, ejecuta `npx ng build --base-href=/NOMBRE_DE_TU_REPOSITORIO/`)*.

### 3. Publicar automáticamente a la rama `gh-pages`
```bash
npm run deploy
```
Este comando ejecuta `angular-cli-ghpages`, el cual publicará la carpeta `dist/galeria-angular/browser` directamente en la rama `gh-pages` de tu repositorio.

### 4. Activar GitHub Pages en el repositorio
1. Entra a tu repositorio en GitHub: `https://github.com/TU_USUARIO/galeria-angular`.
2. Ve a **Settings** -> **Pages**.
3. En **Build and deployment** > **Branch**, asegúrate de que esté seleccionada la rama `gh-pages` y la carpeta `/ (root)`.
4. En pocos minutos, tu sitio estará accesible en:
   `https://TU_USUARIO.github.io/galeria-angular/`

---

## 📁 Estructura del Código

```text
src/
├── app/
│   ├── components/
│   │   ├── gallery/          # Componente principal de la galería
│   │   ├── image-card/       # Componente individual de imagen
│   │   └── image-modal/      # Lightbox/Modal de vista ampliada
│   ├── models/
│   │   └── image.model.ts    # Interface TypeScript ImageItem
│   ├── services/
│   │   └── image.service.ts  # Servicio de datos con array tipado
│   ├── app.ts                # Componente raíz
│   ├── app.html              # Layout con navbar y footer
│   └── app.css               # Estilos del layout principal
├── styles.css                # Estilos globales y variables
└── index.html                # Plantilla base SPA
```
