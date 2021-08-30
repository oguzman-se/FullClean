import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import Button from "../../home/Button";
import { useToasts } from "react-toast-notifications";
import { useHome } from "../../../context/home-context";
import { usePedidos } from "../../../context/pedidos-context";
import clienteAxios from "../../../config/clienteAxios";
function ModalCrearFactura(props) {
    const [currentCliente2, setCurrentCliente2] = useState({
        cliente_id: 1,
        num_factura: "",
    });
    const { Allclientes } = useHome([]);
    const { obtenerFacturas } = usePedidos([]);
    const { addToast } = useToasts();
    const { showFactura, setShowFactura } = props;
    const handleClose = () => {
        setShowFactura(false);
    };
    function handle(e) {
        let newMetodo = { ...currentCliente2 };
        newMetodo[e.target.name] = e.target.value;
        setCurrentCliente2(newMetodo);
    }
    const submit = async () => {
        await clienteAxios
            .post("/facturas", {
                cliente_id: currentCliente2.cliente_id,
                valor_total: 0,
                valor_cubierto: 0,
                pedido_id: 0,
                estado: "pendiente",
                num_factura: currentCliente2.num_factura,
            })
            .then((res) => {
                console.log(res.data);
                obtenerFacturas();
                setShowFactura(false);
            })
            .catch((err) => {
                console.log("error post", err);
            });
    };
    return (
        <>
            <Modal
                show={showFactura}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title id="modal-tittle">Crear factura</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <label for="exampleInputEmail1" className="col-md-4">
                        - Cliente:
                    </label>
                    <select
                        className="col-md-8"
                        onChange={handle}
                        name="cliente_id"
                    >
                        {Allclientes.map((clientes) => (
                            <option value={clientes.id}>
                                {clientes.nombre} - {clientes.cuit}
                            </option>
                        ))}
                    </select>
                    <label style={{ marginLeft: 15, marginTop: 15 }}>
                        - N° de Factura:
                    </label>
                    <input
                        type="text"
                        className="form-control custom-input"
                        placeholder="N° de Factura"
                        aria-label="Username"
                        onChange={handle}
                        style={{ width: "67%", float: "right", marginTop: 10 }}
                        name="num_factura"
                        value={currentCliente2.num_factura}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button className="modal-button-create" onClick={submit}>
                        Crear
                    </Button>
                    <Button
                        className="modal-button-cancel"
                        onClick={handleClose}
                    >
                        Cerrar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalCrearFactura;
