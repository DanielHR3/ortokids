import React, { useState, useEffect } from 'react';
import logoImg from '../../assets/logo.jpg';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Determinar qué sección está activa en scroll
      const sections = ['inicio', 'especialidades', 'tratamientos', 'contacto'];
      const scrollPosition = window.scrollY + 120; // offset por altura de header

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Ejecutar inicialmente

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleNavLinkClick = (sectionId: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // altura del header
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
    <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <a href="#inicio" className="logo" onClick={(e) => { e.preventDefault(); handleNavLinkClick('inicio'); }}>
          <img src={logoImg} alt="Logotipo OrtoKids Consultorio Dental" className="logo-img" />
          <span className="logo-text">Orto<span>Kids</span></span>
        </a>
        <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            <li>
              <a
                href="#inicio"
                className={`nav-link ${activeSection === 'inicio' ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); handleNavLinkClick('inicio'); }}
              >
                Inicio
              </a>
            </li>
            <li>
              <a
                href="#especialidades"
                className={`nav-link ${activeSection === 'especialidades' ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); handleNavLinkClick('especialidades'); }}
              >
                Especialidades
              </a>
            </li>
            <li>
              <a
                href="#tratamientos"
                className={`nav-link ${activeSection === 'tratamientos' ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); handleNavLinkClick('tratamientos'); }}
              >
                Tratamientos
              </a>
            </li>
            <li>
              <a
                href="#contacto"
                className={`nav-link ${activeSection === 'contacto' ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); handleNavLinkClick('contacto'); }}
              >
                Ubicación
              </a>
            </li>
          </ul>
          <div className="nav-cta-mobile">
            <button className="btn btn-primary btn-cta" onClick={() => handleNavLinkClick('contacto')}>
              Agendar Cita
            </button>
          </div>
        </nav>
        <div className="header-actions">
          <button className="btn btn-primary btn-cta" onClick={() => handleNavLinkClick('contacto')}>
            Agendar Cita
          </button>
          <button
            className={`nav-toggle ${isMenuOpen ? 'open' : ''}`}
            onClick={toggleMenu}
            aria-label="Abrir menú"
            aria-expanded={isMenuOpen}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        </div>
      </div>
    </header>
  );
};
