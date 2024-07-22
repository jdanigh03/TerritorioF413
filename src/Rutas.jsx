import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Inicio from './componentes/inicio/Inicio';
import Registrarse from './componentes/Inscribirse/Registrarse';
import QuienSomos from './componentes/QuienesSomos/QuienSomos';

const Rutas = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Inicio} />
        <Route path="/registrarse" component={Registrarse} />
        <Route path="/quien-somos" component={QuienSomos} />
      </Switch>
    </Router>
  );
}

export default Rutas;
