import React, { useRef } from "react";
import { Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import Button from "../Button";
import { ListadoStock } from "../ListadoStock";
import { useReactToPrint } from "react-to-print";
import { useHome } from "../../../context/home-context";
import ReactHTMLTableToExcel from "react-html-table-to-excel";

function ModalListadoStock({ show, setShow }) {
    const { products } = useHome();

    const handlePrint = useReactToPrint({
        content: () => listadoRef.current,
    });

    const listadoRef = useRef();

    const handleClose = () => {
        setShow(false);
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
                    <Modal.Title id="modal-tittle">Impresión</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ListadoStock ref={listadoRef} products={products} />
                </Modal.Body>
                <Modal.Footer style={{ justifyContent: "space-between" }}>
                    <ReactHTMLTableToExcel
                        id="botonExportarExcel"
                        className="btn btn-success btnExcelLarge"
                        table="tablaStock"
                        filename={`${Date.now()}`}
                        sheet="pagina 1"
                        buttonText="Exportar a Excel"
                    />
                    <Button className="btn" onClick={() => handlePrint()}>
                        Imprimir listado
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

export default ModalListadoStock;
