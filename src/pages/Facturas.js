// Facturas.js
import React, { useEffect } from "react";
import Layout from "../components/home/Layout";
import LeftSideFacturas from "../components/facturas/bigComponents/LeftSideFacturas";
import RightSideFacturas from "../components/facturas/bigComponents/RightSideFacturas";
import { useHome } from "../context/home-context";
import { useHistory } from "react-router-dom";

function Facturas() {
    const { barcodeRef } = useHome();
    let history = useHistory();

    const handleKeyDown = (e) => {
        //console.log("A key was pressed", e.keyCode, e.key);
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
                        <LeftSideFacturas />
                    </div>
                    <div className="col-md-6">
                        <RightSideFacturas />
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Facturas;
