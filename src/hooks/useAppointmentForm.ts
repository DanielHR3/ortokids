import { useState } from 'react';
import type { FormEvent, ChangeEvent } from 'react';

export interface AppointmentData {
  name: string;
  phone: string;
  specialty: string;
  date: string;
  time: string;
  message: string;
}

export interface FormErrors {
  name?: string;
  phone?: string;
  date?: string;
}

export const useAppointmentForm = () => {
  const [formData, setFormData] = useState<AppointmentData>({
    name: '',
    phone: '',
    specialty: 'odontopediatria',
    date: '',
    time: 'manana',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [confirmedData, setConfirmedData] = useState<AppointmentData | null>(null);

  const validate = (): boolean => {
    const tempErrors: FormErrors = {};
    let isValid = true;

    // Validación Nombre
    if (formData.name.trim().length < 3) {
      tempErrors.name = 'El nombre debe tener al menos 3 caracteres.';
      isValid = false;
    }

    // Validación Teléfono (10 dígitos exactos)
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(formData.phone.replace(/\s/g, ''))) {
      tempErrors.phone = 'El teléfono debe tener 10 dígitos numéricos.';
      isValid = false;
    }

    // Validación Fecha (No anterior a hoy)
    if (!formData.date) {
      tempErrors.date = 'La fecha es obligatoria.';
      isValid = false;
    } else {
      const selectedDate = new Date(formData.date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      selectedDate.setHours(0, 0, 0, 0);

      if (selectedDate < today) {
        tempErrors.date = 'La fecha no puede ser anterior al día de hoy.';
        isValid = false;
      }
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    
    // Limpiar error del campo al escribir
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      setConfirmedData({ ...formData });
      setIsModalOpen(true);
      
      // Limpiar formulario tras éxito
      setFormData({
        name: '',
        phone: '',
        specialty: 'odontopediatria',
        date: '',
        time: 'manana',
        message: '',
      });
      setErrors({});
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return {
    formData,
    errors,
    isModalOpen,
    confirmedData,
    handleChange,
    handleSubmit,
    closeModal,
  };
};
