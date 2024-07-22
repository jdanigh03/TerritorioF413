import React from 'react';
import './Ofertas.css';

const Ofertas = () => {
  const ofertas = [
    {
      titulo: 'Oferta 1',
      precio: 'Bs. 220',
      descripcion: 'Descripción de la oferta 1',
    },
    {
      titulo: 'Oferta 2',
      precio: 'Bs 170',
      descripcion: 'Descripción de la oferta 2',
    },
    // Añade más ofertas según sea necesario
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
