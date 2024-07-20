import React, { useState } from 'react';
import './Inscribirse.css';

const Inscribirse = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    edad: '',
    genero: '',
    telefono: '',
    correo: '',
    experiencia: '',
    lesiones: '',
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

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrores = {};

    if (inscripciones.some((inscripcion) => inscripcion.correo === formData.correo)) {
      newErrores.correo = 'Este correo ya está registrado.';
    }

    if (Object.keys(newErrores).length > 0) {
      setErrores(newErrores);
      return;
    }

    setInscripciones([...inscripciones, formData]);
    setFormData({
      nombre: '',
      edad: '',
      genero: '',
      telefono: '',
      correo: '',
      experiencia: '',
      lesiones: '',
      detallesLesiones: ''
    });
    setErrores({});
  };

  return (
    <div className="inscribirse-container">
      <h2 className="inscribirse-title">Inscribirse</h2>
      <form className="inscribirse-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre completo"
          value={formData.nombre}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="edad"
          placeholder="Edad"
          value={formData.edad}
          onChange={handleChange}
          required
        />
        <select
          name="genero"
          value={formData.genero}
          onChange={handleChange}
          required
        >
          <option value="">Género</option>
          <option value="masculino">Masculino</option>
          <option value="femenino">Femenino</option>
        </select>
        <input
          type="tel"
          name="telefono"
          placeholder="Número de teléfono"
          value={formData.telefono}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="correo"
          placeholder="Correo electrónico"
          value={formData.correo}
          onChange={handleChange}
          required
        />
        {errores.correo && <div className="error-message">{errores.correo}</div>}
        <select
          name="experiencia"
          value={formData.experiencia}
          onChange={handleChange}
          required
        >
          <option value="">¿Experiencia previa en gimnasios?</option>
          <option value="si">Sí</option>
          <option value="no">No</option>
        </select>
        <select
          name="lesiones"
          value={formData.lesiones}
          onChange={handleChange}
          required
        >
          <option value="">¿Lesiones o condiciones médicas relevantes?</option>
          <option value="si">Sí</option>
          <option value="no">No</option>
        </select>
        {formData.lesiones === 'si' && (
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
