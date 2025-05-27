import React from 'react';
import QuoteForm from '../components/Forms/QuoteForm';
import './Pages.css'; // Estilos generales para las páginas

/**
 * @description Página que contiene el formulario para que los clientes soliciten una cotización.
 */
const QuotePage = () => {
  /**
   * Maneja el envío de los datos de la cotización.
   * En una aplicación real, esta función enviaría los datos a un servidor backend.
   * @param {object} quoteData - Objeto con los datos de la cotización enviados por el formulario.
   */
  const handleQuoteSubmit = (quoteData) => {
    console.log('Datos de Cotización Recibidos:', quoteData);
    // Aquí iría la lógica para hacer una petición HTTP (ej. fetch o Axios) a una API
    // fetch('/api/send-quote', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(quoteData),
    // }).then(response => response.json())
    //   .then(data => alert('¡Gracias! Tu solicitud de cotización ha sido enviada.'))
    //   .catch(error => console.error('Error al enviar cotización:', error));

    alert('¡Gracias! Tu solicitud de cotización ha sido enviada con éxito. Nos pondremos en contacto contigo pronto para darte un presupuesto personalizado.');
  };

  return (
    <section className="page-section">
      <h2 className="page-heading">Solicitar Cotización</h2>
      <p className="page-subheading">Envíanos tus requerimientos específicos y te enviaremos un presupuesto personalizado.</p>
      <QuoteForm onSubmitQuote={handleQuoteSubmit} />
    </section>
  );
};

export default QuotePage;