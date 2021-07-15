import React, { useEffect, useState } from "react";
import { Modal, ModalFooter } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { useToasts } from "react-toast-notifications";
import clienteAxios from "../../config/clienteAxios";
import { useHome } from "../../context/home-context";

const ModalCrearFactura = ({ show, setShow }) => {
    const { addToast } = useToasts();
    let {
        arrGenerateFact,
        facturasXcliente,
        getDeudaXcliente,
        obtPedidoXcliente,
    } = useHome();
    const [pedidosElegidos, setPedidosElegidos] = useState([]);
    const [fact, setFact] = useState({});
    //en este caso facturasXcliente tiene los PEDIDOS porque estamos viendo esa tabla, solo se llama asi por Ezequiel.

    const handleClose = () => setShow(false);

    const submitFact = async () => {
        let factConPedidos = { arr: [fact, ...pedidosElegidos] };
        console.log("esto vamos a mandar", factConPedidos, pedidosElegidos);
        await clienteAxios
            .post("/facturas/conpedidos", factConPedidos)
            .then((res) => {
                console.log("se inserto bn?", res.data);
                obtPedidoXcliente(fact.cliente_id);
                getDeudaXcliente(fact.cliente_id);
                setFact({ ...fact, num_factura: "" });
                setShow(false);
            })
            .catch((err) =>
                console.log(
                    "tenemos un err insertando la factura con sus pedidos",
                    err
                )
            );
    };

    useEffect(() => {
        let valorTotal = 0;
        let toPedidosEleg = arrGenerateFact.map((ped) => {
            let that = facturasXcliente.filter((p) => p.id === ped);
            if (that[0]) valorTotal += that[0].valor_total;

            return { pedido_id: ped };
        });
        setPedidosElegidos(toPedidosEleg);
        console.log("volvemos a setear", facturasXcliente[0]?.cliente_id);
        setFact({
            ...fact,
            cliente_id: facturasXcliente[0]?.cliente_id,
            pedido_id: 0,
            valor_total: valorTotal,
            valor_cubierto: 0,
            estado: "pendiente",
        });
    }, [facturasXcliente, arrGenerateFact]);

    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title id="modal-tittle">Crear factura</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                ¿Confirmar creación de factura?
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <ModalFooter>
                    <button
                        className="modal-button-create"
                        onClick={submitFact}
                    >
                        Crear factura
                    </button>
                    <button
                        className="modal-button-cancel"
                        onClick={handleClose}
                    >
                        Cancelar
                    </button>
                </ModalFooter>
            </Modal>
        </>
    );
};

export default ModalCrearFactura;
