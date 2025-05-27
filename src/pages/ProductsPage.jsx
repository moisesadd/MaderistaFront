import React, { useState, useEffect } from 'react';
import ProductList from '../components/Product/ProductList';
import './Pages.css';

/**
 esta pagina es una simulacion, ya que aun no se va a conectar con un back
 */
const ProductsPage = () => {
  const [products, setProducts] = useState([]); //  lista de productos
  const [isLoading, setIsLoading] = useState(true); //indica si estan cargados
  const [error, setError] = useState(null); 

  // useEffect se ejecuta una vez al montar el componente
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true); // Indica que la carga ha comenzado
        setError(null); // Indica cualquier error previo

        // en esta parte ban las llamadas a la api
        const dummyProducts = [
          { id: 'p1', name: 'Mesa de Centro ', description: 'Mesa de madera maciza, estilo rústico, ideal para cualquier sala.', price: 500000, image: 'https://http2.mlstatic.com/D_NQ_NP_883919-MLC31879554128_082019-O.jpg' },

          { id: 'p2', name: 'Silla Ergonómica Roble', description: 'Silla de roble.', price: 200000, image: 'https://th.bing.com/th/id/OIP.xumu88xyxcGv3aiVSi2g9wHaHa?w=199&h=199&c=7&r=0&o=5&dpr=1.3&pid=1.7' },

          { id: 'p3', name: 'Armario Moderno 3 Puertas', description: 'Amplio armario con acabado brillante y gran capacidad de almacenamiento.', price: 1200000, image: 'https://www.bing.com/th/id/OIP._1NbMeOKaMB-8UHl0M4wlwHaHa?w=150&h=150&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2' },

          { id: 'p4', name: 'Escritorio con Cajones', description: 'Escritorio funcional con múltiples cajones para una mejor organización.', price: 1400000, image: 'https://th.bing.com/th?q=Escritorio+De+Una+Computadora&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=es-XL&cc=CO&setlang=es&adlt=moderate&t=1&mw=247' },

        
        ];
        
        await new Promise(resolve => setTimeout(resolve, 800));
        setProducts(dummyProducts); 
      } catch (err) {
        setError('Error al cargar los productos. Por favor, inténtalo de nuevo más tarde.');
        console.error("Error al cargar productos:", err);
      } finally {
        setIsLoading(false); 
      }
    };

    fetchProducts();
  }, []); 

  
  if (isLoading) {
    return <div className="page-loading-message">Cargando productos...</div>;
  }

  if (error) {
    return <div className="page-error-message">{error}</div>;
  }

  return (
    <section className="page-section">
      <h2 className="page-heading">Nuestros Productos</h2>
      <p className="page-subheading">Descubre la calidad y el diseño en cada pieza de nuestra carpintería.</p>
      <ProductList products={products} />
    </section>
  );
};

export default ProductsPage;