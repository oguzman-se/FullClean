import React from "react";
import { Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { useHome } from "../../../context/home-context";
import Button from "../Button";
import clienteAxios from "../../../config/clienteAxios";
import { useToasts } from "react-toast-notifications";

function ModalBarcode(props) {
    const { addToast } = useToasts();
    const {
        products,
        currentProducto,
        setCurrentProducto,
        AllCodigos,
        setAllCodigos,
    } = useHome();
    const { showBarcode, setShowBarcode, barcode } = props;
    const submit = async () => {
        const exist = AllCodigos.find(
            (x) => x.codigo === barcode.toLowerCase()
        );
        if (exist === undefined) {
            let toSend = {
                codigo: barcode.toLowerCase(),
                producto_id: currentProducto.producto_id
                    ? currentProducto.producto_id
                    : products[0].id,
            };
            console.log("que manda al barcode:", barcode);
            await clienteAxios
                .post("/productoscodigo", toSend)
                .then((res) => {
                    console.log("respuesta", res.data);
                    const getCod = async () => {
                        await clienteAxios
                            .get("/productoscodigo")
                            .then((r) => {
                                setAllCodigos(r.data);
                                addToast("Barcode creado", {
                                    appearance: "success",
                                    autoDismiss: true,
                                });
                                setShowBarcode(false);
                            })
                            .catch((r) => {
                                console.log("error get", r);
                                console.log(barcode);
                            });
                    };
                    getCod();
                })
                .catch((err) => {
                    console.log("error post", err);
                });
        } else {
            addToast("El barcode ya existe", {
                appearance: "error",
                autoDismiss: true,
            });
        }
    };
    const handleClose = () => {
        console.log("products", products);
        console.log("barcode", barcode);
        setShowBarcode(false);
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setCurrentProducto((prevState) => ({
            ...prevState,
            [name]: value,
        }));
        console.log("currentProducto", currentProducto);
    };
    return (
        <>
            <Modal
                show={showBarcode}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title id="modal-tittle">Advertencia</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h3>
                        El codigo de barra que ha ingresado no existe ¿Desea
                        crearlo?
                    </h3>
                    <select
                        className="form-select form-control custom-input"
                        aria-label="Default select example"
                        onChange={(e) => handleChange(e)}
                        name="producto_id"
                    >
                        {products.map((product) => (
                            <option value={product.id}>{product.nombre}</option>
                        ))}
                    </select>
                </Modal.Body>
                <Modal.Footer>
                    <Button className="modal-button-create" onClick={submit}>
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

export default ModalBarcode;
