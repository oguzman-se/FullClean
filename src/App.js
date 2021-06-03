import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./pages/Home";
import Pedidos from "./pages/Pedidos";
import Clientes from "./pages/Clientes";
import Facturas from "./pages/Facturas";
import Alertas from "./pages/Alertas";
import { HomeProvider } from "./context/home-context";
import { PedidosProvider } from "./context/pedidos-context";
import { ToastProvider } from "react-toast-notifications";

function App() {
    return (
        <Router>
            <ToastProvider
                autoDismiss
                autoDismissTimeout={3000}
                placement="bottom-right"
            >
                <PedidosProvider>
                    <HomeProvider>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/pedidos" component={Pedidos} />
                        <Route exact path="/clientes" component={Clientes} />
                        <Route exact path="/facturas" component={Facturas} />
                        <Route exact path="/alertas" component={Alertas} />
                    </HomeProvider>
                </PedidosProvider>
            </ToastProvider>
        </Router>
    );
}

export default App;
