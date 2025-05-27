import React from 'react';
import './Button.css'; // Estilos específicos para el botón

/**
 * @param {object} props - Propiedades del componente.
 * @param {function} props.onClick - Función a ejecutar cuando el botón es clickeado.
 * @param {string} props.children - El contenido (texto o elementos) que se mostrará dentro del botón.
 * @param {string} [props.type='button'] - El tipo del botón (ej. 'submit', 'button').
 * @param {string} [props.className=''] - Clases CSS adicionales para personalización.
 * @param {boolean} [props.disabled=false] - Indica si el botón está deshabilitado.
 */
const Button = (props) => {
  return (
    <button
      type={props.type || 'button'} // Por defecto es 'button'
      onClick={props.onClick}
      className={`button ${props.className}`} // Combina la clase base con clases adicionales
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;