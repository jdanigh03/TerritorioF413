import React, { useState, useEffect } from 'react';
import { getFirestore, collection, query, orderBy, limit, getDocs } from 'firebase/firestore';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';
import './Publicaciones.css';

const Publicaciones = () => {
  const [publicaciones, setPublicaciones] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPublicaciones();
  }, []);

  const fetchPublicaciones = async () => {
    setLoading(true);
    setError(null);

    try {
      console.log('Iniciando fetchPublicaciones');
      const firestore = getFirestore();
      const publicacionesRef = collection(firestore, 'publicaciones');
      const q = query(publicacionesRef, orderBy('createdAt', 'desc'), limit(3));
      const snapshot = await getDocs(q);
      
      if (snapshot.empty) {
        console.log('No se encontraron publicaciones');
        setPublicaciones([]);
        return;
      }

      const publicacionesData = snapshot.docs.map(doc => doc.data());
      const urlPromises = publicacionesData.map(async (publicacion) => {
        try {
          const url = await getDownloadURL(ref(getStorage(), `imagenes/${publicacion.name}`));
          return { ...publicacion, url };
        } catch (error) {
          console.error('Error obteniendo URL para', publicacion.name, error);
          return null;
        }
      });

      const publicacionesConUrl = (await Promise.all(urlPromises)).filter(Boolean);
      setPublicaciones(publicacionesConUrl);
      console.log('Publicaciones establecidas:', publicacionesConUrl);
    } catch (error) {
      console.error('Error obteniendo publicaciones:', error);
      setError(`Error al obtener las publicaciones: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Publicaciones</h2>
      {loading && <p>Cargando...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div className="publicaciones">
        {publicaciones.map((publicacion, index) => (
          <div key={index} className="publicacion">
            {publicacion.type === 'mp4' ? (
              <video 
                src={publicacion.url} 
                controls 
                style={{ width: '100%', height: 'auto' }}
              >
                Tu navegador no soporta el elemento de video.
              </video>
            ) : (
              <img 
                src={publicacion.url} 
                alt={`Publicación ${index + 1}`} 
                style={{ width: '100%', height: 'auto' }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Publicaciones;