import React from "react";
import { Modal, ModalFooter } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { useToasts } from "react-toast-notifications";
import clienteAxios from "../../../config/clienteAxios";
import { useHome } from "../../../context/home-context";

const ModalEliminarProducto = ({ show, setShow, producto, setShowDetalle }) => {
    const { addToast } = useToasts();
    const { obtenerDatos } = useHome([]);

    const handleClose = () => setShow(false);

    const eliminar = async () => {
        await clienteAxios
            .delete(`/productos/${producto.id}`)
            .then((res) => {
                console.log(res.data);
                handleClose();
                addToast("Producto eliminado", {
                    appearance: "success",
                    autoDismiss: true,
                });
                obtenerDatos();
                setShowDetalle(false);
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
                        Eliminar producto
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Desea eliminar el producto: {producto.nombre}?
                </Modal.Body>
                <ModalFooter>
                    <button className="modal-button-cancel" onClick={eliminar} style={{color: 'tomato'}}>
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

export default ModalEliminarProducto;
