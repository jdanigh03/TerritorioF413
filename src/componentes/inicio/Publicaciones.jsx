import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Publicaciones = () => {
  const [publicaciones, setPublicaciones] = useState([]);
  const [file, setFile] = useState(null);

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

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) return;
    
    const formData = new FormData();
    formData.append('file', file);

    try {
      // Simulamos el upload de la imagen obteniendo su URL local
      const imageUrl = URL.createObjectURL(file);

      const response = await axios.post('https://668ef8f5bf9912d4c9304864.mockapi.io/Publicaciones', {
        url: imageUrl // Suponiendo que la API guarda la URL del archivo
      });
      setFile(null);
      fetchPublicaciones();
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <div>
      <h2>Publicaciones</h2>
      <div className="publicaciones" style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
        {publicaciones.map((publicacion, index) => (
          <div key={index} style={{ padding: '10px' }}>
            <img src={publicacion.url} alt="Publicacion" style={{ width: '300px', height: 'auto', borderRadius: '10px' }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Publicaciones;
