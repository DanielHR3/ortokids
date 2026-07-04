import React, { useEffect } from 'react';
import type { AppointmentData } from '../../hooks/useAppointmentForm';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: AppointmentData | null;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, data }) => {
  // Evitar scroll en el fondo al abrir modal
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !data) return null;

  // Formatear la fecha
  const formatDate = (dateString: string) => {
    if (!dateString) return '';
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      timeZone: 'UTC',
    };
    return new Date(dateString).toLocaleDateString('es-ES', options);
  };

  const getFriendlyTime = (timeKey: string) => {
    return timeKey === 'manana'
      ? 'mañana (9:00 AM - 1:00 PM)'
      : 'tarde (2:00 PM - 7:00 PM)';
  };

  return (
    <div className="modal open" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Cerrar ventana">
          <i className="ri-close-line"></i>
        </button>
        <div className="modal-icon">
          <i className="ri-checkbox-circle-fill"></i>
        </div>
        <h3>¡Solicitud enviada!</h3>
        <p>
          Muchas gracias por confiar en OrtoKids, <strong>{data.name}</strong>.
        </p>
        <p>
          Hemos recibido tu propuesta para el día{' '}
          <strong>{formatDate(data.date)}</strong> en el horario de la{' '}
          <strong>{getFriendlyTime(data.time)}</strong>.
        </p>
        <p>
          Nos pondremos en contacto contigo a la brevedad al teléfono{' '}
          <strong>{data.phone}</strong> para confirmar tu cita definitiva.
        </p>
        <button className="btn btn-primary" onClick={onClose}>
          Entendido
        </button>
      </div>
    </div>
  );
};
