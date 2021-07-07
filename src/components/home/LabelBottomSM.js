import React, { useState } from "react";
import Button from "../home/Button";
import clienteAxios from "../../config/clienteAxios";
import { useHome } from "../../context/home-context";
import { usePedidos } from "../../context/pedidos-context";
import { useToasts } from "react-toast-notifications";
import ModalConfirmarPedido from "./modals/ModalConfirmarPedido";

import ModalRecibo from "./modals/ModalRecibo";
import ModalRemito from "./modals/ModalRemito";

function LabelBottomSM() {
    const {
        labelCliente,
        totalPrice,
        cartItems,
        setPendiente,
        setShowNuevoCliente,
        currentMetodo,
        setCurrentMetodo,
        obtenerDatos,
        vaciarCompra,
    } = useHome();
    const {
        pedidos,
        setPedidos,
        currentPedido,
        setCurrentPedido,
        ventaCredito,
        showRemito,
        setShowRemito,
        showTicket,
        setShowTicket,
    } = usePedidos();
    const [showModalConfirmar, setShowModalConfirmar] = useState(false);
    const { addToast } = useToasts();
    const getPedido = async () => {
        await clienteAxios
            .get("/pedidos")
            .then((r) => {
                setPedidos(r.data);
                console.log("confirmar", pedidos);
            })
            .catch((r) => {
                console.log("error get", r);
            });
    };
    if (currentMetodo.metodo === "cuenta corriente" && !labelCliente.nombre) {
        setShowNuevoCliente(true);
    }
    const handleEstado = async (estado) => {
        try {
            let data = {
                cliente_id: labelCliente.id,
                estado: estado,
                valor_total: totalPrice,
                notas: "",
                tipo_pedido: ventaCredito || "venta",
                metodo_pago: currentMetodo.metodo || "efectivo",
                metodo_envio: "",
            };
            let detallePedido = [];
            cartItems.forEach((c) => {
                detallePedido.push({
                    producto_id: c.id,
                    precio: c.precio,
                    cantidad: c.qty,
                });
            });
            let dataArray = [data, ...detallePedido];
            console.log("dataArray", dataArray);
            if (data.estado === "confirmado") {
                //setEnable(true);
                vaciarCompra();
                setCurrentPedido({});
                setShowModalConfirmar(false);
                addToast("Pedido confirmado", {
                    appearance: "success",
                    autoDismiss: true,
                });
            } else {
                vaciarCompra();
                addToast("Pedido pendiente", {
                    appearance: "success",
                    autoDismiss: true,
                });
                setPendiente(true);
            }
            await clienteAxios.post("/pedidos/array", dataArray);
            setPedidos(dataArray);
            getPedido();
            obtenerDatos();
        } catch (error) {
            console.log(error);
            console.log("pedidos", pedidos);
        }
    };
    function handle(e) {
        let newMetodo = { ...currentMetodo };
        newMetodo[e.target.name] = e.target.value;
        console.log(newMetodo);
        setCurrentMetodo(newMetodo);
    }
    return (
        <div className="container group-vh-5">
            <div className="row ">
                <div className="col-md-6">
                    <label className="labelsm">Metodo de Pago:</label>
                </div>
                <div className="col-3 ajuste">
                    {cartItems.length > 0 &&
                    currentPedido.estado !== "confirmado" ? (
                        <Button
                            onClick={() => {
                                setShowModalConfirmar(true);
                            }}
                        >
                            Confirmar
                        </Button>
                    ) : (
                        <Button disabled>Confirmar</Button>
                    )}
                </div>
                <div className="col-3 ajuste">
                    {/*
                    SI DESCOMENTAMOS ESTO Y BORRAMOS EL BOTON DE ABAJO, VUELVE A ESTAR CON LA MODALIDAD ANTERIOR DE CONFIRMAR ANTES DE IMPRIMIR
                    {enable === false ||
                    currentPedido.estado === "pendiente" ? (
                        <button
                            type="button"
                            className="btn btn-custom"
                            disabled
                        >
                            Recibo
                        </button>
                    ) : (
                        <button
                            type="button"
                            className="btn btn-custom"
                            onClick={() => setShowRemito(true)}
                        >
                            Recibo
                        </button>
                    )}
                        */}
                    <button
                        type="button"
                        className="btn btn-custom"
                        onClick={() => setShowRemito(true)}
                    >
                        Recibo
                    </button>
                </div>
            </div>
            <div className="row ">
                <div className="col-md-6">
                    <select
                        value={currentMetodo.metodo}
                        defaultValue="efectivo"
                        className="select labelsm"
                        onChange={(e) => handle(e)}
                        name="metodo"
                    >
                        <option value="efectivo">Efectivo</option>
                        <option value="tarjeta credito">
                            Tarjeta de credito
                        </option>
                        <option value="tarjeta debito">
                            Tarjeta de Debito
                        </option>
                        <option value="cuenta corriente">
                            Cuenta Corriente
                        </option>
                    </select>
                </div>
                <div className="col-3 ajuste">
                    {
                        //currentPedido.estado !== "pendiente" &&
                        cartItems.length > 0 ? (
                            <Button
                                onClick={() => {
                                    handleEstado("pendiente");
                                }}
                            >
                                Pendiente
                            </Button>
                        ) : (
                            <Button disabled>Pendiente</Button>
                        )
                    }
                </div>
                <div className="col-3 ajuste">
                    {/*
                    SI DESCOMENTAMOS ESTO Y BORRAMOS EL BOTON DE ABAJO, VUELVE A ESTAR CON LA MODALIDAD ANTERIOR DE CONFIRMAR ANTES DE IMPRIMIR
                    {enable === false ||
                    currentPedido.estado === "pendiente" ? (
                        <button
                            type="button"
                            className="btn btn-custom"
                            disabled
                        >
                            Remito
                        </button>
                    ) : (
                        <button
                            type="button"
                            className="btn btn-custom"
                            onClick={() => setShowTicket(true)}
                        >
                            Remito
                        </button>
                    )}
                    */}
                    <button
                        type="button"
                        className="btn btn-custom"
                        onClick={() => setShowTicket(true)}
                    >
                        Remito
                    </button>
                </div>
            </div>
            <ModalConfirmarPedido
                handleEstado={handleEstado}
                showModalConfirmar={showModalConfirmar}
                setShowModalConfirmar={setShowModalConfirmar}
            />
            <ModalRecibo
                type="home"
                showRemito={showRemito}
                setShowRemito={setShowRemito}
            />
            <ModalRemito
                type="home"
                showRemito={showTicket}
                setShowRemito={setShowTicket}
            />
        </div>
    );
}

export default LabelBottomSM;
