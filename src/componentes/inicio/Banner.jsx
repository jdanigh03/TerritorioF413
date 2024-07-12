import React from 'react';
import './Banner.css';
import backgroundImage from '../../assets/enfocados_en_usted.jpg';  

const Banner = () => {
  return (
    <div className="banner-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="banner-overlay">
        <div className="banner-content">
          <button className="contact-button">HABLA CON NOSOTROS</button>
          <h1 className="banner-title">
            ¡ESTAMOS  <br />ENFOCADOS <br /> EN <span className="highlight">USTED!</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;
