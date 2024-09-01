import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Inscribirse.css';

const Inscribirse = () => {
  // Estados para los valores de los inputs
  const [nombreUsuario, setNombreUsuario] = useState('');
  const [ci, setCI] = useState('');
  const [edad, setEdad] = useState('');
  const [genero, setGenero] = useState('');
  const [telefono, setTelefono] = useState('');
  const [correo, setCorreo] = useState('');
  const [experiencia, setExperiencia] = useState('');
  const [condicionMedica, setCondicionMedica] = useState('');
  const [detallesLesiones, setDetallesLesiones] = useState('');

  const [errores, setErrores] = useState({});
  const [inscripciones, setInscripciones] = useState([]);

  // Leer datos desde el backend
  useEffect(() => {
    const fetchInscripciones = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/usuarios');
        setInscripciones(response.data);
      } catch (error) {
        console.error('Error al obtener inscripciones:', error);
      }
    };

    fetchInscripciones();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let newErrores = {};

    if (inscripciones.some((inscripcion) => inscripcion.Correo === correo)) {
      newErrores.Correo = 'Este correo ya está registrado.';
    }

    if (Object.keys(newErrores).length > 0) {
      setErrores(newErrores);
      return;
    }

    try {
      await axios.post('http://localhost:5000/api/usuarios', {
        NombreUsuario: nombreUsuario,
        CI: ci,
        Edad: edad,
        Genero: genero,
        Telefono: telefono,
        Correo: correo,
        Experiencia: experiencia,
        CondicionMedica: condicionMedica,
        detallesLesiones: detallesLesiones
      });

      alert('Inscripción exitosa!');
      setInscripciones([...inscripciones, {
        NombreUsuario: nombreUsuario,
        CI: ci,
        Edad: edad,
        Genero: genero,
        Telefono: telefono,
        Correo: correo,
        Experiencia: experiencia,
        CondicionMedica: condicionMedica,
        detallesLesiones: detallesLesiones
      }]);
      
      // Limpiar los campos del formulario
      setNombreUsuario('');
      setCI('');
      setEdad('');
      setGenero('');
      setTelefono('');
      setCorreo('');
      setExperiencia('');
      setCondicionMedica('');
      setDetallesLesiones('');
      setErrores({});
    } catch (error) {
      console.error('Error al inscribirse:', error);
      alert('Error al inscribirse, por favor intente nuevamente.');
    }
  };

  const handleDelete = async (ci) => {
    try {
      await axios.delete(`http://localhost:5000/api/usuarios/${ci}`);
      setInscripciones(inscripciones.filter((inscripcion) => inscripcion.CI !== ci));
      alert('Usuario eliminado exitosamente!');
    } catch (error) {
      console.error('Error al eliminar el usuario:', error);
      alert('Error al eliminar el usuario, por favor intente nuevamente.');
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
          placeholder='Carnet de identidad'
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
        {errores.Correo && <div className="error-message">{errores.Correo}</div>}
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
      <h2>Lista de Inscripciones</h2>
      <ul>
        {inscripciones.map((inscripcion) => (
          <li key={inscripcion.CI}>
            {inscripcion.NombreUsuario} - {inscripcion.CI}
            <button onClick={() => handleDelete(inscripcion.CI)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Inscribirse;
