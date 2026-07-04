import React from 'react';
import { Accordion, type AccordionItem } from '../ui/Accordion';

const TREATMENTS_LIST: AccordionItem[] = [
  {
    id: 'acc-1',
    title: 'Limpieza Dental y Fluoración',
    content: 'Profilaxis profunda para eliminar placa y sarro dental. Incluye cepillado profiláctico, remoción de manchas y aplicación de barniz de flúor de alta protección.',
  },
  {
    id: 'acc-2',
    title: 'Blanqueamiento Dental',
    content: 'Devuelve el brillo natural a tus dientes de forma segura. Contamos con blanqueamiento dental clínico de alta efectividad que protege tu sensibilidad.',
  },
  {
    id: 'acc-3',
    title: 'Resinas y Reconstrucciones Estéticas',
    content: 'Eliminamos la caries y restauramos la pieza con resina biocompatible, imitando el color y la textura natural del diente de forma imperceptible.',
  },
  {
    id: 'acc-4',
    title: 'Endodoncias y Pulpotomías',
    content: 'Tratamientos para conservar el diente natural cuando la raíz está comprometida por infecciones profundas. Pulpotomías especializadas en dientes de leche.',
  },
];

export const Treatments: React.FC = () => {
  const handleScrollToContact = () => {
    const element = document.getElementById('contacto');
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <section id="tratamientos" className="section treatments-section bg-light">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-tagline">Tratamientos Dentales Completos</span>
            <h2 className="section-title">Atención dental integral para la familia</h2>
            <p className="section-description">
              Realizamos todo tipo de tratamientos utilizando materiales de alta gama y técnicas de vanguardia para asegurar resultados duraderos.
            </p>
          </div>

          <div className="grid grid-2 treatments-layout">
            <div className="treatments-info">
              <h3 className="treatments-subtitle">Cuidado general y especializado</h3>
              <p className="treatments-text">
                En OrtoKids prevenimos y corregimos cualquier afección dental. Nos aseguramos de dar un seguimiento personalizado para garantizar la salud bucal a largo plazo.
              </p>
              
              <Accordion items={TREATMENTS_LIST} />
            </div>

            <div className="treatments-visual">
              <div className="visual-card">
                <div className="visual-header">
                  <i className="ri-magic-line icon-spark"></i>
                  <h3>Tu sonrisa en buenas manos</h3>
                </div>
                <p className="visual-description">
                  Pregunta por nuestros planes familiares de prevención y facilidades de pago en tratamientos de Ortodoncia.
                </p>
                <div className="visual-benefits">
                  <div className="benefit-item">
                    <span className="benefit-num">01</span>
                    <div>
                      <strong>Materiales de Calidad</strong>
                      <p>Utilizamos marcas dentales líderes para mayor seguridad.</p>
                    </div>
                  </div>
                  <div className="benefit-item">
                    <span className="benefit-num">02</span>
                    <div>
                      <strong>Enfoque Preventivo</strong>
                      <p>Evitamos tratamientos invasivos con una detección temprana.</p>
                    </div>
                  </div>
                </div>
                <button className="btn btn-secondary btn-full" onClick={handleScrollToContact}>
                  Consultar Costos y Citas
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner integrado aquí */}
      <section className="cta-banner">
        <div className="container cta-container text-center">
          <h2>¿Urgencias o dudas sobre el desarrollo dental de tu hijo?</h2>
          <p>
            Brindamos asesoría y atención de urgencia inmediata para aliviar molestias dentales rápidamente.
          </p>
          <div className="cta-banner-buttons">
            <a href="https://wa.me/521234567890" target="_blank" rel="noopener noreferrer" className="btn btn-light">
              <i className="ri-whatsapp-line"></i> WhatsApp de Atención
            </a>
            <button className="btn btn-outline-light" onClick={handleScrollToContact}>
              Solicitar Cita en Consultorio
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
