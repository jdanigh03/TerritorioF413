import React, { useState } from 'react';
import './BarraNavegacion.css';

const BarraNavegacion = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <nav className="barra-navegacion">
      <button className="dropdown-button" onClick={toggleDropdown}>
        Menú
      </button>
      {dropdownVisible && (
        <ul className="dropdown-menu">
          <li className="dropdown-item">Inicio</li>
          <li className="dropdown-item">Quienes Somos</li>
          <li className="dropdown-item">Contacto</li>
          <li className="dropdown-item">Inscribirse</li>
        </ul>
      )}
    </nav>
  );
};

export default BarraNavegacion;
