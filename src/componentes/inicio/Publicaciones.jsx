import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Publicaciones.css';

const Publicaciones = () => {
  const [publicaciones, setPublicaciones] = useState([]);

  useEffect(() => {
    fetchPublicaciones();
  }, []);

  const fetchPublicaciones = async () => {
    try {
      const response = await axios.get('https://668ef8f5bf9912d4c9304864.mockapi.io/Publicaciones');
      setPublicaciones(response.data.slice(-3).reverse()); // Obtener las últimas 3 publicaciones
    } catch (error) {
      console.error('Error fetching publicaciones:', error);
    }
  };

  return (
    <div>
      <h2>Publicaciones</h2>
      <div className="publicaciones">
        {publicaciones.map((publicacion, index) => (
          <div key={index} className="publicacion">
            <img 
              src={publicacion.Publicacion} 
              alt="Publicacion" 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Publicaciones;
