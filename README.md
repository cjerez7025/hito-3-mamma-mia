# Pizzería Mamma Mía

Proyecto **incremental** desarrollado con **React + Vite.js** como parte del curso Full Stack JavaScript en Desafío Latam (G108).

Cada hito agrega funcionalidad sobre el anterior. El código en `main` corresponde al **Hito 4** (última entrega).

---

## Hito 4 — Consumo de APIs con React (entrega actual)

### Objetivo

Reemplazar los datos locales (`pizzas.js`) por el consumo de una **API REST** usando `useEffect` + `fetch`. Se incorpora un backend Node.js/Express que expone los endpoints de pizzas.

### Componentes nuevos / modificados

| Archivo | Cambio |
|---|---|
| `src/components/Home.jsx` | Consume `GET /api/pizzas` con `useEffect` + `fetch`, reemplaza datos locales |
| `src/components/Pizza.jsx` | Componente nuevo — consume `GET /api/pizzas/p001`, muestra detalle de una pizza |
| `src/App.jsx` | Activa `<Pizza />`, comenta `<Home />` y demás vistas |
| `backend/` | Servidor Express en puerto 5000 con endpoints de pizzas, auth y checkout |

### Criterios de evaluación

| Criterio | Pts | Estado |
|---|---|---|
| Home.jsx consume la API y renderiza tarjetas de pizza | 2 | ✅ |
| Home.jsx utiliza `useEffect` para consumir la API | 2 | ✅ |
| Pizza.jsx consume la API y renderiza la información de la pizza | 2 | ✅ |
| Pizza.jsx utiliza `useEffect` para consumir la API | 2 | ✅ |
| Pizza.jsx muestra nombre, precio, ingredientes, imagen y descripción | 2 | ✅ |

### Cómo ejecutar (requiere dos terminales)

```bash
# Terminal 1 — backend
cd backend/simple-api-backend-nodejs-express-fs-json-jwt-main
npm install
npm run dev        # http://localhost:5000

# Terminal 2 — frontend
npm install
npm run dev        # http://localhost:5173/hito-3-mamma-mia/
```

> **Nota sobre GitHub Pages:** El backend es un servidor Node.js que no puede desplegarse en GitHub Pages (solo soporta archivos estáticos). El sitio publicado mostrará la interfaz pero sin datos de pizzas. Para evaluar el funcionamiento completo es necesario ejecutar ambos servidores localmente.

---

## Estructura del proyecto (Hito 4)

```
mamma-mia/
├── backend/
│   └── simple-api-backend-nodejs-express-fs-json-jwt-main/
│       ├── index.js                    # Servidor Express (puerto 5000)
│       ├── routes/
│       │   ├── pizza.route.js          # GET /api/pizzas, GET /api/pizzas/:id
│       │   ├── auth.route.js           # POST /api/auth/login, /register, /me
│       │   └── checkout.route.js       # POST /api/checkouts (JWT requerido)
│       ├── controllers/
│       ├── models/
│       ├── middlewares/
│       └── db/
│           ├── pizzas.json             # Datos de 6 pizzas
│           └── users.json
├── src/
│   ├── assets/
│   │   └── Header.jpg
│   ├── components/
│   │   ├── Navbar.jsx                  # Barra de navegación
│   │   ├── Header.jsx                  # Hero con imagen de fondo
│   │   ├── Home.jsx                    # (Hito 4) Consume API — lista de pizzas
│   │   ├── Pizza.jsx                   # (Hito 4) Consume API — detalle de una pizza
│   │   ├── CardPizza.jsx               # Tarjeta de pizza con props
│   │   ├── Cart.jsx                    # (Hito 3) Carrito con +/-, total
│   │   ├── Footer.jsx                  # Pie de página
│   │   ├── LoginPage.jsx               # (Hito 2) Formulario de login
│   │   └── RegisterPage.jsx            # (Hito 2) Formulario de registro
│   ├── utils/
│   │   └── formatPrice.js
│   ├── pizzas.js                       # Datos locales (referencia, reemplazado por API en H4)
│   ├── App.jsx
│   └── main.jsx
├── vite.config.js                      # Proxy /api → http://localhost:5000
└── package.json
```

---

## Hitos anteriores

### Hito 3 — Renderización dinámica (10 pts)
Demo: https://cjerez7025.github.io/hito-3-mamma-mia/

| Criterio | Pts | Estado |
|---|---|---|
| Home recorre array de pizzas y renderiza un CardPizza por cada una | 3 | ✅ |
| CardPizza muestra información de cada pizza usando props | 2 | ✅ |
| CardPizza itera ingredientes y renderiza un `<li>` por cada uno | 2 | ✅ |
| Cart recorre pizzaCart y muestra información de cada pizza | 1 | ✅ |
| Cart tiene botones para aumentar y disminuir cantidad | 1 | ✅ |
| Cart calcula y muestra el total de la compra | 1 | ✅ |

### Hito 2 — Estado de componentes y eventos (10 pts)

| Criterio | Pts | Estado |
|---|---|---|
| RegisterPage con email, password, confirmPassword + validaciones + mensaje éxito | 5 | ✅ |
| LoginPage con email, password + validaciones + mensaje éxito | 5 | ✅ |

### Hito 1 — Introducción a React (10 pts)

| Criterio | Pts | Estado |
|---|---|---|
| App.jsx muestra Navbar, Home y Footer | 2 | ✅ |
| Header.jsx con título y descripción llamado desde Home.jsx | 1 | ✅ |
| Navbar.jsx con 6 opciones de navegación | 2 | ✅ |
| Home y Total siempre visibles (independiente del token) | 2 | ✅ |
| CardPizza.jsx con props: name, price, ingredients, img | 2 | ✅ |
| Footer.jsx con derechos reservados | 1 | ✅ |

---

## Tecnologías utilizadas

| Tecnología | Uso |
|---|---|
| React 19 | Librería principal de UI |
| Vite.js | Bundler y servidor de desarrollo |
| Bootstrap 5 | Estilos base |
| react-bootstrap | Componentes UI |
| Express + CORS + JWT | Backend API REST (Hito 4) |
| gh-pages | Despliegue en GitHub Pages |

---

*Desafío Latam — Full Stack JS G108*
