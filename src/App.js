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
import { HomeProvider } from './context/home-context';
import { ClientesProvider } from './context/clientes-context'

function App() {
  return (
      <Router>
      
          <HomeProvider>
          
              <Route exact path="/" component={Home} />
              <Route exact path="/pedidos" component={Pedidos} />
              <Route exact path="/clientes" component={Clientes} />
              <Route exact path="/facturas" component={Facturas} />
          
          </HomeProvider>
        
      </Router>
    
  );
}

export default App;