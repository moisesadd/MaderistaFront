import React from 'react';
import './Input.css'; // Estilos compartidos con TextArea

/**
 * @param {object} props - Propiedades del componente.
 * @param {string} props.label - La etiqueta visible para el campo de entrada.
 * @param {string} props.id - Un ID único para el input, utilizado también para el 'htmlFor' del label.
 * @param {string} props.type - El tipo de input (ej. 'text', 'email', 'number', 'password').
 * @param {string} props.value - El valor actual del campo de entrada (controlado por el estado del padre).
 * @param {function} props.onChange - Función a ejecutar cuando el valor del input cambia.
 * @param {string} [props.placeholder=''] - Texto de marcador de posición.
 * @param {boolean} [props.required=false] - Indica si el campo es obligatorio.
 * @param {string} [props.className=''] - Clases CSS adicionales.
 */
const Input = (props) => {
  return (
    <div className={`input-control ${props.className}`}>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
        required={props.required}
      />
    </div>
  );
};

export default Input;