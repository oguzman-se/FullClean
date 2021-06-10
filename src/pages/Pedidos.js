// Pedidos.js
import React, { useEffect } from "react";
import Layout from "../components/home/Layout";
import LeftSidePedidos from "../components/pedidos/bigComponents/LeftSidePedidos";
import RightSidePedidos from "../components/pedidos/bigComponents/RightSidePedidos";
import { useHome } from "../context/home-context";
import { useHistory } from "react-router-dom";

function Pedidos() {
    const { barcodeRef } = useHome();
    let history = useHistory();

    const handleKeyDown = (e) => {
        if (e.keyCode === 27) {
            history.push("/");
            //es el 'Escape'
            barcodeRef.current.focus();
        }
    };

    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    return (
        <Layout>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6">
                        <LeftSidePedidos />
                    </div>
                    <div className="col-md-6">
                        <RightSidePedidos />
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Pedidos;
