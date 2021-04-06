import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

import Home from './pages/Home'
import Pedidos from './pages/Pedidos'
import Clientes from './pages/Clientes'
import Facturas from './pages/Facturas'
import Menu from './pages/Menu'

function App() {
  return (
    
      <Router>
            <Menu/>
            <Route exact path="/" component={Home} />
            <Route exact path="/pedidos" component={Pedidos} />
            <Route exact path="/clientes" component={Clientes} />
            <Route exact path="/facturas" component={Facturas} />
      </Router>
    
  );
}

export default App;