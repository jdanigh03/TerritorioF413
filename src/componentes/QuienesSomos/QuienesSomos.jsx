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
          <h2 id="territorio-title">Territorio F4:13</h2>
          <p>
            Territorio F4:13 es un espacio que nace del amor y la pasión por el
            deporte y la salud. Desde su apertura en junio de 2022 en la ciudad
            de La Paz, Bolivia, de la mano de su visionaria fundadora, Pamela
            Borda Quevedo, este centro fitness se ha destacado por su enfoque
            disruptivo con respecto a otros gimnasios tradicionales, ofreciendo
            un espacio para todos los tipos de edades, cuerpos y objetivos
            personales.
          </p>
        </div>
      </div>
      <div className="info-sections">
        <div className="info-section">
          <img
            src={Mision}
            alt="Misión Territorio F4:13"
            className="info-image"
          />
          <div className="info-text">
            <h3>Misión</h3>
            <p>
              Nuestra misión en Territorio F4:13 es proporcionar un gimnasio
              accesible y acogedor para todos. Nos dedicamos a ofrecer un
              entorno donde cada miembro pueda asumir el control de su bienestar
              físico y mental, trabajando en su salud y estética de manera
              personalizada y sin barreras. Nuestro objetivo es que cada
              persona, sin importar su nivel de condición física, se sienta
              bienvenida y apoyada en su camino hacia una vida más saludable y
              equilibrada.
            </p>
          </div>
        </div>
        <div className="info-section">
          <img
            src={Vision}
            alt="Visión Territorio F4:13"
            className="info-image"
          />
          <div className="info-text">
            <h3>Visión</h3>
            <p>
              En Territorio F4:13, aspiramos a ser el gimnasio más innovador y
              distintivo de La Paz. Nuestra visión es destacar por ofrecer un
              enfoque integral del fitness, que no solo se centre en el
              entrenamiento físico, sino que también fomente el desarrollo
              personal y el bienestar general de nuestros miembros. Queremos ser
              reconocidos por nuestra capacidad para inspirar y apoyar a cada
              persona en su viaje hacia una vida más activa, saludable y plena.
            </p>
          </div>
        </div>
        <div className="info-section">
          <img
            src={Cultura}
            alt="Cultura Territorio F4:13"
            className="info-image"
          />
          <div className="info-text">
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
    </div>
  );
};

export default QuienesSomos;
