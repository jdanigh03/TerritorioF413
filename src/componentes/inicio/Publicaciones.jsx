import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Publicaciones.css';

const API_URL = 'https://66d691b3006bfbe2e64dc3f2.mockapi.io/publicaciones/gymPublicaciones';

const Publicaciones = () => {
  const [publicaciones, setPublicaciones] = useState([]);

  useEffect(() => {
    const fetchPublicaciones = async () => {
      try {
        const response = await axios.get(API_URL);
        // Ordenar las publicaciones por ID en orden descendente y obtener las últimas 3
        const ultimasPublicaciones = response.data.sort((a, b) => b.id - a.id).slice(0, 3);
        setPublicaciones(ultimasPublicaciones);
      } catch (error) {
        console.error('Error al obtener las publicaciones:', error);
      }
    };

    fetchPublicaciones();
  }, []);

  return (
    <div>
      <div className="cards">
        {publicaciones.map((pub) => (
          <div key={pub.id} className="card">
            <img src={pub.Publicacion} alt={`Publicación ${pub.id}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Publicaciones;
