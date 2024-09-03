import React, { useState } from 'react';
import { storage } from '../../firebaseConfig'; 
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import './SubirPublicaciones.css';

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

    const fileType = selectedFile.type;
    if (!fileType.startsWith('image/') && !fileType.startsWith('video/')) {
      alert('Solo se permiten imágenes y videos');
      return;
    }

    const storageRef = ref(storage, `imagenes/${selectedFile.name}`);

    setLoading(true);
    setError(null);
    setSuccessMessage(null);

    try {
      // Subir archivo
      await uploadBytes(storageRef, selectedFile);

      // Obtener la URL de descarga
      const url = await getDownloadURL(storageRef);
      console.log('Archivo subido con éxito:', url);

      // Guardar la URL en Firestore
      await addDoc(collection(db, 'publicaciones'), {
        url,
        timestamp: new Date(),
      });

      setLoading(false);
      setSuccessMessage('Archivo subido con éxito');
    } catch (error) {
      console.error("Error al subir el archivo:", error);
      setLoading(false);
      setError('Error al subir el archivo');
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
