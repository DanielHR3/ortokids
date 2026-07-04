import React, { useState } from 'react';
import './App.css';
import { Header } from './components/sections/Header';
import { Hero } from './components/sections/Hero';
import { Specialties } from './components/sections/Specialties';
import { Treatments } from './components/sections/Treatments';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/sections/Footer';
import { Modal } from './components/ui/Modal';
import { useScrollReveal } from './hooks/useScrollReveal';
import type { AppointmentData } from './hooks/useAppointmentForm';

const App: React.FC = () => {
  // Inicializar animaciones por scroll (reveal effect)
  useScrollReveal();

  const [modalData, setModalData] = useState<AppointmentData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleFormSubmitSuccess = (data: AppointmentData) => {
    setModalData(data);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalData(null);
  };

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Specialties />
        <Treatments />
        <Contact onSubmitSuccess={handleFormSubmitSuccess} />
      </main>
      <Footer />

      {/* Modal de confirmación global desacoplado */}
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        data={modalData}
      />
    </>
  );
};

export default App;
