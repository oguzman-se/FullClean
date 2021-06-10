// Clientes.js
import React, { useEffect } from "react";
import Layout from "../components/home/Layout";
import { usePedidos } from "../context/pedidos-context";
import { useHome } from "../context/home-context";
import clienteAxios from "../config/clienteAxios";
import { useToasts } from "react-toast-notifications";
import { useHistory } from "react-router-dom";
function Alertas() {
    const { alertas, setAlertas } = usePedidos();
    const { products, barcodeRef } = useHome();
    const { addToast } = useToasts();

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

    const eliminar = async (a) => {
        await clienteAxios
            .delete(`/alertas/${a.id}`)
            .then((res) => {
                console.log(res.data);
                const getAlerts = async () => {
                    await clienteAxios
                        .get("/alertas")
                        .then((r) => {
                            setAlertas(r.data);
                            addToast("Alerta eliminada", {
                                appearance: "success",
                                autoDismiss: true,
                            });
                        })
                        .catch((r) => {
                            console.log("error get", r);
                        });
                };
                getAlerts();
            })
            .catch((err) => {
                console.log("error delete", err);
            });
    };
    return (
        <Layout>
            <div className="container-fluid">
                <label className="titulo">Lista de Alertas</label>
                <div className="tabla90 ">
                    <table className="table">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Producto</th>
                                <th scope="col">Fecha y Hora</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {alertas.map((a) => (
                                <tr>
                                    <td>{a.id}</td>
                                    {products.map((p) => {
                                        if (a.tipo === "stock") {
                                            if (p.id === a.producto_id) {
                                                return (
                                                    <td>
                                                        El producto{" "}
                                                        <label className="titulo45">
                                                            {p.nombre}
                                                        </label>{" "}
                                                        se esta quedando sin
                                                        stock
                                                    </td>
                                                );
                                            }
                                        } else {
                                            if (p.id === a.producto_id) {
                                                return (
                                                    <td>
                                                        El producto {p.nombre}{" "}
                                                        se le cambio el precio
                                                    </td>
                                                );
                                            }
                                        }
                                    })}
                                    <td>{a.fechayhora}</td>
                                    <button
                                        className="iconos"
                                        onClick={() => eliminar(a)}
                                    >
                                        <i class="bi bi-trash-fill"></i>
                                    </button>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </Layout>
    );
}

export default Alertas;
