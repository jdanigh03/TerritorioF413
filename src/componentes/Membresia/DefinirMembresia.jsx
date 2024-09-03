import React, { useState } from 'react';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import './DefinirMembresia.css';

const DefinirMembresia = () => {
  const [ci, setCI] = useState('');
  const [inicioMembresia, setInicioMembresia] = useState('');
  const [finMembresia, setFinMembresia] = useState('');
  const [tipoMembresia, setTipoMembresia] = useState('');
  const [otroTipo, setOtroTipo] = useState('');
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState('');

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    const correctPassword = 'LoreCesarFitness413';
    if (password === correctPassword) {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Contraseña incorrecta.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const nuevaMembresia = {
      ClienteCI: ci,
      FechaInicio: new Date(inicioMembresia),
      FechaFin: new Date(finMembresia),
      TipoMembresia: tipoMembresia === 'Otro' ? otroTipo : tipoMembresia,
    };

    try {
      const db = getFirestore();
      const docRef = await addDoc(collection(db, 'Membresias'), nuevaMembresia);
      console.log('Membresía registrada con ID:', docRef.id);
    } catch (error) {
      console.error('Error al agregar la membresía:', error);
    }

    setCI('');
    setInicioMembresia('');
    setFinMembresia('');
    setTipoMembresia('');
    setOtroTipo('');
  };

  return (
    <div className="definir-membresia-container">
      {!isAuthenticated ? (
        <div className="password-container">
          <h2>Ingrese la Contraseña</h2>
          <form onSubmit={handlePasswordSubmit}>
            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">Enviar</button>
            {error && <p className="error-message">{error}</p>}
          </form>
        </div>
      ) : (
        <div>
          <h2>Definir Membresía</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="number"
              placeholder="Carnet de Identidad"
              value={ci}
              onChange={(e) => setCI(e.target.value)}
              required
            />
            <input
              type="date"
              placeholder="Inicio de Membresía"
              value={inicioMembresia}
              onChange={(e) => setInicioMembresia(e.target.value)}
              required
            />
            <input
              type="date"
              placeholder="Fin de Membresía"
              value={finMembresia}
              onChange={(e) => setFinMembresia(e.target.value)}
              required
            />
            <select
              value={tipoMembresia}
              onChange={(e) => setTipoMembresia(e.target.value)}
              required
            >
              <option value="">Tipo de Membresía</option>
              <option value="Mensual">Mensual</option>
              <option value="Trimestral">Trimestral</option>
              <option value="Quincenal">Quincenal</option>
              <option value="Otro">Otro</option>
            </select>
            {tipoMembresia === 'Otro' && (
              <input
                type="text"
                placeholder="Especificar tipo de membresía"
                value={otroTipo}
                onChange={(e) => setOtroTipo(e.target.value)}
                required
              />
            )}
            <button type="submit">Definir Membresía</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default DefinirMembresia;
