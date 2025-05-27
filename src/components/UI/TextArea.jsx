import React from 'react';
import './Input.css'; // Reutilizamos los mismos estilos que Input

/**
 * @param {object} props - Propiedades del componente.
 * @param {string} props.label - La etiqueta visible para el área de texto.
 * @param {string} props.id - Un ID único para el textarea.
 * @param {string} props.value - El valor actual del área de texto (controlado por el estado del padre).
 * @param {function} props.onChange - Función a ejecutar cuando el valor del textarea cambia.
 * @param {string} [props.placeholder=''] - Texto de marcador de posición.
 * @param {number} [props.rows=5] - Número de filas visibles del área de texto.
 * @param {boolean} [props.required=false] - Indica si el campo es obligatorio.
 * @param {string} [props.className=''] - Clases CSS adicionales.
 */
const TextArea = (props) => {
  return (
    <div className={`input-control ${props.className}`}>
      <label htmlFor={props.id}>{props.label}</label>
      <textarea
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
        rows={props.rows || 5} // Valor por defecto de 5 filas
        required={props.required}
      />
    </div>
  );
};

export default TextArea;