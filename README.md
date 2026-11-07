# Identidad · Prepa 9 UdeG (Python / Flask)

Sitio web hecho en Python con Flask. Los filtros de propuestas, las tarjetas y los candidatos los arma Python en el servidor. El único JavaScript es el del menú del celular y las pestañas de "Quiénes somos".

## Probarlo en tu computadora
```bash
pip install -r requirements.txt
python app.py
```
Abre http://localhost:5000

## Subirlo
### 1) GitHub
Crea un repositorio y sube **todo el contenido de esta carpeta**, con sus carpetas (`static/`, `templates/`).

### 2) Render
1. render.com → **New → Web Service** → conecta el repositorio.
2. **Runtime**: Python 3
3. **Build Command**: `pip install -r requirements.txt`
4. **Start Command**: `gunicorn app:app --workers 2 --bind 0.0.0.0:$PORT`
5. **Create Web Service**. Tendrás un enlace `https://....onrender.com` con HTTPS.

(O usa **New → Blueprint** y Render lee `render.yaml` solo.)

> En el plan gratis de Render el sitio "se duerme" tras unos minutos sin visitas y la primera carga puede tardar ~30 segundos.

## Cómo editar el contenido
- **`datos.py`**: propuestas, las 3 destacadas y candidatos (nombre, cargo, foto, biografía).
- **`templates/index.html`**: textos de Quiénes somos (historia, principios, programa, estatutos).
- **`static/css/styles.css`**: diseño y colores (`--red`, `--red-dark`, `--red-bright` al inicio).
- **`static/img/`**: logo, fondo y fotos.

## Estructura
```
app.py              servidor Flask (rutas, filtros, seguridad)
datos.py            contenido editable
requirements.txt    Flask y gunicorn
render.yaml         configuración de Render
templates/index.html  página
static/             css, js, img, fonts
```
