import React, { useState, useEffect } from "react";
import { usePedidos } from "../../context/pedidos-context";
import { useHome } from "../../context/home-context";
import ModalAsociarFactura from "./modales/ModalAsociarFactura";
import TableFacturaId from "./TableFacturaId";
import ModalFacturado from "./modales/ModalFacturado";

function LabelFacturas() {
    const [showAsociar, setShowAsociar] = useState(false);
    const [showFacturado, setShowFacturado] = useState(false);
    const { currentFactura, facturasId } = usePedidos();

    const { Allclientes } = useHome();

    return (
        <div className="container-fluid">
            <div className="row">
                {currentFactura.estado === null ||
                currentFactura.estado === "pendiente" ? (
                    <>
                        <label className="col-md-7 label-border">
                            Factura: {currentFactura.id}
                        </label>
                        <button
                            className="col-md-4 btn btn-facturas"
                            onClick={() => setShowFacturado(true)}
                        >
                            Pasar a: Facturado
                        </button>
                    </>
                ) : (
                    <label className="col-md-12 label-border">
                        Factura: {currentFactura.id}
                    </label>
                )}
                <label className="col-md-12 label-border">
                    Cliente:{" "}
                    {Allclientes.map((c) => {
                        if (c.id === currentFactura.cliente_id) {
                            return c.nombre;
                        }
                    })}
                </label>
                <label className="col-md-12 label-border">
                    N° de Factura:{" "}
                    {currentFactura.num_factura !== null
                        ? currentFactura.num_factura
                        : ""}
                </label>
                <label className="col-md-12 label-border">
                    Importe: ${currentFactura.valor_total}
                </label>

                {/*
                <label className="col-md-7 label-border">
                    Importe: ${currentFactura.valor_total}
                </label>
                <button
                    className="col-md-4 btn btn-facturas"
                    onClick={() => setShowAsociar(true)}
                >
                    Asociar Pedido
                </button>
            */}
            </div>

            <div className="row">
                <label className="col-md-12 label-facturas">
                    Listado de Pedidos Asociados a la Factura
                </label>

                <TableFacturaId
                    facturasId={facturasId}
                    Allclientes={Allclientes}
                />
            </div>
            <ModalAsociarFactura
                showAsociar={showAsociar}
                setShowAsociar={setShowAsociar}
                Allclientes={Allclientes}
            />
            <ModalFacturado
                showFacturado={showFacturado}
                setShowFacturado={setShowFacturado}
            />
        </div>
    );
}

export default LabelFacturas;
