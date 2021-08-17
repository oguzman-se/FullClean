import React, { useEffect, useState } from "react";
import { Modal, ModalFooter } from "react-bootstrap";
import { useToasts } from "react-toast-notifications";
import clienteAxios from "../../config/clienteAxios";

function ModalPedidoDetalle({
    showDetalle,
    setShowDetalle,
    currentPedido,
    calculateDay,
}) {
    const { addToast } = useToasts();
    const handleClose = () => setShowDetalle(false);
    const [detail, setDetail] = useState([]);

    const getInfo = async () => {
        await clienteAxios
            .get(`/pedidodetalles/pedido/${currentPedido.id}`)
            .then((res) => setDetail(res.data))
            .catch((err) => console.log("viene un error", err));
    };

    useEffect(() => {
        if (currentPedido.id !== undefined) {
            getInfo();
        }
    }, [currentPedido]);

    return (
        <>
            <Modal
                show={showDetalle}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title id="modal-tittle">
                        Detalle del pedido
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <p style={{ display: "inline-block" }}>
                            Estado:
                            <strong> {currentPedido.estado}</strong>
                        </p>
                        <p style={{ display: "inline-block", float: "right" }}>
                            Valor total:
                            <strong> ${currentPedido.valor_total}</strong>
                        </p>
                    </div>
                    <div>
                        Detalle del pedido:
                        <div
                            style={{
                                marginLeft: 25,
                                marginRight: 25,
                                marginTop: 10,
                            }}
                        >
                            <ol>
                                {detail?.length > 0
                                    ? detail.map((de) => {
                                          return (
                                              <li>
                                                  {`${
                                                      de.nombre
                                                          ? de.nombre
                                                          : de.producto_id
                                                  } (x${de.cantidad}) ($${
                                                      de.precio
                                                  } c/u) = $${
                                                      de.precio * de.cantidad
                                                  }`}
                                              </li>
                                          );
                                      })
                                    : ""}
                            </ol>
                        </div>
                    </div>
                </Modal.Body>
                <ModalFooter>
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

export default ModalPedidoDetalle;
