import React, { useState } from 'react';
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import './VerificarMembresia.css';

const VerificarMembresia = () => {
  const [nombre, setNombre] = useState('');
  const [ci, setCi] = useState('');
  const [verificacionCorrecta, setVerificacionCorrecta] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [mensajeModal, setMensajeModal] = useState('');

  const handleVerificar = async () => {
    const db = getFirestore();
    const q = query(collection(db, 'Membresias'), where('ClienteCI', '==', ci));
    const querySnapshot = await getDocs(q);

    let estaEnRango = false;
    const fechaActual = new Date();

    querySnapshot.forEach((doc) => {
      const data = doc.data();
      const fechaInicio = data.FechaInicio.toDate(); 
      const fechaFin = data.FechaFin.toDate(); 

      if (fechaInicio <= fechaActual && fechaFin >= fechaActual) {
        estaEnRango = true;
      }
    });

    setVerificacionCorrecta(estaEnRango);
    setMensajeModal(estaEnRango ? 'Su membresía está vigente.' : 'Su membresía no está vigente.');
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
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
          <Link to="/definir-membresia" className="btn btn-definir">
            Definir Membresía
          </Link>
        </div>
      </form>

      {modalVisible && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Resultado de Verificación</h3>
            <p>{mensajeModal}</p>
            <button onClick={closeModal}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VerificarMembresia;