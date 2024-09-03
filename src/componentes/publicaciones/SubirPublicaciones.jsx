import React, { useState } from 'react';
import axios from 'axios';
import './SubirPublicaciones.css';

const SubirPublicaciones = ({ onUpload }) => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.size <= 10 * 1024 * 1024) { // 10MB limit
      setFile(selectedFile);
      setError('');
    } else {
      setError('Por favor, selecciona un archivo de menos de 10MB.');
      setFile(null);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      setError('Por favor, selecciona un archivo.');
      return;
    }
    setLoading(true);
    setError('');
    setSuccessMessage('');

    try {
      const formData = new FormData();
      formData.append('image', file);

      // Subir el archivo a ImgBB
      const imgbbResponse = await axios.post('https://api.imgbb.com/1/upload', formData, {
        params: {
          key: 'f091b6b7a3cba447977741c12c3bc1cd' // Tu clave de API de ImgBB
        },
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (!imgbbResponse.data || !imgbbResponse.data.data || !imgbbResponse.data.data.url) {
        throw new Error('La respuesta de ImgBB no contiene la URL de la imagen');
      }

      const fileUrl = imgbbResponse.data.data.url;

      // Crear la publicación en tu API
      const publicacionData = {
        name: file.name,
        Publicacion: fileUrl
      };

      const apiResponse = await axios.post('https://66d691b3006bfbe2e64dc3f2.mockapi.io/publicaciones/gymPublicaciones', publicacionData);

      // Verificar si onUpload es una función antes de llamarla
      if (typeof onUpload === 'function') {
        onUpload(apiResponse.data);
      } else {
        console.log('Publicación creada:', apiResponse.data);
      }

      setSuccessMessage('Archivo subido con éxito.');
      setFile(null);
    } catch (error) {
      console.error('Error al subir el archivo:', error);
      if (error.response) {
        console.error('Respuesta del servidor:', error.response.data);
        if (error.response.status === 400) {
          setError('Error 400: Solicitud incorrecta. Verifica el formato y tamaño del archivo.');
        } else {
          setError(`Error del servidor: ${error.response.status} - ${error.response.data.error || 'Desconocido'}`);
        }
      } else if (error.request) {
        setError('No se recibió respuesta del servidor. Verifica tu conexión a internet.');
      } else {
        setError(`Error: ${error.message}`);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="subir-publicaciones">
      <input
        type="file"
        accept="image/*,video/*"
        onChange={handleFileChange}
      />
      <button onClick={handleUpload} disabled={loading || !file}>
        {loading ? 'Subiendo...' : 'Subir'}
      </button>
      {loading && <p>Cargando... Por favor, espera.</p>}
      {error && <p className="error-message">{error}</p>}
      {successMessage && <p className="success-message">{successMessage}</p>}
      {file && <p>Archivo seleccionado: {file.name}</p>}
    </div>
  );
};

export default SubirPublicaciones;