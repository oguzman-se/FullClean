import React from "react";
import { Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { useHome } from "../../../context/home-context";
import Button from "../Button";
import { useToasts } from "react-toast-notifications";

function ModalNuevaCompra(props) {
    const {
        onRemoveAll,
        setLabelCliente,
        setEnable,
        barcodeRef,
        setQty,
        setTotalPrice,
    } = useHome();
    const { addToast } = useToasts();
    const handleClose = () => setShowNuevaCompra(false);
    const { showNuevaCompra, setShowNuevaCompra, setVentaCredito } = props;
    const yes = () => {
        onRemoveAll();
        handleClose();
        setLabelCliente({});
        setEnable(false);
        setVentaCredito("venta");
        addToast("Nueva Venta Seteada", {
            appearance: "success",
            autoDismiss: true,
        });
        setQty(0);
        setTotalPrice(0);
        setTimeout(() => {
            barcodeRef.current.focus();
        }, 400);
    };
    return (
        <>
            <Modal
                show={showNuevaCompra}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title id="modal-tittle">Advertencia</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h3>
                        Los cambios en el carrito de compra no han sido
                        guardados, esta accion perdera los cambios realizados.
                        ¿Desea Continuar?
                    </h3>
                </Modal.Body>
                <Modal.Footer>
                    <Button className="modal-button-create" onClick={yes}>
                        Si
                    </Button>
                    <Button
                        className="modal-button-cancel"
                        onClick={handleClose}
                    >
                        No
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalNuevaCompra;
