import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from './componentes/inicio/Inicio';
import Registrarse from './componentes/Inscribirse/Registrarse';
import QuienSomos from './componentes/QuienesSomos/QuienSomos';
import DefinirPantalla from './componentes/Membresia/DefinirPantalla';
import VerificarPantalla from './componentes/Membresia/VerificarPantalla';
import SubirPantalla from './componentes/publicaciones/SubirPantalla';

const Rutas = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/registrarse" element={<Registrarse />} />
        <Route path="/quien-somos" element={<QuienSomos />} />
        <Route path="/definir-membresia" element={<DefinirPantalla/>}/>
        <Route path="/verificar-membresia" element={<VerificarPantalla/>}/>
        <Route path="/subir-pantalla" element={<SubirPantalla/>}/>
      </Routes>
    </Router>
  );
};

export default Rutas;
