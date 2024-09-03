import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import gymLogo from '../../assets/gym-logo-sin-fondo.png';
import './Cabecera.css';

const Cabecera = () => {
  const navigate = useNavigate(); 

  const handleLogoClick = () => {
    navigate('/subir-pantalla'); 
  };

  return (
    <header className='contenedor-cabecera'>
      <div className="logo-gym" onClick={handleLogoClick}> 
        <img src={gymLogo} alt="Gym Logo" className="logo-image" />
      </div>
    </header>
  );
}

export default Cabecera;
