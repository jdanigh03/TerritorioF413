import React from 'react';
import './Banner.css';
import backgroundImage from '../../assets/react.svg';  // Cambia esto por la ruta correcta a tu imagen de fondo

const Banner = () => {
  return (
    <div className="banner-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="banner-content">
        <button className="contact-button">HABLA CON NOSOTROS</button>
        <h1 className="banner-title">
          ¡ESTAMOS ENFOCADOS <br /> EN <span className="highlight">USTED!</span>
        </h1>
      </div>
    </div>
  );
};

export default Banner;
