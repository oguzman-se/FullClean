import React from "react";
import { Modal, ModalFooter } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import clienteAxios from "../../config/clienteAxios";
import { useHome } from "../../context/home-context";
import { useToasts } from "react-toast-notifications";

const ModalEliminarCliente = ({
    show,
    setShow,
    labelCliente,
    setShowDetalle,
}) => {
    const { addToast } = useToasts();
    const { setAllClientes } = useHome([]);

    const handleClose = () => setShow(false);

    const eliminar = async () => {
        await clienteAxios
            .delete(`/clientes/${labelCliente.id}`)
            .then((res) => {
                console.log(res.data);
                handleClose();
                const getCliente = async () => {
                    await clienteAxios
                        .get("/clientes")
                        .then((r) => {
                            setAllClientes(r.data);
                            addToast("Cliente eliminado", {
                                appearance: "success",
                                autoDismiss: true,
                            });
                        })
                        .catch((r) => {
                            console.log("error get", r);
                        });
                };
                getCliente();
            })
            .catch((err) => {
                console.log("error delete", err);
            });
    };

    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title id="modal-tittle">
                        Eliminar cliente
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Desea eliminar al cliente: {labelCliente.nombre}?
                </Modal.Body>
                <ModalFooter>
                    <button className="modal-button-cancel" onClick={eliminar}>
                        Eliminar
                    </button>
                    <button
                        className="modal-button-cancel"
                        onClick={() => {
                            setShow(false);
                            setShowDetalle(true);
                        }}
                    >
                        Cancelar
                    </button>
                </ModalFooter>
            </Modal>
        </>
    );
};

export default ModalEliminarCliente;
