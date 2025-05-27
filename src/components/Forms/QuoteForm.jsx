import React, { useState } from 'react';
import Input from '../UI/Input';
import TextArea from '../UI/TextArea';
import Button from '../UI/Button';
import './Form.css'; 

/**
 * @param {object} props - Propiedades del componente.
 * @param {function} props.onSubmitQuote - Callback que se ejecuta al enviar el formulario con los datos de la cotización.
 */
const QuoteForm = ({ onSubmitQuote }) => {
  // Estados para cada campo del formulario
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState(''); // opcional
  const [comments, setComments] = useState('');

  /**
   * Maneja el envío del formulario de cotización.
   * @param {Event} event - El evento de envío del formulario.
   */
  const handleSubmit = (event) => {
    event.preventDefault(); // Evita la recarga de la página

    // Validación básica: nombre, correo y comentarios son obligatorios
    if (!name.trim() || !email.trim() || !comments.trim()) {
      alert('completa los campos obligatorios *');
      return;
    }
    // Validación de formato de email
    if (!email.includes('@') || !email.includes('.')) {
      alert('introduce un correo electrónico válido.');
      return;
    }

    const quoteData = {
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      comments: comments.trim(),
      date: new Date().toISOString(), // Guarda la fecha y hora de envío
    };

    onSubmitQuote(quoteData); // Llama a la función prop para manejar los datos
    
    // Limpiar el formulario después del envío
    setName('');
    setEmail('');
    setPhone('');
    setComments('');
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h3>Solicitar Cotización Personalizada</h3>
      <Input
        label="Nombre Completo*"
        id="quoteName"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        placeholder="Ej: Juan Peres"
      />
      <Input
        label="Correo Electrónico*"
        id="quoteEmail"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        placeholder="Ej: tucorreo@gmail.com"
      />
      <Input
        label="Teléfono"
        id="quotePhone"
        type="tel" // Tipo 'tel' para móviles
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Ej: 3241234567"
      />
      <TextArea
        label="Detalles de la Cotización / Comentarios"
        id="quoteComments"
        value={comments}
        onChange={(e) => setComments(e.target.value)}
        required
        rows="5"
        placeholder="Describe detalladamente lo que necesitas cotizar: tipo de mueble, medidas, material preferido, acabados, cantidad, etc."
      />
      <Button type="submit">Enviar Solicitud de Cotización</Button>
    </form>
  );
};

export default QuoteForm;