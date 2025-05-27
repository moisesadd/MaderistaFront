import React, { useState } from 'react';
import Input from '../UI/Input';
import TextArea from '../UI/TextArea';
import Button from '../UI/Button';
import './Form.css'; 

/**
 * @param {object} props - Propiedades del componente.
 * @param {function} props.onSubmitContact - Callback que se ejecuta al enviar el formulario de contacto.
 */
const ContactForm = ({ onSubmitContact }) => {
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  /**
   * Maneja el envío del formulario de contacto.
   * @param {Event} event - El evento de envío del formulario.
   */
  const handleSubmit = (event) => {
    event.preventDefault(); // Evita la recarga de la página

    // Validación
    if (!name.trim() || !email.trim() || !message.trim()) {
      alert('Por favor, completa todos los campos obligatorios: Tu Nombre, Tu Correo Electrónico y Tu Mensaje.');
      return;
    }
    // Validación gmail
    if (!email.includes('@') || !email.includes('.')) {
      alert('Por favor, introduce un correo electrónico válido.');
      return;
    }

    const contactData = {
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
      date: new Date().toISOString(), // Guarda la fecha y hora de envío
    };

    onSubmitContact(contactData); // Llama a la función prop para manejar los datos
    
    // Limpiar el formulario después del envío
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h3>Envíanos un Mensaje</h3>
      <Input
        label="Tu Nombre"
        id="contactName"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        placeholder="Ej: Ana María"
      />
      <Input
        label="Tu Correo Electrónico"
        id="contactEmail"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        placeholder="Ej: ana_maria@gmail.com"
      />
      <TextArea
        label="Tu Mensaje"
        id="contactMessage"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
        rows="5"
        placeholder="Consulta o comentario aquí..."
      />
      <Button type="submit">Enviar Mensaje</Button>
    </form>
  );
};

export default ContactForm;