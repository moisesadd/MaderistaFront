import React, { useState, useEffect } from 'react';
import ProductList from '../components/Product/ProductList';
import ProductForm from '../components/Product/ProductForm';
import Button from '../components/UI/Button';
import './Pages.css'; 
import './AdminProductsPage.css'; 

/**
 * @description Página de administración para gestionar productos (registrar y eliminar).
 * Simula la persistencia de datos usando `localStorage` del navegador .
 */
const AdminProductsPage = () => {
  // Estado para almacenar la lista de productos.
  // Inicializa los productos cargándolos desde localStorage o con datos dummy si no hay nada.
  const [products, setProducts] = useState(() => {
    try {
      const savedProducts = localStorage.getItem('carpinteria_products');
      return savedProducts ? JSON.parse(savedProducts) : [
        { id: 'p1', name: 'Mesa de Centro Rústica', description: 'Mesa de madera maciza, estilo rústico.', price: 250000, image: 'https://via.placeholder.com/300x200?text=Mesa+Rustica' },
        { id: 'p2', name: 'Silla Ergonómica Roble', description: 'Silla de roble con diseño ergonómico.', price: 180000, image: 'https://via.placeholder.com/300x200?text=Silla+Roble' },
      ];
    } catch (error) {
      console.error("Error al cargar productos de localStorage:", error);
      return []; // Retorna un array vacío en caso de error de parseo
    }
  });

  const [showProductForm, setShowProductForm] = useState(false); // Estado para controlar la visibilidad del formulario
  const [productToEdit, setProductToEdit] = useState(null); // Estado para el producto que se está editando

  // useEffect para guardar los productos en localStorage cada vez que cambian.
  useEffect(() => {
    localStorage.setItem('carpinteria_products', JSON.stringify(products));
  }, [products]); // Se ejecuta cada vez que el estado 'products' cambia

  /**
   * Maneja el registro de un nuevo producto.
   * @param {object} newProductData - Datos del nuevo producto (nombre, descripción, precio, imagen).
   */
  const handleAddProduct = (newProductData) => {
    // Genera un ID único simple para el nuevo producto (en producción, esto lo haría el backend).
    const newProduct = {
      ...newProductData,
      id: `p${Date.now()}-${Math.random().toString(36).substr(2, 5)}`, // ID único basado en timestamp y random
    };
    setProducts((prevProducts) => [...prevProducts, newProduct]); // Añade el nuevo producto al estado
    setShowProductForm(false); // Oculta el formulario después de añadir
    alert('Producto registrado con éxito!');
  };

  /**
   * Maneja la eliminación de un producto por su ID.
   * @param {string} productId - ID del producto a eliminar.
   */
  const handleDeleteProduct = (productId) => {
    if (window.confirm('¿Estás seguro de que quieres eliminar este producto? Esta acción es irreversible.')) {
      setProducts((prevProducts) => prevProducts.filter((p) => p.id !== productId)); // Filtra el producto a eliminar
      alert('Producto eliminado con éxito.');
    }
  };

  /**
   * Inicia el modo de edición para un producto.
   * @param {object} product - El objeto del producto a editar.
   */
  const handleEditProduct = (product) => {
    setProductToEdit(product);
    setShowProductForm(true); // Asegura que el formulario esté visible
  };

  /**
   * Maneja la actualización de un producto existente.
   * @param {object} updatedProductData - Datos actualizados del producto, incluyendo su ID.
   */
  const handleUpdateProduct = (updatedProductData) => {
    setProducts((prevProducts) =>
      prevProducts.map((p) => (p.id === updatedProductData.id ? updatedProductData : p))
    );
    setProductToEdit(null); // Limpia el producto en edición
    setShowProductForm(false); // Oculta el formulario
    alert('Producto actualizado con éxito!');
  };

  return (
    <section className="page-section">
      <h2 className="page-heading">Administración de Productos</h2>
      <p className="page-subheading">Gestiona el catálogo de productos: registra nuevos y elimina obsoletos.</p>

      <div className="admin-actions">
        {/* Botón para alternar la visibilidad del formulario de registro/edición */}
        <Button onClick={() => {
          setShowProductForm(!showProductForm);
          setProductToEdit(null); // Asegura que no estemos en modo edición al abrir para nuevo producto
        }}>
          {showProductForm ? 'Ocultar Formulario' : 'Registrar Nuevo Producto'}
        </Button>
      </div>

      {showProductForm && (
        <div className="product-form-container">
          {/* El formulario de producto se renderiza aquí */}
          <ProductForm
            onAddProduct={handleAddProduct}
            productToEdit={productToEdit} // Pasa el producto a editar (o null)
            onUpdateProduct={handleUpdateProduct}
          />
        </div>
      )}

      <h3>Catálogo de Productos Actual</h3>
      {/* ProductList se renderiza en modo administrador, mostrando el botón de eliminar */}
      <ProductList
        products={products}
        onDeleteProduct={handleDeleteProduct}
        isAdminView={true} // Indica que es la vista de administrador
      />
    </section>
  );
};

export default AdminProductsPage;