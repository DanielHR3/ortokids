# 📄 Propuesta Técnica de Ingeniería de Software — OrtoKids Web
## Basada en estándares de Roger Pressman (SQA) e Ian Sommerville (Software Engineering)

> **Autor:** Daniel Hernández Rubio (Freelance Architect)  
> **Estado:** Propuesta presentada para aprobación del cliente  
> **Objetivo:** Definir la arquitectura, la estrategia de calidad y el ciclo de vida del proyecto web de OrtoKids utilizando las mejores prácticas de Ingeniería de Software.

---

## 🏛️ 1. Modelo Arquitectónico (Ian Sommerville)

Para asegurar el bajo acoplamiento, alta cohesión y una óptima mantenibilidad del sistema, utilizaremos una **Arquitectura Basada en Componentes (Component-Based Software Engineering)**. React nos permite encapsular la interfaz y su comportamiento en piezas independientes.

### 📂 Estructura de Capas Desacoplada:
1. **Capa de Presentación (UI Components):**
   * Ubicada en `/src/components/ui/` (componentes genéricos de bajo nivel como `Button`, `Modal`, `Card`) y `/src/components/sections/` (bloques del layout: `Hero`, `Treatments`).
   * No maneja lógica del negocio de forma directa; recibe parámetros por `Props`.
2. **Capa de Lógica del Negocio (Controladores / Custom Hooks):**
   * Ubicada en `/src/hooks/`.
   * Aísla las funciones lógicas, validaciones y manipulación de datos (ej. `useAppointmentForm` encapsula el estado del formulario de citas, validaciones de teléfono, y la lógica de envío).
3. **Capa de Configuración e Identidad (Design System):**
   * Ubicada en `/src/styles/` e `index.css`.
   * Centraliza los tokens de diseño (variables HSL obtenidas del logotipo de OrtoKids) para cambios globales e inmediatos sin alterar el código HTML/TSX.

```
/src
├── assets/         → Imágenes (logo.jpg, hero.jpg)
├── components/
│   ├── ui/         → Componentes reusables pequeños (Button.tsx, Modal.tsx, Card.tsx)
│   └── sections/   → Bloques del flujo principal (Hero.tsx, Specialties.tsx, Contact.tsx, Footer.tsx)
├── hooks/          → Lógica e interacciones (useAppointmentForm.ts, useScrollReveal.ts)
├── styles/         → Estilos globales y variables de color
├── App.tsx         → Coordinador general de la vista
└── main.tsx        → Punto de entrada de la aplicación
```

---

## 📈 2. Ciclo de Vida y Proceso de Desarrollo (Roger Pressman)

Adoptamos un **Modelo de Desarrollo Incremental / Prototipado Evolutivo (Evolutionary Prototyping)**. Esto permite entregar software funcional de forma rápida, reduciendo la incertidumbre sobre la interfaz física definitiva.

### 🏁 Fases del Incremento:
1. **Modelado y Requerimientos (Especificación):** Definición de la Historia de Usuario con sus criterios de aceptación.
2. **Codificación Rigurosa:** Construcción en React 19 + TypeScript con tipado estricto para evitar errores en tiempo de ejecución.
3. **Pruebas Unitarias de Usabilidad:** Validación del diseño responsivo y lógica de formularios antes del despliegue.
4. **Despliegue y Validación:** Liberación de builds en Vercel conectadas a GitHub para que el cliente valide en tiempo real.

---

## 🛡️ 3. Plan de Garantía de Calidad y Mantenibilidad (SQA - Pressman)

La calidad del software se construirá desde el inicio mediante las siguientes directrices técnicas:

* **Mantenibilidad (Sommerville):**
  * **Tipado Estricto:** Prohibido el uso de `any`. Todo parámetro, prop u objeto debe estar debidamente tipado en interfaces de TypeScript.
  * **Configuración del Agente IA (CLAUDE.md):** Archivo maestro que automatiza las pautas estilísticas y técnicas para acelerar el desarrollo asistido.
* **Calidad de Interfaz (Usabilidad):**
  * **Variables HSL centralizadas:** Aseguran consistencia de contraste y armonía con el logo oficial.
  * **Validaciones Robustas:** Validación en tiempo real del formulario (nombre no vacío, teléfono de 10 dígitos numéricos, fecha posterior a la actual).
* **Gestión de Configuración (Git & GitHub):**
  * Uso de mensajes semánticos en commits:
    * `feat: ...` (nuevas características).
    * `fix: ...` (solución de bugs).
    * `style: ...` (cambios en CSS o apariencia).
    * `docs: ...` (documentación).
