import React, { useState } from 'react';
import axios from 'axios';

const SubirPublicaciones = () => {
  const [selectedFile, setSelectedFile] = useState(null);

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

    try {
      const response = await axios.post('/Publicaciones', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Imagen subida con éxito:', response.data);
      // Aquí puedes actualizar la lista de publicaciones o hacer otra acción
    } catch (error) {
      console.error('Error al subir la imagen:', error);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Subir</button>
    </div>
  );
};

export default SubirPublicaciones;
