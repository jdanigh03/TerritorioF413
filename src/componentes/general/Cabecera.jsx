import React from 'react'
import gymLogo from '../../assets/gym-logo-sin-fondo.png';
import './Cabecera.css';

const Cabecera = () => {
  return (
            <header className='contenedor-cabecera'>
                <div className="logo-gym">
                        <img src={gymLogo} alt="Gym Logo" className="logo-image" />
                </div>
            </header>
  )
}

export default Cabecera