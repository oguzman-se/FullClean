import React, { useState } from "react";
import { Modal, ModalFooter } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import clienteAxios from "../../config/clienteAxios";
import { useHome } from "../../context/home-context";
import { useToasts } from "react-toast-notifications";

function ModalPago({ showPago, setShowPago, factura }) {
    const { addToast } = useToasts();
    let { obtenerFacturasXcliente } = useHome();
    const handleClose = () => setShowPago(false);

    const [pago, setPago] = useState(0);
    let [tot, setTot] = useState(0);

    const pagar = async () => {
        //console.log("fact a pagar?", pago, " y tott", tot);
        await clienteAxios
            .post("pagos", {
                cliente_id: factura.cliente_id,
                factura_id: factura.id,
                pago: pago,
            })
            .then(() => {
                clienteAxios
                    .put(`facturas/${factura.id}`, { valor_cubierto: tot })
                    .then(() => {
                        obtenerFacturasXcliente();
                        setShowPago(false);
                        addToast("Pago realizado", {
                            appearance: "success",
                            autoDismiss: true,
                        });
                    })
                    .catch(() => {
                        addToast("Error generando el pago", {
                            appearance: "error",
                            autoDismiss: true,
                        });
                    });
            })
            .catch(() => {
                addToast("Error generando el pago", {
                    appearance: "error",
                    autoDismiss: true,
                });
            });
    };

    return (
        <>
            <Modal
                show={showPago}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title id="modal-tittle">Pagar factura</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <input
                            className="col-md-12 form-control modal-search"
                            type="number"
                            placeholder="Monto a abonar"
                            onChange={(e) => {
                                if (e.target.value > 0) {
                                    setPago(e.target.value);
                                    setTot(
                                        factura.valor_cubierto +
                                            parseFloat(e.target.value)
                                    );
                                }
                            }}
                        />
                        <p style={{ display: "inline-block" }}>
                            Valor total:<strong> ${factura.valor_total}</strong>
                        </p>
                        <p style={{ display: "inline-block", float: "right" }}>
                            Valor cubierto:
                            <strong> ${factura.valor_cubierto}</strong>
                        </p>
                        <p>
                            Estado de la factura:{" "}
                            {factura.valor_total > tot ? "A SALDAR" : "PAGADA"}
                        </p>
                        {/*<p>
                            El saldo a pagar:{" "}
                            {tot === 0
                                ? factura.valor_total - factura.valor_cubierto
                                : factura.valor_total - tot}
                        </p>*/}
                    </div>
                </Modal.Body>
                <ModalFooter>
                    <button className="modal-button-create" onClick={pagar}>
                        Pagar
                    </button>
                    <button
                        className="modal-button-cancel"
                        onClick={handleClose}
                    >
                        Cerrar
                    </button>
                </ModalFooter>
            </Modal>
        </>
    );
}

export default ModalPago;
