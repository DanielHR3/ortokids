# 🦷 Manual del Usuario — OrtoKids Landing Page ✨

¡Bienvenido al manual de tu nuevo sitio web! Este documento está diseñado para ayudarte a comprender el funcionamiento de tu landing page y cómo gestionar los datos básicos de tu clínica de manera muy sencilla.

---

## 🌐 Enlace al Sitio en Vivo
Tu sitio web ya está publicado en internet y listo para ser compartido con tus pacientes en el siguiente enlace:
👉 **[ortokids-adcb8.web.app](https://ortokids-adcb8.web.app)**

*Puedes abrir este enlace desde cualquier computadora, tablet o teléfono celular. El diseño se adaptará automáticamente a la pantalla.*

---

## 📋 Estructura de la Página
El sitio web está diseñado como una landing page de una sola página, dividida en las siguientes secciones interactivas:

1. **Inicio (Hero):** Presentación llamativa de la clínica con badges animados (*"Clínica Amigable"*, *"Ortodoncia Digital"*) y estadísticas clave para generar confianza a primera vista.
2. **Especialidades:** Tarjetas dedicadas a **Odontopediatría**, **Ortodoncia** y **Cirugía Oral**, listando los beneficios específicos de cada área.
3. **Tratamientos:** Un acordeón interactivo donde los pacientes pueden dar click sobre cada tratamiento (Limpiezas, Blanqueamiento, Resinas, Endodoncias) para expandir la información detallada sin saturar la pantalla.
4. **Contacto y Citas:** 
   * Formulario inteligente para solicitar citas en línea.
   * Información de horarios de atención y números de contacto directo.
   * Mapa de Google interactivo con la ubicación exacta en Constitución de 1917, Iztapalapa, CDMX.

---

## 📝 ¿Cómo funciona el Formulario de Citas?
El formulario de la sección de contacto incluye validaciones inteligentes para garantizar que los datos te lleguen completos y correctos:
* **Nombre:** Requerido (mínimo 3 letras).
* **Teléfono:** Requerido (debe tener exactamente 10 dígitos numéricos).
* **Fecha:** Requerido (el sistema **no permite** agendar fechas en el pasado; el calendario siempre inicia en el día de hoy).
* **Horario y Especialidad:** Menús desplegables sencillos.

Al presionar el botón **"Enviar Solicitud de Cita"**, se abrirá una ventana emergente en pantalla con un resumen de los datos capturados para confirmar la solicitud del paciente.

---

## 🔧 ¿Cómo actualizar tus datos en el futuro? (Para tu desarrollador o para ti)
Si cambias de número de WhatsApp, dirección o de horarios de atención, las modificaciones se realizan de forma muy sencilla editando los siguientes archivos de código:

### 1. Cambiar Teléfono, WhatsApp y Horarios:
Abre el archivo [[Contact.tsx](file:///C:/Users/mocas/OneDrive/Escritorio/projects/Freelance/ortokids_landingpage/src/components/sections/Contact.tsx)] e ir a la línea **180**. Ahí podrás modificar los textos de contacto:
* Número de WhatsApp: `+52 (55) 1234 5678`
* Correo de contacto: `contacto@ortokidsdental.mx`

### 2. Cambiar enlace de WhatsApp en el Banner de Urgencias:
Abre el archivo [[Treatments.tsx](file:///C:/Users/mocas/OneDrive/Escritorio/projects/Freelance/ortokids_landingpage/src/components/sections/Treatments.tsx)] e ir a la línea **107**. Modifica la URL de WhatsApp reemplazando el número telefónico por el tuyo en el formato internacional:
`href="https://wa.me/521234567890"`

---

## ☁️ Información del Alojamiento (Firebase Hosting)
* **Costo:** El sitio está alojado en el plan gratuito de Firebase (*Spark Plan*). Este plan cubre de sobra las visitas mensuales de una clínica dental sin generar ningún cargo monetario.
* **Seguridad:** Cuenta con certificado SSL gratuito (el candado de seguridad HTTPS al inicio de tu URL) que garantiza que la información de tus pacientes viaja de manera totalmente segura y privada.
