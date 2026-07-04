import React from 'react';
import logoImg from '../../assets/logo.jpg';

export const Footer: React.FC = () => {
  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
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
    <footer className="site-footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <a
            href="#inicio"
            className="logo"
            onClick={(e) => {
              e.preventDefault();
              handleScrollToSection('inicio');
            }}
          >
            <img src={logoImg} alt="Logo OrtoKids" className="logo-img-footer" />
            <span className="logo-text">
              Orto<span>Kids</span>
            </span>
          </a>
          <p className="footer-desc">
            Consultorio dental especializado en Ortodoncia, Odontopediatría y Cirugía Oral. El espacio ideal para el cuidado dental de tus hijos y toda la familia en Iztapalapa, CDMX.
          </p>
          <div className="social-links">
            <a href="#" aria-label="Facebook">
              <i className="ri-facebook-fill"></i>
            </a>
            <a href="#" aria-label="Instagram">
              <i className="ri-instagram-line"></i>
            </a>
            <a href="https://wa.me/521234567890" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <i className="ri-whatsapp-line"></i>
            </a>
          </div>
        </div>

        <div className="footer-links">
          <h4>Menú</h4>
          <ul>
            <li>
              <a
                href="#inicio"
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollToSection('inicio');
                }}
              >
                Inicio
              </a>
            </li>
            <li>
              <a
                href="#especialidades"
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollToSection('especialidades');
                }}
              >
                Especialidades
              </a>
            </li>
            <li>
              <a
                href="#tratamientos"
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollToSection('tratamientos');
                }}
              >
                Tratamientos
              </a>
            </li>
            <li>
              <a
                href="#contacto"
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollToSection('contacto');
                }}
              >
                Ubicación y Citas
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-services">
          <h4>Servicios</h4>
          <ul>
            <li>
              <a
                href="#especialidades"
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollToSection('especialidades');
                }}
              >
                Odontopediatría (Niños)
              </a>
            </li>
            <li>
              <a
                href="#especialidades"
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollToSection('especialidades');
                }}
              >
                Ortodoncia (Brackets e Invisible)
              </a>
            </li>
            <li>
              <a
                href="#especialidades"
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollToSection('especialidades');
                }}
              >
                Cirugía Oral e Implantes
              </a>
            </li>
            <li>
              <a
                href="#tratamientos"
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollToSection('tratamientos');
                }}
              >
                Limpiezas e Higiene
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-container">
          <p>&copy; {new Date().getFullYear()} OrtoKids. Todos los derechos reservados. Diseñado por Daniel Hernández Rubio.</p>
          <div className="footer-legal">
            <a href="#">Aviso de Privacidad</a>
            <a href="#">Términos de Servicio</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
