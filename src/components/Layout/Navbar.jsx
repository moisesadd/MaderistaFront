import React from 'react';
import { NavLink } from 'react-router-dom';//para contolar la navegacion
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <NavLink to="/">Hecho en Madera</NavLink>
      </div>
      <ul className="navbar__links">
        <li>
          {/* active muestra visualmente en qué página estás.*/}
          <NavLink to="/productos" className={({ isActive }) => (isActive ? 'active' : '')}>Productos</NavLink>
        </li>
        <li>
          <NavLink to="/cotizacion" className={({ isActive }) => (isActive ? 'active' : '')}>Solicitar Cotización</NavLink>
        </li>
        <li>
          <NavLink to="/contacto" className={({ isActive }) => (isActive ? 'active' : '')}>Contacto</NavLink>
        </li>
        <li>
          <NavLink to="/admin" className={({ isActive }) => (isActive ? 'active' : '')}>Admin</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;