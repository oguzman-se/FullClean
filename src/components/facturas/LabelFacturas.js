import React, { useState, useEffect } from "react";
import { usePedidos } from "../../context/pedidos-context";
import { useHome } from "../../context/home-context";
import ModalAsociarFactura from "./modales/ModalAsociarFactura";
import { useToasts } from "react-toast-notifications";
import TableFacturaId from "./TableFacturaId";
import clienteAxios from "../../config/clienteAxios";

function LabelFacturas() {
    const { addToast } = useToasts();
    const [showAsociar, setShowAsociar] = useState(false);
    const {
        currentFactura,
        setCurrentFactura,
        valorTotal,
        facturasId,
        obtenerFacturas,
    } = usePedidos();

    const { Allclientes } = useHome();

    const handleFacturado = async () => {
        await clienteAxios
            .put(`/facturas/${currentFactura.id}`, { estado: "facturado" })
            .then(() => {
                obtenerFacturas();
                setCurrentFactura({});
                addToast(`Factura ${currentFactura.id}: FACTURADO`, {
                    autoDismiss: true,
                    appearance: "success",
                });
            })
            .catch((err) => console.log("error pasando a facturado", err));
    };

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
                            onClick={handleFacturado}
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

                <label className="col-md-7 label-border">
                    Importe: ${currentFactura.valor_total}
                </label>
                <button
                    className="col-md-4 btn btn-facturas"
                    onClick={() => setShowAsociar(true)}
                >
                    Asociar Pedido
                </button>
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
        </div>
    );
}

export default LabelFacturas;
