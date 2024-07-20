import React from "react";
import "./QuienesSomos.css";
import backgroundImage from "../../assets/enfocados_en_usted.jpg";
import Mision from "../../assets/Mision.jpeg";
import Vision from "../../assets/Vision.jpeg";
import Cultura from "../../assets/Cultura.jpeg";
const QuienesSomos = () => {
  return (
    <div className="quienes-somos-container">
      <div className="section">
        <img
          src={backgroundImage}
          alt="Contexto Territorio F4:13"
          className="section-image"
        />
        <div className="section-text">
          <h2>Territorio F4:13</h2>
          <p>
            Territorio F4:13 es espacio que nace del amor y la pasión por el
            deporte y la salud. Desde su apertura en Junio del 2022 en la ciudad
            de La Paz, Bolivia, de la mano de su visionaria fundadora, Pamela
            Borda Quevedo, este centro fitness se ha destacado por su enfoque
            disruptivo con respecto otros gimnasios tradicionales, ofreciendo un
            espacio para todos los tipos de edades, cuerpos y objetivos
            personales.
          </p>
        </div>
      </div>
      <div className="section">
        <img
          src={Mision}
          alt="Misión Territorio F4:13"
          className="section-image"
        />
        <div className="section-text">
          <h3>Misión</h3>
          <p>
            “Ofrecer un espacio donde cada persona pueda retomar el control de
            su vida y trabajar en su salud y estética sin sentirse excluida."
          </p>
        </div>
      </div>
      <div className="section">
        <img
          src={Vision}
          alt="Visión Territorio F4:13"
          className="section-image"
        />
        <div className="section-text">
          <h3>Visión</h3>
          <p>
            “Ser un gimnasio diferenciado en el mercado paceño, que promueve el
            crecimiento personal de forma integral.”
          </p>
        </div>
      </div>
      <div className="section">
        <img
          src={Cultura}
          alt="Cultura Territorio F4:13"
          className="section-image"
        />
        <div className="section-text">
          <h3>Cultura</h3>
          <ul>
            <li>Compromiso</li>
            <li>Respeto</li>
            <li>Empatía</li>
            <li>Valentía</li>
            <li>Saludable</li>
            <li>Atención Personalizada</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default QuienesSomos;
