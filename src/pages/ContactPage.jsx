import React from 'react';
import ContactForm from '../components/Forms/ContactForm';
import './Pages.css'; 

const ContactPage = () => {
  /**
   * Maneja el envío de los datos de contacto.
   *  esta función enviaría los datos a un servidor backend.
   * @param {object} contactData - Objeto con los datos de contacto enviados por el formulario.
   */
  const handleContactSubmit = (contactData) => {
    console.log('Datos de Contacto Recibidos:', contactData);
    // Aquí iría la lógica para hacer una petición HTTP 
    alert('¡Mensaje enviado! Gracias por contactarnos. Te responderemos a la brevedad posible.');
  };

  return (
    <section className="page-section">
      <h2 className="page-heading">Contáctanos</h2>
      <p className="page-subheading">¿Tienes alguna pregunta o consulta? Envíanos un mensaje y nos pondremos en contacto contigo.</p>
      <ContactForm onSubmitContact={handleContactSubmit} />
    </section>
  );
};

export default ContactPage;