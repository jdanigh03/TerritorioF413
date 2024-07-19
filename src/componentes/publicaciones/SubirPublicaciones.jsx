import React, { useState } from 'react';
import axios from 'axios';

const SubirPublicaciones = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert("Por favor, selecciona un archivo primero");
      return;
    }

    const formData = new FormData();
    formData.append('imagen', selectedFile);

    setLoading(true);
    setError(null);
    setSuccessMessage(null);

    try {
      const response = await axios.post('https://cors-anywhere.herokuapp.com/https://668ef8f5bf9912d4c9304864.mockapi.io/Publicaciones', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setLoading(false);
      setSuccessMessage('Imagen subida con éxito');
      console.log('Imagen subida con éxito:', response.data);
      // Aquí puedes actualizar la lista de publicaciones o hacer otra acción
    } catch (error) {
      setLoading(false);
      setError('Error al subir la imagen');
      console.error('Error al subir la imagen:', error);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload} disabled={loading}>Subir</button>
      {loading && <p>Cargando...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
    </div>
  );
};

export default SubirPublicaciones;
