import React from "react";
import Copyrigth from "./Copyrigth";
import Email from "./Email";
import RedesSociales from "./RedesSociales";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="contenedor-pie-pagina">
      <div className="pie-texto">
        <Copyrigth />
        <Email />
      </div>
      <div className="redes-sociales">
        <RedesSociales />
      </div>
    </footer>
  );
};

export default Footer;
