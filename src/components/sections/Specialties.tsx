import React from 'react';
import { Card } from '../ui/Card';

export const Specialties: React.FC = () => {
  return (
    <section id="especialidades" className="section especialidades-section">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-tagline">Nuestras Especialidades</span>
          <h2 className="section-title">Servicios especializados a tu medida</h2>
          <p className="section-description">
            Contamos con un equipo de especialistas dedicados a tratar cada etapa del desarrollo dental, desde la infancia hasta la edad adulta.
          </p>
        </div>
        <div className="grid grid-3 specialty-grid">
          {/* Odontopediatría */}
          <Card className="specialty-card" reveal>
            <div className="card-icon specialty-icon-1">
              <i className="ri-bear-smile-line"></i>
            </div>
            <h3 className="card-title">Odontopediatría</h3>
            <p className="card-text">
              Atención odontológica adaptada psicológicamente para bebés, niños y adolescentes. Buscamos que cada consulta sea una experiencia positiva y educativa para prevenir la caries.
            </p>
            <ul className="specialty-features">
              <li>
                <i className="ri-checkbox-circle-fill"></i> Odontología lúdica sin miedo
              </li>
              <li>
                <i className="ri-checkbox-circle-fill"></i> Aplicación de selladores y flúor
              </li>
              <li>
                <i className="ri-checkbox-circle-fill"></i> Control de hábitos dentales dañinos
              </li>
            </ul>
          </Card>

          {/* Ortodoncia */}
          <Card className="specialty-card" reveal>
            <div className="card-icon specialty-icon-2">
              <i className="ri-sparkling-2-line"></i>
            </div>
            <h3 className="card-title">Ortodoncia</h3>
            <p className="card-text">
              Diseñamos sonrisas alineadas y corregimos mordidas en niños, adolescentes y adultos. Ofrecemos brackets metálicos tradicionales, estéticos (zafiro) y alineadores invisibles de última generación.
            </p>
            <ul className="specialty-features">
              <li>
                <i className="ri-checkbox-circle-fill"></i> Ortodoncia interceptiva infantil
              </li>
              <li>
                <i className="ri-checkbox-circle-fill"></i> Brackets estéticos y autoligables
              </li>
              <li>
                <i className="ri-checkbox-circle-fill"></i> Alineadores transparentes (invisibles)
              </li>
            </ul>
          </Card>

          {/* Cirugía */}
          <Card className="specialty-card" reveal>
            <div className="card-icon specialty-icon-3">
              <i className="ri-shield-user-fill"></i>
            </div>
            <h3 className="card-title">Cirugía Oral</h3>
            <p className="card-text">
              Procedimientos quirúrgicos realizados bajo los más estrictos estándares de seguridad y con técnicas de mínima invasión. Nos especializamos en muelas del juicio e implantes.
            </p>
            <ul className="specialty-features">
              <li>
                <i className="ri-checkbox-circle-fill"></i> Extracción segura de muelas del juicio
              </li>
              <li>
                <i className="ri-checkbox-circle-fill"></i> Implantes dentales de alta fijación
              </li>
              <li>
                <i className="ri-checkbox-circle-fill"></i> Diagnóstico de anomalías óseas y maxilares
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
};
