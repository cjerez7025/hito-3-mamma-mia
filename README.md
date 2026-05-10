# 🍕 Pizzería Mamma Mía

Proyecto incremental desarrollado con **React + Vite.js** como parte del curso Full Stack JavaScript en Desafío Latam (G108).

🌐 **Demo en vivo:** [https://cjerez7025.github.io/mamma-mia/](https://cjerez7025.github.io/mamma-mia/) — desplegado en GitHub Pages.

---

## 🚀 Tecnologías utilizadas

| Tecnología | Uso |
|---|---|
| React 19.2.5 | Librería principal de UI |
| Vite.js | Bundler y servidor de desarrollo |
| Bootstrap 5 | Estilos base |
| react-bootstrap | Componentes UI (Navbar, Form, Alert, Button, Table) |
| gh-pages | Despliegue en GitHub Pages |

---

## 📁 Estructura del proyecto

```
mamma-mia/
├── src/
│   ├── assets/
│   │   └── Header.jpg              # Imagen de fondo del hero
│   ├── components/
│   │   ├── Navbar.jsx              # Barra de navegación (token, total)
│   │   ├── Header.jsx              # Hero con imagen de fondo, título y descripción
│   │   ├── Home.jsx                # Página principal — renderiza 6 pizzas dinámicamente
│   │   ├── CardPizza.jsx           # Tarjeta de pizza (props + ingredientes como <li>)
│   │   ├── Cart.jsx                # Carrito de compras con +/-, total y botón Pagar
│   │   ├── Footer.jsx              # Pie de página
│   │   ├── LoginPage.jsx           # Formulario de login con validaciones (Hito 2)
│   │   └── RegisterPage.jsx        # Formulario de registro con validaciones (Hito 2)
│   ├── utils/
│   │   └── formatPrice.js          # Helper formato de precios CLP
│   ├── pizzas.js                   # Datos: array pizzas (6) y pizzaCart (3)
│   ├── App.jsx                     # Raíz: controla qué componente se muestra
│   └── main.jsx
├── vite.config.js
└── package.json
```

---

## 🔄 Flujo de componentes

### Hito 3 — App.jsx activo
```
App.jsx
├── <NavBar />    → estático (token y total fijos por ahora)
├── <Cart />      → carrito activo
│     {/* <Home /> */}
│     {/* <RegisterPage /> */}
│     {/* <LoginPage /> */}
└── <Footer />
```

### Hito 2 — flujo de navegación con useState
```
Inicio
  └─► LoginPage
        ├─► credenciales válidas  ──► Home (pizzas)
        │                               └─► Logout ──► LoginPage
        └─► "¿No tienes cuenta?" ──► RegisterPage
                                          └─► registro exitoso ──► LoginPage
```

---

## 🛒 Lógica del carrito (Hito 3)

```
Cart.jsx
  ├── Estado inicial: useState(pizzaCart)   ← importado de pizzas.js
  ├── handleIncrease(id) → count + 1
  ├── handleDecrease(id) → count - 1, si count === 0 se elimina del carrito
  └── total = cart.reduce((acc, item) => acc + item.price * item.count, 0)
```

### Renderización dinámica — Home.jsx
```
pizzas.js → array de 6 pizzas
Home.jsx  → pizzas.map(pizza => <CardPizza key={pizza.id} {...pizza} />)
```

### Ingredientes como lista — CardPizza.jsx
```
ingredients.map(ing => <li key={ing}>🍕 {ing}</li>)
```

### Lógica token — Navbar
```
token = false  →  muestra 🔐 Login y 🔐 Register
token = true   →  muestra 🔓 Profile y 🔒 Logout
🍕 Home y 🛒 Total  →  siempre visibles
```

---

## ⚙️ Instalación y uso

### Hito 4 — requiere ejecutar frontend y backend por separado

```bash
# 1. Backend (terminal 1)
cd backend/simple-api-backend-nodejs-express-fs-json-jwt-main
npm install
npm run dev        # http://localhost:5000

# 2. Frontend (terminal 2)
npm install
npm run dev        # http://localhost:5173
```

> **Nota importante — Hito 4:** Esta versión consume una API REST local (`http://localhost:5000`). El backend es un servidor Node.js/Express que **no puede desplegarse en GitHub Pages** (solo soporta archivos estáticos). Por esta razón, el sitio publicado en GitHub Pages no mostrará las pizzas. Para evaluar el funcionamiento completo, es necesario ejecutar ambos servidores localmente siguiendo los pasos anteriores.

```bash
# Build de producción
npm run build

# Publicar en GitHub Pages (solo frontend estático)
npm run deploy
```

---

## 📋 Criterios de evaluación

### Hito 1 — Introducción a React (10 pts)

| Criterio | Pts | Estado |
|---|---|---|
| App.jsx muestra Navbar, Home y Footer | 2 | ✅ |
| Header.jsx con título y descripción llamado desde Home.jsx | 1 | ✅ |
| Navbar.jsx con 6 opciones de navegación | 2 | ✅ |
| Home y Total siempre visibles (independiente del token) | 2 | ✅ |
| CardPizza.jsx con props: name, price, ingredients, img | 2 | ✅ |
| Footer.jsx con derechos reservados | 1 | ✅ |

### Hito 2 — Estado de componentes y eventos (10 pts)

| Criterio | Pts | Estado |
|---|---|---|
| RegisterPage con email, password, confirmPassword + validaciones + mensaje éxito | 5 | ✅ |
| LoginPage con email, password + validaciones + mensaje éxito | 5 | ✅ |

### Hito 3 — Renderización dinámica de componentes (10 pts)
https://cjerez7025.github.io/hito-3-mamma-mia/
| Criterio | Pts | Estado |
|---|---|---|
| Home recorre array de pizzas y renderiza un CardPizza por cada una | 3 | ✅ |
| CardPizza muestra información de cada pizza usando props | 2 | ✅ |
| CardPizza itera ingredientes y renderiza un `<li>` por cada uno | 2 | ✅ |
| Cart recorre pizzaCart y muestra información de cada pizza | 1 | ✅ |
| Cart tiene botones para aumentar y disminuir cantidad | 1 | ✅ |
| Cart calcula y muestra el total de la compra | 1 | ✅ |

---

### Hito 4 — Consumo de APIs con React (10 pts)

| Criterio | Pts | Estado |
|---|---|---|
| Home.jsx consume la API y renderiza tarjetas de pizza | 2 | ✅ |
| Home.jsx utiliza `useEffect` para consumir la API | 2 | ✅ |
| Pizza.jsx consume la API y renderiza la información de la pizza | 2 | ✅ |
| Pizza.jsx utiliza `useEffect` para consumir la API | 2 | ✅ |
| Pizza.jsx muestra nombre, precio, ingredientes, imagen y descripción | 2 | ✅ |

---

*Desafío Latam — Full Stack JS G108*