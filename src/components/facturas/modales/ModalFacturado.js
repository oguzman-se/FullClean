import React, { useEffect, useState } from "react";
import { Modal, ModalFooter } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { useToasts } from "react-toast-notifications";
import { usePedidos } from "../../../context/pedidos-context";
import clienteAxios from "../../../config/clienteAxios";
import ReactHTMLTableToExcel from "react-html-table-to-excel";

function ModalFacturado({ showFacturado, setShowFacturado }) {
    const { addToast } = useToasts();
    let { obtenerFacturas, currentFactura, setCurrentFactura } = usePedidos();
    const handleClose = () => setShowFacturado(false);

    const [numFact, setNumFact] = useState("");
    const [currentDetalle, setCurrentDetalle] = useState([]);

    const handleFacturado = async () => {
        let toSend = {
            num_factura: numFact,
            estado: "facturado",
        };
        await clienteAxios
            .put(`facturas/${currentFactura.id}`, toSend)
            .then(() => {
                obtenerFacturas();
                setCurrentFactura({});
                setShowFacturado(false);
                addToast(`Factura ${currentFactura.id}: FACTURADO`, {
                    autoDismiss: true,
                    appearance: "success",
                });
            })
            .catch(() => {
                addToast("Error pasando a facturado.", {
                    appearance: "error",
                    autoDismiss: true,
                });
            });
    };

    const getFactDetalle = async () => {
        await clienteAxios
            .get(`/pedidosfacturados/facturacompleta/${currentFactura.id}`)
            .then((res) => {
                setCurrentDetalle(res.data);
                console.log("NOS LLEGA ESTA FACTURA", res.data);
            })
            .catch((err) => console.log("error trayendo data de esta factura"));
    };

    useEffect(() => {
        if (currentFactura?.id !== 0) getFactDetalle();
    }, [currentFactura]);

    return (
        <>
            <Modal
                show={showFacturado}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title id="modal-tittle">
                        Pasar a FACTURADO
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                <table className="table" id="tablaFact">
                                    <thead className="thead-dark">
                                        <tr>
                                            <th scope="col">Cantidad</th>
                                            <th scope="col">Detalle</th>
                                            <th scope="col">Precio Un.</th>
                                            <th scope="col">Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {currentDetalle.map((f) => {
                                            if (f?.detalle?.length > 0) {
                                                let toRet = f.detalle.map(
                                                    (d) => {
                                                        return (
                                                            <tr>
                                                                <td>
                                                                    {d.cantidad}
                                                                </td>
                                                                <td>
                                                                    {d.nombre}
                                                                </td>
                                                                <td>
                                                                    {d.precio}
                                                                </td>
                                                                <td>
                                                                    {d.cantidad *
                                                                        d.precio}
                                                                </td>
                                                            </tr>
                                                        );
                                                    }
                                                );
                                                return toRet;
                                            }
                                        })}
                                    </tbody>
                                </table>
                            </div>
                            <div className="col-12" style={{textAlign: 'center', marginBottom: 15, paddingBottom: 15, borderBottom: '1px solid grey'}}>
                                <ReactHTMLTableToExcel
                                    id="botonExportarExcel"
                                    className="btn btn-success"
                                    table="tablaFact"
                                    filename={`${Date.now()}`}
                                    sheet="pagina 1"
                                    buttonText="Exportar a Excel"
                                />
                            </div>
                            <div className="col-6">Número de factura:</div>
                            <div className="col-6">
                                <input
                                    type="text"
                                    name="num_factura"
                                    placeholder="N° de Factura"
                                    value={numFact}
                                    onChange={(e) => setNumFact(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <ModalFooter>
                    <button
                        className="modal-button-create"
                        onClick={handleFacturado}
                    >
                        Pasar a FACTURADO
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

export default ModalFacturado;
