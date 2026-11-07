# Identidad · Prepa 9 UdeG

Sitio web estático (HTML + CSS + JS, sin instalar nada). Carga ligero y funciona en celular primero.

## Cómo subirlo (3 pasos)

### 1) GitHub
1. Crea un repositorio nuevo en github.com (por ejemplo `identidad-prepa9`).
2. Sube **todo el contenido de esta carpeta** (botón *Add file → Upload files*, arrastra todo).

### 2) Render
1. Entra a render.com → **New → Static Site** y conecta tu repositorio.
2. *Build Command*: déjalo vacío (o `echo sin build`). *Publish Directory*: `.`
   (Si prefieres, usa **New → Blueprint** y Render lee `render.yaml` solo.)
3. Pulsa **Create**. En un minuto tendrás tu enlace `https://....onrender.com` con **HTTPS** automático.

### 3) (Opcional) GitHub Pages
Settings → Pages → Branch `main` / carpeta `/ (root)`.

## Cómo editar el contenido
Casi todo se cambia en **`js/data.js`**:
- `PROPUESTAS`: agrega, quita o edita propuestas.
- `DESTACADAS`: las 3 propuestas del inicio.
- `CANDIDATOS`: nombre, cargo, foto y biografía (`bio`).

Los textos de *Quiénes somos* (historia, principios, programa, estatutos) están en `index.html`.
Los colores están al inicio de `css/styles.css` (`--red`, `--red-dark`, `--red-bright`).

## Estructura
```
index.html      página única
css/styles.css  diseño
js/data.js      contenido editable
js/main.js      comportamiento (menú, filtros)
img/            logo, fondo y fotos de candidatos (.webp, ligeras)
fonts/          Poppins y Roboto alojadas aquí (sin terceros)
render.yaml     configuración de Render
```
