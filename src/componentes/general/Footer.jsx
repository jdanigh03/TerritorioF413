import React from "react";
import { FaInstagram, FaWhatsapp, FaMapMarkerAlt, FaTiktok } from "react-icons/fa"; 
import "./Footer.css";
import logo from "../../assets/gym-logo-sin-fondo.png";

const Footer = () => {
  return (
    <footer id="piePagina" className="contenedor-pie-pagina">
      <div className="pie-logo">
        <img src={logo} alt="Territorio F4:13" />
        <p>¡Cuidando de tu cuerpo, espíritu y alma!</p>
      </div>
      <div className="pie-redes">
        <h3>SÍGUENOS EN NUESTRAS REDES SOCIALES</h3>
        <ul className="redes-sociales">
          <li>
            <a href="https://www.tiktok.com/@territorio.f413gym" target="_blank" rel="noopener noreferrer"> 
              <FaTiktok className="social-icon" /> 
            </a>
            @territoriof413
          </li>
          <li>
            <a href="https://www.instagram.com/territorio.f413gym/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="social-icon" />
            </a>
            @territoriof413
          </li>
          <li>
            <a href="https://wa.me/+59175208563" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="social-icon" />
            </a>
            @territoriof413
          </li>
        </ul>
      </div>
      <div className="pie-ubicacion">
        <FaMapMarkerAlt className="ubicacion-icon" />
        <p>CALACOTO, Calle 23 al lado de la tienda Party City</p>
      </div>
    </footer>
  );
};

export default Footer;
