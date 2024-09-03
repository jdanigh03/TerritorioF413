import React from 'react';
import './Ofertas.css';

const Ofertas = () => {
  const ofertas = [
    {
      titulo: 'Mensualidad',
      precio: 'Bs. 220',
      descripcion: 'Aprovecha nuestra suscripción mensual a solo Bs. 220 y disfruta de acceso a nuestras instalaciones. Es la opción perfecta para mantener tu rutina de entrenamiento sin interrupciones',
    },
    {
      titulo: 'Trimestral',
      precio: 'Bs. 550',
      descripcion: 'Si prefieres comprometerte a largo plazo y ahorrar, nuestra opción trimestral es ideal para ti. Con solo Bs. 550, asegura tres meses completos de entrenamiento sin preocuparte por los pagos mensuales.',
    },
    {
      titulo: 'Quincenal',
      precio: 'Bs. 140',
      descripcion: '¿Prefieres un compromiso más corto? Nuestra opción quincenal te ofrece 15 días de acceso a las instalaciones del gimnasio por solo Bs. 140. ¡Perfecto para quienes buscan flexibilidad!',
    },
    {
      titulo: '3 veces por semana',
      precio: 'Bs. 170',
      descripcion: 'Si no puedes asistir todos los días, no te preocupes. Por Bs. 170, esta oferta te permite entrenar tres veces por semana, adaptándose a tu estilo de vida sin comprometer tu progreso.',
    },
    {
      titulo: 'Sesión',
      precio: 'Bs. 20',
      descripcion: '¿Solo necesitas una sesión? Disfruta de una entrada única al gimnasio por solo Bs. 20. ¡Accede a todas nuestras instalaciones en una sola visita!',
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
