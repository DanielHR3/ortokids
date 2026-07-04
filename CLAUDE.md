# CLAUDE.md — Pautas del Agente IA (OrtoKids React)

Este archivo define el contexto, los comandos de compilación y las pautas de estilo que todo agente de IA debe seguir rigurosamente al codificar en este proyecto.

---

## 🛠️ Stack Tecnológico
* **Core:** React 19 + TypeScript + Vite
* **Estilos:** Vanilla CSS (CSS Variables + HSL)
* **Iconos:** RemixIcon (importado nativamente en `src/main.tsx`)
* **Lógica:** Arquitectura de componentes desacoplada (COA) orientada a la mantenibilidad (Ian Sommerville).

---

## 💻 Comandos del Proyecto

* **Servidor Dev:** `npm run dev`
* **Compilación (Build):** `npm run build`
* **Pruebas de Linter:** `npx oxlint` o `npm run lint`
* **Instalación:** `npm install`

---

## 🎨 Arquitectura de Software y Guía de Estilo

### 📂 Estructura de Directorios (Clean Architecture)
El desarrollo debe seguir la siguiente división estructural bajo el principio de separación de responsabilidades:
* `/src/components/ui/` — Componentes base reutilizables de UI (Button, Card, Modal, Input).
* `/src/components/sections/` — Secciones de la landing page (Hero, Specialties, Treatments, Contact, Footer).
* `/src/hooks/` — Custom hooks de React para encapsular lógica de estado y efectos secundarios (ej: `useAppointmentForm`, `useScrollReveal`).
* `/src/styles/` — Clases globales y tokens de diseño.
* `/src/assets/` — Logotipo, imágenes del consultorio y recursos gráficos.

### 📝 Estándares de Codificación
* **TypeScript Estricto:** Evitar el uso de `any`. Tipar explícitamente todas las props mediante `interfaces` o `types` de TypeScript.
* **Componentes Funcionales:** Usar componentes funcionales con declaraciones `const ComponentName: React.FC<Props> = (...) => { ... }`.
* **Manejo del Estado:** Lógica compleja o de envío de formularios encapsulada en Custom Hooks. Las vistas solo deben encargarse de renderizar UI.
* **Estilos Limpios:** Todo estilo debe utilizar variables CSS nativas definidas en `src/index.css`. Prohibido el uso de estilos en línea (*inline styles*) para márgenes o colores.
* **Consola Limpia:** Limpiar sentencias `console.log` y logs de desarrollo antes de finalizar tareas.
