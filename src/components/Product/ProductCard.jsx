import React from 'react';
import Button from '../UI/Button'; 
import './ProductCard.css';

/**
 * @param {object} props - Propiedades del componente.
 * @param {object} props.product - Objeto que contiene los detalles de un producto (id, name, description, price, image).
 * @param {function} [props.onDelete] - Función de callback para eliminar un producto (solo visible para admin).
 * @param {boolean} [props.isAdminView=false] - Booleano para indicar si la tarjeta se muestra en la vista de administrador.
 */
const ProductCard = ({ product, onDelete, isAdminView }) => {
  const imageUrl = product.image || 'https://via.placeholder.com/200x150.png?text=Producto';

  return (
    <div className="product-card">
      <div className="product-card__image-container">
        <img src={imageUrl} alt={product.name} className="product-card__image" />
      </div>
      <div className="product-card__info">
        <h3 className="product-card__name">{product.name}</h3>
        <p className="product-card__description">{product.description}</p>
        
        <p className="product-card__price">${product.price.toLocaleString('es-CO')}</p>
        
        {isAdminView && (
          <Button onClick={() => onDelete(product.id)} className="product-card__delete-btn">
            Eliminar
          </Button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;