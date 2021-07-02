import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useHome } from "../../context/home-context";
import ModalCrearFactura from "./ModalCrearFactura";
import ModalDetalleCliente from "./ModalDetalleCliente";
import ModalEliminarCliente from "./ModalEliminarCliente";

function TopClientes() {
    const {
        labelCliente,
        setLabelCliente,
        obtenerFacturasXcliente,
        obtPedidoXcliente,
        facturasXcliente,
        setPedidosOrFactura,
        arrGenerateFact,
        setArrGenerateFact,
        deudaXCliente,
    } = useHome();
    const [showDetalleCliente, setShowDetalleCliente] = useState(false);
    const [showElimCliente, setShowElimCliente] = useState(false);
    const [showCrearFactura, setShowCrearFactura] = useState(false);

    return (
        <div className="container-fluid">
            <div className="row">
                {!labelCliente?.nombre ? (
                    <label className="col-md-12 label-border">
                        Cliente: Consumidor Final
                    </label>
                ) : (
                    <label className="col-md-12 label-border">
                        Cliente: {labelCliente.nombre}
                        <p
                            style={{
                                fontSize: 13,
                                float: "right",
                                marginTop: 10,
                                marginBottom: 0,
                            }}
                        >
                            Deuda:{" "}
                            <span className="rojo" style={{ fontSize: 18 }}>
                                ${deudaXCliente}
                            </span>
                        </p>
                    </label>
                )}

                <label className="col-md-12 label-border-none">
                    Domicilio: {labelCliente.domicilio}
                </label>
                <div>
                    <button
                        className="btn btn-custom-clientes-chicos"
                        onClick={() => setShowDetalleCliente(true)}
                    >
                        Perfil
                    </button>
                    <button
                        className="btn btn-custom-clientes-chicos"
                        onClick={() => {
                            setPedidosOrFactura(true);
                            obtPedidoXcliente();
                        }}
                    >
                        Pedidos
                    </button>
                    <button
                        className="btn btn-custom-clientes-chicos"
                        onClick={() => {
                            setArrGenerateFact([]);
                            setPedidosOrFactura(false);
                            obtenerFacturasXcliente(labelCliente.id);
                        }}
                    >
                        Facturas
                    </button>
                    {/*<button className="btn btn-custom-clientes-chicos">
                        Nuevo Pago
                    </button>*/}
                    <Link className="btn btn-custom-clientes-chicos" to="/">
                        Nuevo Pedido
                    </Link>
                    <button
                        className="btn btn-custom-clientes-chicos"
                        disabled={arrGenerateFact.length === 0}
                        onClick={() => setShowCrearFactura(true)}
                    >
                        Crear Factura
                    </button>
                </div>
                {/*<div>
                    <label className="label-deuda">Deuda: </label>
                    <label className="label-deuda rojo">${deuda}</label>
                </div>*/}
            </div>

            <ModalEliminarCliente
                show={showElimCliente}
                setShow={setShowElimCliente}
                setShowDetalle={setShowDetalleCliente}
                labelCliente={labelCliente}
            />

            <ModalDetalleCliente
                showDetalleCliente={showDetalleCliente}
                setShowDetalleCliente={setShowDetalleCliente}
                labelCliente={labelCliente}
                setLabelCliente={setLabelCliente}
                setShowElimCliente={setShowElimCliente}
            />

            <ModalCrearFactura
                show={showCrearFactura}
                setShow={setShowCrearFactura}
            />
        </div>
    );
}

export default TopClientes;
