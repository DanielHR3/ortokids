import React from 'react';
import heroImg from '../../assets/hero.jpg';

export const Hero: React.FC = () => {
  const handleCtaClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="inicio" className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          <span className="hero-tagline">
            <i className="ri-heart-3-fill"></i> El consultorio dental favorito de toda la familia
          </span>
          <h1 className="hero-title">¡Especialistas en sonrisas felices y saludables!</h1>
          <p className="hero-description">
            En <strong>OrtoKids</strong> combinamos calidez, tecnología y un ambiente de total confianza para el cuidado dental de tus hijos y de toda la familia. ¡Hacemos que ir al dentista sea divertido!
          </p>
          <div className="hero-actions">
            <button className="btn btn-primary btn-lg" onClick={() => handleCtaClick('contacto')}>
              Agendar Cita <i className="ri-arrow-right-line"></i>
            </button>
            <button className="btn btn-secondary btn-lg" onClick={() => handleCtaClick('especialidades')}>
              Ver Especialidades
            </button>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">10+</span>
              <span className="stat-label">Años Cuidando Sonrisas</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">3k+</span>
              <span className="stat-label">Pacientes Felices</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">Cuidado sin Estrés</span>
            </div>
          </div>
        </div>
        <div className="hero-image-wrapper">
          <div className="hero-image-bg-glow"></div>
          <div className="hero-image-card">
            <img src={heroImg} alt="Consultorio dental moderno e infantil OrtoKids" className="hero-image" />
            <div className="hero-image-badge float-badge-1">
              <span className="badge-icon">
                <i className="ri-emoji-sticker-fill"></i>
              </span>
              <div className="badge-text">
                <h4>Clínica Amigable</h4>
                <p>Cuidado dental sin dolor</p>
              </div>
            </div>
            <div className="hero-image-badge float-badge-2">
              <span className="badge-icon">
                <i className="ri-tooth-fill"></i>
              </span>
              <div className="badge-text">
                <h4>Ortodoncia Digital</h4>
                <p>Brackets y alineadores</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
