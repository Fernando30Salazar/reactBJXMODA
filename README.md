# BJXMODA — Plataforma React

Migración y reestructuración del sitio de BJXMODA (antes 4 páginas HTML
independientes) a una sola aplicación **React + Vite + React Router**,
con backend en **Google Apps Script + Google Sheets** (reemplazando a
Supabase) y un panel administrativo protegido de verdad.

El diseño visual original se conservó intencionalmente: esta migración
es de **arquitectura y código**, no un rediseño.

## Índice

- [Arquitectura](#arquitectura)
- [Instalación](#instalación)
- [Desarrollo](#desarrollo)
- [Build de producción](#build-de-producción)
- [Variables de entorno](#variables-de-entorno)
- [Google Apps Script + Google Sheets](#google-apps-script--google-sheets)
- [Administración](#administración)
- [Despliegue](#despliegue)
- [Estructura del proyecto](#estructura-del-proyecto)

## Arquitectura

```
React (Vite + React Router)
   ↓  fetch()
Google Apps Script (Web App)     ← valida, autoriza, guarda
   ↓
Google Sheets                    ← almacenamiento
```

- **Frontend**: React puro, sin secretos. Solo conoce la URL pública
  del Web App de Apps Script (`VITE_APPS_SCRIPT_URL`).
- **Backend**: Google Apps Script valida cada operación del lado
  servidor (formularios, login de admin, lectura de registros) y es
  el único lugar donde viven las credenciales del administrador
  (guardadas en *Script Properties*, nunca en el código).
- **Datos**: Google Sheets, una hoja por marca.

Rutas:

| Ruta | Página |
|---|---|
| `/` | BJXMODA |
| `/cedice` | CEDICE Guanajuato Moda |
| `/kiu-models` | Kiu Models |
| `/leon-fashion` | León Fashion Film |
| `/admin/login` | Login del panel administrativo |
| `/admin` y `/admin/registros` | Panel administrativo (protegido) |

## Instalación

```bash
npm install
cp .env.example .env
# Edita .env con la URL de tu Apps Script (ver sección más abajo)
```

## Desarrollo

```bash
npm run dev
```

## Build de producción

```bash
npm run build
npm run preview   # sirve el build localmente para probarlo
```

El resultado queda en `dist/`, listo para desplegar en cualquier
hosting estático (Vercel, Netlify, GitHub Pages, etc.).

## Variables de entorno

Solo existe una variable, y **es intencionalmente pública** (por eso
puede vivir en `VITE_*`): la URL del Web App de Apps Script.

```
VITE_APPS_SCRIPT_URL=https://script.google.com/macros/s/TU_ID/exec
```

**Regla de oro:** cualquier variable `VITE_*` queda visible en el
navegador de cualquier visitante. Por eso ningún secreto real
(contraseñas, client secrets, tokens privados) va aquí — esos viven
únicamente en Script Properties dentro de Google Apps Script.

## Google Apps Script + Google Sheets

El código de referencia del backend está en
[`google-apps-script/Code.gs`](./google-apps-script/Code.gs), listo
para copiar y pegar en el editor de Apps Script.

### Pasos de configuración

1. **Crea un Google Sheet** con 4 hojas llamadas exactamente:
   `bjxmoda`, `cedice`, `kiu_models`, `leon_fashion`. En cada una,
   agrega esta fila de encabezados:

   ```
   nombre | apellido_paterno | apellido_materno | extra | telefono | correo | fecha
   ```

   (la columna `extra` guarda el campo variable de cada marca:
   colaborador / área de interés / ciudad de residencia)

2. En ese Sheet: **Extensiones → Apps Script**, borra el contenido
   por defecto y pega el contenido de `Code.gs`.

3. **Configura Script Properties** (⚙️ *Configuración del proyecto* →
   *Propiedades del script* → *Añadir propiedad*):

   | Propiedad | Valor |
   |---|---|
   | `ADMIN_USER` | tu usuario de administrador |
   | `ADMIN_PASSWORD` | una contraseña fuerte y única |
   | `SHEET_ID` | el ID de tu Google Sheet (está en la URL) |

4. **Implementar → Nueva implementación → Aplicación web**:
   - Ejecutar como: **Yo** (tu cuenta de Google)
   - Quién tiene acceso: **Cualquier usuario**

5. Copia la URL que te da Apps Script y colócala como
   `VITE_APPS_SCRIPT_URL` en tu `.env`.

Cada vez que edites `Code.gs`, necesitas volver a
**Implementar → Gestionar implementaciones → editar → Nueva versión**
para que los cambios surtan efecto en la URL pública.

## Administración

El login **ya no depende de credenciales escritas en el código ni de
`localStorage.setItem("auth", "true")`**. El flujo real es:

```
Login (React)
   → Apps Script valida usuario/contraseña contra Script Properties
   → si es correcto, genera un token de sesión de corta duración
   → React guarda solo ese token (nunca la contraseña)
   → cada petición protegida reenvía el token
   → Apps Script lo revalida en cada petición antes de responder
```

`ProtectedRoute` (en `src/components/ProtectedRoute.jsx`) nunca
confía en que el token "exista" en el navegador: siempre lo revalida
contra el backend antes de dejar pasar a `/admin` o
`/admin/registros`.

## Despliegue

1. `npm run build`
2. Sube el contenido de `dist/` a tu hosting estático de preferencia.
3. Asegúrate de configurar `VITE_APPS_SCRIPT_URL` como variable de
   entorno en tu plataforma de hosting (Vercel, Netlify, etc.) antes
   del build, ya que Vite la incrusta en tiempo de compilación.
4. Si tu hosting no maneja rutas de SPA automáticamente, configura un
   fallback a `index.html` para todas las rutas (necesario para que
   `/cedice`, `/admin`, etc. funcionen al recargar la página).

## Estructura del proyecto

```
src/
├── components/          Navbar, Footer, Carousel, AboutSection,
│                         VideoGrid, RegistrationForm, Button, Modal,
│                         Loader, AlertMessage, EmptyState,
│                         ProtectedRoute, admin/ (Sidebar, DataTable, SearchBar)
├── layouts/              SiteLayout (marcas públicas), AdminLayout
├── pages/                Home, Cedice, KiuModels, LeonFashion,
│                         admin/AdminLogin, admin/AdminDashboard, NotFound
├── data/
│   └── sites.js          Configuración central de las 4 marcas:
│                         textos, imágenes, navegación, campos de formulario, SEO
├── services/
│   ├── googleSheets.js   submitForm() y fetchRegistros() vía Apps Script
│   └── auth.js           login(), verifySession(), logout() — sin secretos
├── hooks/
│   ├── useAuth.js
│   ├── useRegistrationForm.js
│   └── useSeo.jsx         <Helmet /> ligero sin dependencias
└── styles/
    ├── variables.css      Tokens de diseño (colores, espaciados, etc.)
    ├── globals.css        Reset + accesibilidad
    ├── components/        CSS de componentes reutilizables
    ├── pages/              CSS específico de cada marca + admin
    └── index.css           Punto de entrada que importa todo
```

### Agregar una nueva marca en el futuro

Gracias a la arquitectura por configuración, agregar una quinta marca
no requiere duplicar páginas: basta con

1. Agregar sus imágenes en `public/images/<nueva-marca>/`.
2. Agregar una entrada en `src/data/sites.js` con sus textos, colores
   e imágenes.
3. Crear una hoja nueva en el Google Sheet y agregar el proyecto a
   `VALID_PROJECTS` en `Code.gs`.
4. Si su layout es igual a alguna de las 4 marcas actuales, reutilizar
   la página existente pasando su config; si su layout es realmente
   distinto, crear una página nueva reutilizando los componentes
   (`Navbar`, `Footer`, `Carousel`, `AboutSection`, `RegistrationForm`, etc.).

## Notas de la migración

- Se eliminó por completo la dependencia de **Supabase**.
- Se eliminó el chatbot flotante (existía comentado y sin usar en el
  sitio original).
- Se corrigieron nombres de archivos/carpetas con espacios y una
  codificación de caracteres rota en una imagen.
- El archivo `JS/prueba.js` (EmailJS, no enlazado en ningún HTML) no
  se migró por ser código muerto.
