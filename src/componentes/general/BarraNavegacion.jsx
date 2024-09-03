import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './BarraNavegacion.css';

const BarraNavegacion = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleScrollToFooter = () => {
    const footer = document.getElementById('piePagina');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
    setDropdownVisible(false);
  };

  return (
    <>
      <nav className="barra-navegacion">
        <button className="dropdown-button" onClick={toggleDropdown}>
          &#9776;
        </button>
        {dropdownVisible && (
          <ul className="dropdown-menu">
            <li className="dropdown-item">
              <Link to="/" onClick={() => setDropdownVisible(false)} className="nav-button">Inicio</Link>
            </li>
            <li className="dropdown-item">
              <Link to="/quien-somos" onClick={() => setDropdownVisible(false)} className="nav-button">Quienes Somos</Link>
            </li>
            <li className="dropdown-item nav-button" onClick={handleScrollToFooter}>Contacto</li>
            <li className="dropdown-item">
              <Link to="/registrarse" onClick={() => setDropdownVisible(false)} className="nav-button">Registrarse</Link>
            </li>
          </ul>
        )}
        <Link to="/verificar-membresia" className="verificar-membresia-button">Verificar Membresía</Link>
      </nav>
    </>
  );
};

export default BarraNavegacion;
