// Clientes.js
import React, { useEffect } from "react";
import Layout from "../components/home/Layout";
import LeftSideClientes from "../components/clientes/bigComponents/LeftSideClientes";
import RightSideClientes from "../components/clientes/bigComponents/RightSideClientes";
import { useHome } from "../context/home-context";
import { useHistory } from "react-router-dom";

function Clientes() {
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
                        <LeftSideClientes />
                    </div>
                    <div className="col-md-6">
                        <RightSideClientes />
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Clientes;
