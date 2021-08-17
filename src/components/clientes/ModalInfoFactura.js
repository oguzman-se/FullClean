import React, { useEffect, useState } from "react";
import { Modal, ModalFooter } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import clienteAxios from "../../config/clienteAxios";

const ModalInfoFactura = ({ show, setShow, currentFact, calculateDay }) => {
    const handleClose = () => setShow(false);

    const [factura, setFactura] = useState({});

    const getFactDetalle = async () => {
        await clienteAxios
            .get(`/pedidosfacturados/facturacompleta/${currentFact.id}`)
            .then((res) => {
                setFactura(res.data);
            })
            .catch((err) => console.log("error trayendo data de esta factura"));
    };

    useEffect(() => {
        if (currentFact?.id !== 0) getFactDetalle();
    }, [currentFact]);

    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title id="modal-tittle">Factura</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <p style={{ display: "inline-block" }}>
                            Estado:
                            <strong>
                                {" "}
                                {currentFact.estado === "facturado"
                                    ? "FACTURADO"
                                    : "PENDIENTE A FACTURAR"}
                            </strong>
                        </p>
                        <p style={{ display: "inline-block", float: "right" }}>
                            N° de Factura:{" "}
                            <strong> {currentFact.num_factura}</strong>
                        </p>
                    </div>
                    <div>
                        <p style={{ display: "inline-block" }}>
                            Valor total:
                            <strong> ${currentFact.valor_total}</strong>
                        </p>
                        <p style={{ display: "inline-block", float: "right" }}>
                            Valor cubierto:
                            <strong> ${currentFact.valor_cubierto}</strong>
                        </p>
                    </div>
                    <div>
                        Pedidos relacionados:
                        <div
                            style={{
                                marginLeft: 25,
                                marginRight: 25,
                                marginTop: 10,
                            }}
                        >
                            {factura.length > 0
                                ? factura.map((f) => {
                                      return (
                                          <div
                                              style={{
                                                  marginBottom: 15,
                                                  borderBottom:
                                                      "1px solid grey",
                                                  paddingLeft: 25,
                                              }}
                                          >
                                              <ul>
                                                  <li>ID del pedido: {f.id}</li>
                                                  <li>
                                                      Fecha y hora:{" "}
                                                      {`${calculateDay(
                                                          f.fechayhora
                                                      )} hs`}
                                                  </li>
                                                  <li>
                                                      Notas del pedido:{" "}
                                                      {f.notas}
                                                  </li>
                                                  <li>
                                                      Valor total: $
                                                      {f.valor_total}
                                                  </li>
                                                  <li>
                                                      Detalle del pedido:
                                                      <ol
                                                          style={{
                                                              paddingLeft: 20,
                                                          }}
                                                      >
                                                          {f?.detalle?.map(
                                                              (de) => {
                                                                  return (
                                                                      <li>
                                                                          {`${
                                                                              de.nombre
                                                                          } (x${
                                                                              de.cantidad
                                                                          }) ($${
                                                                              de.precio
                                                                          } c/u) = $${
                                                                              de.precio *
                                                                              de.cantidad
                                                                          }`}
                                                                      </li>
                                                                  );
                                                              }
                                                          )}
                                                      </ol>
                                                  </li>
                                              </ul>
                                          </div>
                                      );
                                  })
                                : ""}
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
};

export default ModalInfoFactura;
