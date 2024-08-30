import React from 'react';
import './Ofertas.css';

const Ofertas = () => {
  const ofertas = [
    {
      titulo: 'Mensualidad',
      precio: 'Bs. 220',
      descripcion: 'El costo de la suscripción al gimnasio es de Bs. 220y disfruta de todos los servicios que tenemos.',
    },
    {
      titulo: 'Trimestral',
      precio: 'Bs. 550',
      descripcion: 'Si no te gusta estar pagando mes a mes tenemos esta oferta trimestral que podria venir bien para ti.',
    },
    {
      titulo: 'Quincenal',
      precio: 'Bs. 140',
      descripcion: 'Esta oferta es para 15 días en el gimnasio.',
    },
    {
      titulo: '3 veces por semana',
      precio: 'Bs. 170',
      descripcion: 'Si no puedes venir todos los días con esta oferta te permite venir 3 veces por semana.',
    },
    {
      titulo: 'Sesión',
      precio: 'Bs. 20',
      descripcion: 'El costo de sesión es lo que ves.',
    },
  ];

  return (
    <div className="contenedor-principal">
      <h2 className="titulo-ofertas">Ofertas</h2>
      <div className="contenedor-ofertas">
        {ofertas.map((oferta, index) => (
          <div key={index} className="card-oferta">
            <div className="oferta-detalle">
              <h3 className="oferta-titulo">{oferta.titulo}</h3>
              <p className="oferta-precio">{oferta.precio}</p>
              <p className="oferta-descripcion">{oferta.descripcion}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ofertas;
