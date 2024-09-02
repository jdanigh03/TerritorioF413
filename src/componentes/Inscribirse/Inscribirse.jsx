import React, { useState } from 'react';
import { db } from '../../firebaseConfig.js'; 
import { collection, addDoc } from 'firebase/firestore';
import './Inscribirse.css';

const Inscribirse = () => {
  const [nombreUsuario, setNombreUsuario] = useState('');
  const [ci, setCI] = useState('');
  const [edad, setEdad] = useState('');
  const [genero, setGenero] = useState('');
  const [telefono, setTelefono] = useState('');
  const [correo, setCorreo] = useState('');
  const [experiencia, setExperiencia] = useState('');
  const [condicionMedica, setCondicionMedica] = useState('');
  const [detallesLesiones, setDetallesLesiones] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'Clientes'), {
        nombreUsuario,
        ci,
        edad,
        genero,
        telefono,
        correo,
        experiencia,
        condicionMedica,
        detallesLesiones: condicionMedica === 'Sí' ? detallesLesiones : '',
      });
      alert('Datos guardados correctamente');
      setNombreUsuario('');
      setCI('');
      setEdad('');
      setGenero('');
      setTelefono('');
      setCorreo('');
      setExperiencia('');
      setCondicionMedica('');
      setDetallesLesiones('');
    } catch (error) {
      console.error('Error al guardar los datos: ', error);
      alert('Hubo un error al guardar los datos');
    }
  };

  return (
    <div className="inscribirse-container">
      <h2 className="inscribirse-title">Registrarse</h2>
      <form className="inscribirse-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre completo"
          value={nombreUsuario}
          onChange={(e) => setNombreUsuario(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Carnet de identidad"
          value={ci}
          onChange={(e) => setCI(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Edad"
          value={edad}
          onChange={(e) => setEdad(e.target.value)}
          required
        />
        <select
          value={genero}
          onChange={(e) => setGenero(e.target.value)}
          required
        >
          <option value="">Género</option>
          <option value="Masculino">Masculino</option>
          <option value="Femenino">Femenino</option>
        </select>
        <input
          type="tel"
          placeholder="Número de teléfono"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Correo electrónico"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
          required
        />
        <select
          value={experiencia}
          onChange={(e) => setExperiencia(e.target.value)}
          required
        >
          <option value="">¿Experiencia previa en gimnasios?</option>
          <option value="Sí">Sí</option>
          <option value="No">No</option>
        </select>
        <select
          value={condicionMedica}
          onChange={(e) => setCondicionMedica(e.target.value)}
          required
        >
          <option value="">¿Lesiones o condiciones médicas relevantes?</option>
          <option value="Sí">Sí</option>
          <option value="No">No</option>
        </select>
        {condicionMedica === 'Sí' && (
          <textarea
            placeholder="Cuales"
            value={detallesLesiones}
            onChange={(e) => setDetallesLesiones(e.target.value)}
            className="condiciones-medicas visible"
            required
          />
        )}
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Inscribirse;