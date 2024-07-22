import React from "react";
import { FaFacebook, FaInstagram, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";
import "./Footer.css";
import logo from "../../assets/gym-logo-sin-fondo.png";

const Footer = () => {
  return (
    <footer className="contenedor-pie-pagina">
      <div className="pie-logo">
        <img src={logo} alt="Territorio F4:13" />
        <p>¡Cuidando de tu cuerpo, espíritu y alma!</p>
      </div>
      <div className="pie-redes">
        <h3>SÍGUENOS EN NUESTRAS REDES SOCIALES</h3>
        <ul className="redes-sociales">
          <li>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="social-icon" />
            </a>
            @territoriof413
          </li>
          <li>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="social-icon" />
            </a>
            @territoriof413
          </li>
          <li>
            <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">
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
