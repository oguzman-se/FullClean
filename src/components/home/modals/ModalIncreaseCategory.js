import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { useHome } from "../../../context/home-context";
import Button from "../Button";
import clienteAxios from "../../../config/clienteAxios";
import { useToasts } from "react-toast-notifications";

function ModalIconos(props) {
    const [margenCategory, setMargenCategory] = useState({
        prodsOn: false,
        aumento: 0,
    });
    const {
        showIconoCategory,
        setShowIconosCategory,
        currentCategoria,
    } = props;
    const { addToast } = useToasts();
    const handleClose = () => {
        setShowIconosCategory(false);
    };

    const handleChange = (e) =>
        e.target.type === "checkbox"
            ? setMargenCategory({
                  ...margenCategory,
                  [e.target.name]: !margenCategory[e.target.name],
              })
            : setMargenCategory({
                  ...margenCategory,
                  [e.target.name]: e.target.value,
              });

    const handleSubmit = async () => {
        await clienteAxios
            .put(
                `productos/actualizacionmasiva/${currentCategoria.id}`,
                margenCategory
            )
            .then((res) => {
                addToast("Actualización masiva exitosa!", {
                    appearance: "success",
                    autoDismiss: true,
                });
                setMargenCategory({ prodsOn: false, aumento: 0 });
            })
            .catch((err) => {
                addToast("Actualización masiva fallida!", {
                    appearance: "error",
                    autoDismiss: true,
                });
            });
    };

    return (
        <>
            <Modal
                show={showIconoCategory}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title id="modal-tittle">
                        Aumento porcentual de costos de la categoría:{" "}
                        {currentCategoria.nombre}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <label>Ingrese el porcentaje</label>
                    <input
                        type="number"
                        className="form-control custom-input"
                        placeholder="Ingrese el porcentaje a aumentar"
                        name="aumento"
                        value={margenCategory.aumento}
                        onChange={handleChange}
                    />
                    <label>Aumento de precios </label>
                    <input
                        type="checkbox"
                        name="prodsOn"
                        onChange={handleChange}
                        defaultChecked={margenCategory.prodsOn}
                        style={{
                            WebkitAppearance: "auto",
                            marginLeft: "10px",
                            marginTop: "10px",
                            fontFamily: "Gotham",
                        }}
                    />
                    <p style={{ fontSize: 12, color: "grey" }}>
                        (Si chequea esta opción, no solo se aumentan los costos
                        de los productos si no tambien los precios finales)
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        className="modal-button-create"
                        onClick={handleSubmit}
                    >
                        CONTINUAR - Actualizar todos los productos de esta
                        categoría
                    </Button>
                    <Button
                        className="modal-button-cancel"
                        onClick={handleClose}
                    >
                        CANCELAR
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalIconos;
