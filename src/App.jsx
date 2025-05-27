import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Layout/Navbar'; 
import ProductsPage from './pages/ProductsPage';
import QuotePage from './pages/QuotePage';
import ContactPage from './pages/ContactPage';
import AdminProductsPage from './pages/AdminProductsPage'; 


/**
 * @description Componente principal de la aplicación.
 * Configura el enrutamiento y la estructura general de la aplicación.
 */
function App() {
  return (
    <Router> {/* BrowserRouter habilita la navegación basada en la URL */}
      <Navbar /> {/* El Navbar se muestra en todas las páginas, ya que está fuera de 'Routes' */}
      <main className="main-content"> {/* Contenedor para el contenido de cada página */}
        <Routes> {/* Define las diferentes rutas de la aplicación */}
          <Route path="/" element={<ProductsPage />} /> {/* Ruta principal (Home) */}
          <Route path="/productos" element={<ProductsPage />} /> {/* Ruta para la lista de productos */}
          <Route path="/cotizacion" element={<QuotePage />} /> {/* Ruta para solicitar cotización */}
          <Route path="/contacto" element={<ContactPage />} /> {/* Ruta para el formulario de contacto */}
          <Route path="/admin" element={<AdminProductsPage />} /> {/* Ruta para la página de administración */}
          
          {/*  Ruta para manejar páginas no encontradas (404) */}
          <Route path="*" element={<div className="page-error-message"><h2>404 - Página no encontrada</h2><p>Lo sentimos, la página que buscas no existe.</p></div>} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;