import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from './componentes/inicio/Inicio';
import Registrarse from './componentes/Inscribirse/Registrarse';
import QuienSomos from './componentes/QuienesSomos/QuienSomos';

const Rutas = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/registrarse" element={<Registrarse />} />
        <Route path="/quien-somos" element={<QuienSomos />} />
      </Routes>
    </Router>
  );
};

export default Rutas;
