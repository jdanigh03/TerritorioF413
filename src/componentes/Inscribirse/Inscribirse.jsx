import React, { useState } from 'react';
import { db } from '../../firebaseConfig'; 
import { collection, addDoc } from 'firebase/firestore';
import './Inscribirse.css';

const Inscribirse = () => {
  const [formData, setFormData] = useState({
    NombreUsuario: '',
    Edad: '',
    Genero: '',
    Telefono: '',
    Correo: '',
    Experiencia: '',
    CondicionMedica: '',
    detallesLesiones: ''
  });

  const [errores, setErrores] = useState({});
  const [inscripciones, setInscripciones] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let newErrores = {};

    if (inscripciones.some((inscripcion) => inscripcion.Correo === formData.Correo)) {
      newErrores.Correo = 'Este correo ya está registrado.';
    }

    if (Object.keys(newErrores).length > 0) {
      setErrores(newErrores);
      return;
    }

    try {
      // Subir los datos a Firebase
      await addDoc(collection(db, 'RegistroUsuarios'), formData);
      alert('Inscripción exitosa!');
      setInscripciones([...inscripciones, formData]);
      setFormData({
        NombreUsuario: '',
        Edad: '',
        Genero: '',
        Telefono: '',
        Correo: '',
        Experiencia: '',
        CondicionMedica: '',
        detallesLesiones: ''
      });
      setErrores({});
    } catch (error) {
      console.error('Error al añadir documento: ', error);
      alert('Error al inscribirse, por favor intente nuevamente.');
    }
  };

  return (
    <div className="inscribirse-container">
      <h2 className="inscribirse-title">Registrarse</h2>
      <form className="inscribirse-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="NombreUsuario"
          placeholder="Nombre completo"
          value={formData.NombreUsuario}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="Edad"
          placeholder="Edad"
          value={formData.Edad}
          onChange={handleChange}
          required
        />
        <select
          name="Genero"
          value={formData.Genero}
          onChange={handleChange}
          required
        >
          <option value="">Género</option>
          <option value="Masculino">Masculino</option>
          <option value="Femenino">Femenino</option>
        </select>
        <input
          type="tel"
          name="Telefono"
          placeholder="Número de teléfono"
          value={formData.Telefono}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="Correo"
          placeholder="Correo electrónico"
          value={formData.Correo}
          onChange={handleChange}
          required
        />
        {errores.Correo && <div className="error-message">{errores.Correo}</div>}
        <select
          name="Experiencia"
          value={formData.Experiencia}
          onChange={handleChange}
          required
        >
          <option value="">¿Experiencia previa en gimnasios?</option>
          <option value="Sí">Sí</option>
          <option value="No">No</option>
        </select>
        <select
          name="CondicionMedica"
          value={formData.CondicionMedica}
          onChange={handleChange}
          required
        >
          <option value="">¿Lesiones o condiciones médicas relevantes?</option>
          <option value="Sí">Sí</option>
          <option value="No">No</option>
        </select>
        {formData.CondicionMedica === 'Sí' && (
          <textarea
            name="detallesLesiones"
            placeholder="Cuales"
            value={formData.detallesLesiones}
            onChange={handleChange}
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
