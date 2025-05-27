import React from 'react';
import ProductCard from './ProductCard'; // Importa el componente ProductCard
import './ProductList.css'; // Estilos específicos para la lista de productos

/**
 * @param {object} props - Propiedades del componente.
 * @param {Array<object>} props.products - Un array de objetos de producto a mostrar.
 * @param {function} [props.onDeleteProduct] - Función de callback para eliminar un producto (pasada a ProductCard).
 * @param {boolean} [props.isAdminView=false] - Indica si la lista se renderiza en modo administrador.
 */
const ProductList = ({ products, onDeleteProduct, isAdminView }) => {
  // Mensaje si no hay productos
  if (!products || products.length === 0) {
    return (
      <div className="product-list__empty-message">
        <p>No hay productos disponibles en este momento.</p>
        {isAdminView && <p>Puedes registrar nuevos productos usando el formulario de administración.</p>}
      </div>
    );
  }

  return (
    <div className="product-list">
      {/* Mapea cada objeto de producto a un componente ProductCard */}
      {products.map((product) => (
        <ProductCard
          key={product.id} // 'key' es esencial para listas en React, ayuda a identificar elementos únicos
          product={product}
          onDelete={onDeleteProduct} // Pasa la función de eliminación al ProductCard
          isAdminView={isAdminView}
        />
      ))}
    </div>
  );
};

export default ProductList;