import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Importa Link
import './VerificarMembresia.css'; // Importa el archivo CSS

const VerificarMembresia = () => {
  const [nombre, setNombre] = useState('');
  const [ci, setCi] = useState('');
  const [verificacionCorrecta, setVerificacionCorrecta] = useState(null);

  const handleVerificar = () => {
    // Lógica para verificar membresía
    const estaEnRango = Math.random() > 0.5; // Simulación de verificación
    setVerificacionCorrecta(estaEnRango);
    console.log('Verificar Membresía:', { nombre, ci, enRango: estaEnRango });
  };

  return (
    <div className="verificar-membresia-container">
      <h2>Verificar Membresía</h2>
      <form>
        <div className="form-group">
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="ci">CI:</label>
          <input
            type="text"
            id="ci"
            value={ci}
            onChange={(e) => setCi(e.target.value)}
          />
        </div>
        <div className="button-container">
          <button
            type="button"
            onClick={handleVerificar}
            className={`btn btn-verificar ${verificacionCorrecta === true ? 'verificado' : verificacionCorrecta === false ? 'no-verificado' : ''}`}
          >
            {verificacionCorrecta === true && <span className="checkmark">&#10003;</span>}
            {verificacionCorrecta === false && <span className="checkmark">&#10007;</span>}
            Verificar
          </button>
          <Link
            to="/definir-membresia"
            className="btn btn-definir"
          >
            Definir
          </Link>
        </div>
      </form>
    </div>
  );
};

export default VerificarMembresia;
