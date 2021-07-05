import React from "react";
import { Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import Button from "../Button";
import ButtonToPrint from "../ButtonToPrint";

function ModalRecibo(props) {
    const { showRemito, setShowRemito, type } = props;
    const handleClose = () => {
        setShowRemito(false);
    };
    return (
        <>
            <Modal
                show={showRemito}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                className="modalRecibo"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="modal-tittle">Impresión</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ButtonToPrint setShowRemito={setShowRemito} type={type} />
                </Modal.Body>
                <Modal.Footer>
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

export default ModalRecibo;
