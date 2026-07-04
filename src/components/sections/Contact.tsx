import React from 'react';
import { useAppointmentForm, type AppointmentData } from '../../hooks/useAppointmentForm';
import { Card } from '../ui/Card';

interface ContactProps {
  onSubmitSuccess: (data: AppointmentData) => void;
}

export const Contact: React.FC<ContactProps> = ({ onSubmitSuccess }) => {
  const {
    formData,
    errors,
    handleChange,
    handleSubmit,
  } = useAppointmentForm();

  // Obtener fecha mínima (hoy)
  const getTodayString = () => {
    return new Date().toISOString().split('T')[0];
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Ejecutar handleSubmit nativo del hook
    handleSubmit(e);
    
    // Si no hay errores y los campos requeridos se llenaron, llamamos al trigger success
    const phoneRegex = /^[0-9]{10}$/;
    if (
      formData.name.trim().length >= 3 &&
      phoneRegex.test(formData.phone.replace(/\s/g, '')) &&
      formData.date
    ) {
      onSubmitSuccess(formData);
    }
  };

  return (
    <section id="contacto" className="section contact-section">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-tagline">Citas y Horarios</span>
          <h2 className="section-title">¡Agenda tu visita hoy mismo!</h2>
          <p className="section-description">
            Llena el formulario y dinos qué especialidad requieres. Nos adaptamos a tus horarios.
          </p>
        </div>

        <div className="grid grid-2 contact-layout">
          {/* Formulario de Citas */}
          <Card className="contact-card">
            <h3 className="contact-card-title">Agenda tu cita en línea</h3>
            <p className="contact-card-desc">
              Nos pondremos en contacto para confirmar tu espacio y el especialista adecuado para ti.
            </p>

            <form onSubmit={handleFormSubmit} className="appointment-form">
              <div className="form-group">
                <label htmlFor="name">Nombre del Paciente *</label>
                <div className="input-wrapper">
                  <i className="ri-user-line input-icon"></i>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Ej. Sofía Pérez (o tutor)"
                    required
                  />
                </div>
                {errors.name && <span className="error-text" style={{ color: 'var(--danger)', fontSize: '0.8rem', marginTop: '0.25rem' }}>{errors.name}</span>}
              </div>

              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="phone">Teléfono / WhatsApp *</label>
                  <div className="input-wrapper">
                    <i className="ri-phone-line input-icon"></i>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Ej. 55 1234 5678"
                      required
                    />
                  </div>
                  {errors.phone && <span className="error-text" style={{ color: 'var(--danger)', fontSize: '0.8rem', marginTop: '0.25rem' }}>{errors.phone}</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="specialty">Especialidad Requerida</label>
                  <div className="input-wrapper">
                    <i className="ri-medicine-bottle-line input-icon"></i>
                    <select
                      id="specialty"
                      name="specialty"
                      value={formData.specialty}
                      onChange={handleChange}
                    >
                      <option value="odontopediatria">Odontopediatría (Dentista Infantil)</option>
                      <option value="ortodoncia">Ortodoncia (Brackets/Alineadores)</option>
                      <option value="cirugia">Cirugía Oral</option>
                      <option value="general">Odontología General</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="date">Fecha preferida *</label>
                  <div className="input-wrapper">
                    <i className="ri-calendar-line input-icon"></i>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      min={getTodayString()}
                      required
                    />
                  </div>
                  {errors.date && <span className="error-text" style={{ color: 'var(--danger)', fontSize: '0.8rem', marginTop: '0.25rem' }}>{errors.date}</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="time">Horario preferido</label>
                  <div className="input-wrapper">
                    <i className="ri-time-line input-icon"></i>
                    <select
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                    >
                      <option value="manana">Mañana (9:00 AM - 1:00 PM)</option>
                      <option value="tarde">Tarde (2:00 PM - 7:00 PM)</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Mensaje o comentarios adicionales</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Ej: Es la primera vez del niño, tiene dolor de muela, etc."
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary btn-full">
                Enviar Solicitud de Cita <i className="ri-send-plane-fill"></i>
              </button>
            </form>
          </Card>

          {/* Información y Mapa */}
          <div className="contact-info-wrapper">
            <div className="contact-details">
              <div className="detail-item">
                <span className="detail-icon">
                  <i className="ri-map-pin-line"></i>
                </span>
                <div className="detail-text">
                  <h4>Dirección del Consultorio</h4>
                  <p>Av. Constitución de 1917, Iztapalapa, Ciudad de México, CDMX.</p>
                  <a
                    href="https://maps.google.com/maps?q=19.35573959350586%2C-99.02378845214844&z=17&hl=es"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="map-link"
                  >
                    Ver ubicación en Google Maps <i className="ri-external-link-line"></i>
                  </a>
                </div>
              </div>

              <div className="detail-item">
                <span className="detail-icon">
                  <i className="ri-time-line"></i>
                </span>
                <div className="detail-text">
                  <h4>Horario del Consultorio</h4>
                  <p>Lunes a Viernes: 9:00 AM - 7:00 PM</p>
                  <p>Sábados: 9:00 AM - 2:00 PM</p>
                  <p className="emergency-text">
                    <strong>Urgencias:</strong> Escríbenos por WhatsApp 24/7.
                  </p>
                </div>
              </div>

              <div className="detail-item">
                <span className="detail-icon">
                  <i className="ri-phone-fill"></i>
                </span>
                <div className="detail-text">
                  <h4>Contacto Directo</h4>
                  <p>WhatsApp / Cel: +52 (55) 1234 5678</p>
                  <p>Email: contacto@ortokidsdental.mx</p>
                </div>
              </div>
            </div>

            {/* Mapa Interactivo */}
            <div className="map-container reveal">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3764.292671239841!2d-99.02636332468307!3d19.355744543088737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDIxJzIwLjciTiA5OcKwMDEnMjUuNiJX!5e0!3m2!1ses!2smx!4v1700000000000!5m2!1ses!2smx"
                width="100%"
                height="280"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de OrtoKids"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
