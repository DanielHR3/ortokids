# OrtoKids — Consultorio Dental 🦷✨

Landing page profesional y responsiva para el consultorio dental **OrtoKids**, especializado en Odontopediatría, Ortodoncia y Cirugía Oral.

El proyecto está diseñado bajo estándares estrictos de ingeniería de software (Ian Sommerville / Roger Pressman), implementando una arquitectura desacoplada, tipado estricto en TypeScript y despliegue continuo optimizado.

---

## 🚀 Arquitectura y Tecnologías
* **Core:** React 19 + TypeScript + Vite.
* **Estilos (CSS):** Vanilla CSS modular con variables HSL personalizadas basadas en el logotipo oficial.
* **Componentes de UI Reutilizables:** Componentes atómicos e independientes (`Button`, `Card`, `Accordion`, `Modal`).
* **Manejo de Estado Desacoplado:** Validación y manejo de estados del formulario delegados a un Custom Hook (`useAppointmentForm`).
* **Efectos Visuales:** Sistema de animación por scroll mediante Intersection Observer (`useScrollReveal`).
* **Hosting:** Firebase Hosting con soporte para Single Page Application (SPA).

---

## 📂 Estructura del Código

```bash
ortokids_landingpage/
├── public/                  # Íconos y activos públicos
├── src/
│   ├── assets/              # Imágenes de la clínica y logo oficial
│   ├── components/
│   │   ├── sections/        # Componentes de sección (Header, Hero, Specialties, etc.)
│   │   └── ui/              # Componentes de UI atómicos (Card, Accordion, Modal)
│   ├── hooks/               # Custom Hooks lógicos (useAppointmentForm, useScrollReveal)
│   ├── services/            # Servicios (Inicialización de Firebase y Analytics)
│   ├── App.css              # Estilos específicos de secciones
│   ├── App.tsx              # Componente principal / Orquestador
│   ├── index.css            # Design System global y variables HSL
│   └── main.tsx             # Punto de entrada / Imports globales
├── .env.example             # Ejemplo de variables de entorno para Firebase
├── firebase.json            # Configuración de despliegue a Firebase Hosting
├── tsconfig.json            # Configuración de TypeScript con verbatimModuleSyntax
└── vite.config.ts           # Configuración del empaquetador Vite
```

---

## ⚡ Comandos del Proyecto

### 1. Levantar Servidor de Desarrollo
Inicia el entorno de desarrollo local con Hot Module Replacement (HMR):
```bash
npm run dev
```

### 2. Validar Tipados y Compilar para Producción
Ejecuta la compilación de producción con TypeScript estricto. Genera la carpeta `/dist`:
```bash
npm run build
```

### 3. Ejecutar Linter (Oxlint)
Ejecuta el linter ultrarrápido Oxlint para verificar la calidad del código:
```bash
npm run lint
```

### 4. Desplegar en Firebase Hosting
Una vez compilado el sitio, inicia sesión y despliega a producción con:
```bash
npx firebase-tools login
npx firebase-tools deploy --project ortokids-adcb8
```

---

## 🔒 Seguridad e Integración
* **Sanitización XSS:** React escapa por defecto los valores de entrada de los usuarios antes de inyectarlos en el DOM.
* **HTTPS y SSL:** Forzado nativamente por el alojamiento seguro de Firebase Hosting.
* **Variables Ocultas:** Las API Keys del proyecto de Firebase residen en un archivo `.env` local, el cual está excluido en Git a través de `.gitignore` para prevenir fugas de credenciales.
* **Seguridad en Base de Datos (RLS):** Listo para escalar. La integración futura con base de datos requiere Row Level Security habilitado, restringiendo el rol anónimo únicamente a inserciones (`INSERT`), bloqueando lecturas de datos de otros pacientes.

---

## 👩‍💻 Desarrollador
Diseñado y desarrollado bajo mejores prácticas por **Daniel Hernández Rubio**.
* **Repositorio oficial:** [DanielHR3/ortokids](https://github.com/DanielHR3/ortokids.git)
* **Demo en Vivo:** [ortokids-adcb8.web.app](https://ortokids-adcb8.web.app)
