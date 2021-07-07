import React, { useState } from "react";
import { Modal, ModalFooter } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { useHome } from "../../../context/home-context";
import clienteAxios from "../../../config/clienteAxios";
import { useToasts } from "react-toast-notifications";
import CalcPorcentual from "./nuevoProducto/CalcPorcentual";
import ModalEliminarProducto from "./ModalEliminarProducto";

function ModalDetalleProducto(props) {
    const { addToast } = useToasts();
    const { AllCodigos, setAllCodigos } = useHome([]);
    const [currentcodigo, setCurrentcodigo] = useState({
        id: "",
        codigo: "",
        producto_id: "",
    });
    const { setProducts, destacarProd } = useHome();
    const {
        showDetalleProd,
        setShowDetalleProd,
        currentProducto,
        setCurrentProducto,
    } = props;
    const handleClose = () => setShowDetalleProd(false);
    const [showElim, setShowElim] = useState(false);

    function handleChange(e) {
        let newProducto = { ...currentProducto };
        if (e.target.name !== "nombre") {
            newProducto[e.target.name] = e.target.value;
        } else {
            if (e.target.value.length < 58) {
                newProducto[e.target.name] = e.target.value;
            }
        }
        setCurrentProducto(newProducto);
    }

    const handleChangeBarcode = (e) => {
        const { name, value } = e.target;
        setCurrentcodigo({ ...currentcodigo, [name]: value });
        console.log(currentcodigo);
    };
    const actualizar = async (producto) => {
        let toSend = { ...currentProducto };
        delete toSend.nombreCat;
        await clienteAxios
            .put(`/productos/${producto.id}`, toSend)
            .then((res) => {
                console.log(res.data);
                setShowDetalleProd(false);
                const getProduct = async () => {
                    await clienteAxios
                        .get("/productos")
                        .then((r) => {
                            setProducts(r.data);
                            addToast("Producto actualizado", {
                                appearance: "success",
                                autoDismiss: true,
                            });
                        })
                        .catch((r) => {
                            console.log("error get", r);
                        });
                };
                getProduct();
            })
            .catch((err) => {
                console.log("error put", err);
            });
    };

    const submit = async () => {
        const exist = AllCodigos.find(
            (x) => x.codigo === currentcodigo.codigo.toLowerCase()
        );
        if (exist === undefined) {
            await clienteAxios
                .post("/productoscodigo", {
                    codigo: currentcodigo.codigo.toLowerCase(),
                    producto_id: currentProducto.id,
                })
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
                            })
                            .catch((r) => {
                                console.log("error get", r);
                                console.log(currentcodigo);
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
    const eliminar = async (currentcodigo) => {
        await clienteAxios
            .delete(`/productoscodigo/${currentcodigo.id}`)
            .then((res) => {
                console.log(res.data);
                //handleClose()
                const getCod = async () => {
                    await clienteAxios
                        .get("/productoscodigo")
                        .then((r) => {
                            setAllCodigos(r.data);
                            addToast("Barcode eliminado", {
                                appearance: "success",
                                autoDismiss: true,
                            });
                        })
                        .catch((r) => {
                            console.log("error get", r);
                            console.log(currentcodigo);
                        });
                };
                getCod();
            })
            .catch((err) => {
                console.log("error delete", err);
            });
    };
    return (
        <>
            <Modal
                show={showDetalleProd}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title id="modal-tittle">
                        Detalle producto
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="detalleProd">
                        <div className="container-fluid" style={{ padding: 0 }}>
                            <div className="row">
                                <div className="col-9" style={{ padding: 0 }}>
                                    <label for="exampleInputEmail1">
                                        ID del Producto
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control custom-input"
                                        value={currentProducto.id}
                                        onChange={handleChange}
                                        disabled
                                    />
                                </div>
                                <div
                                    className="col-3"
                                    style={{
                                        paddingRight: 0,
                                        textAlign: "center",
                                        marginTop: 10,
                                    }}
                                >
                                    <label for="exampleInputEmail1">
                                        Destacar producto
                                    </label>
                                    {currentProducto.destacado ? (
                                        <button
                                            className="iconos"
                                            style={{
                                                paddingRight: 0,
                                                display: "block",
                                                margin: "auto",
                                            }}
                                            onClick={() =>
                                                destacarProd(
                                                    currentProducto,
                                                    false,
                                                    setCurrentProducto
                                                )
                                            }
                                        >
                                            <i className="bi bi-star-fill"></i>
                                        </button>
                                    ) : (
                                        <button
                                            className="iconos"
                                            style={{
                                                paddingRight: 0,
                                                display: "block",
                                                margin: "auto",
                                            }}
                                            onClick={() =>
                                                destacarProd(
                                                    currentProducto,
                                                    true,
                                                    setCurrentProducto
                                                )
                                            }
                                        >
                                            <i className="bi bi-star"></i>
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div>
                            <label for="exampleInputEmail1">
                                Nombre del Producto
                            </label>
                            <input
                                type="text"
                                className="form-control custom-input"
                                name="nombre"
                                value={currentProducto.nombre}
                                onChange={handleChange}
                            />
                        </div>
                        <CalcPorcentual
                            currentProducto={currentProducto}
                            setCurrentProducto={setCurrentProducto}
                            ultModifCost={
                                currentProducto?.fecha_costo ? (
                                    <span
                                        style={{
                                            fontSize: 13,
                                            marginLeft: 18,
                                            fontStyle: "italic",
                                        }}
                                    >
                                        Última modif:
                                        <span
                                            style={{
                                                fontSize: 14,
                                                fontWeight: "bold",
                                                fontStyle: "italic",
                                            }}
                                        >
                                            {" "}
                                            {currentProducto.fecha_costo}
                                        </span>
                                    </span>
                                ) : (
                                    ""
                                )
                            }
                            ultModifPrec={
                                currentProducto?.fecha_precio ? (
                                    <span
                                        style={{
                                            fontSize: 13,
                                            marginLeft: 13,
                                            fontStyle: "italic",
                                        }}
                                    >
                                        Última modif:
                                        <span
                                            style={{
                                                fontSize: 14,
                                                fontWeight: "bold",
                                                fontStyle: "italic",
                                            }}
                                        >
                                            {" "}
                                            {currentProducto.fecha_precio}
                                        </span>
                                    </span>
                                ) : (
                                    ""
                                )
                            }
                        />
                        <div>
                            <label for="exampleInputEmail1">Stock</label>
                            <input
                                type="number"
                                className="form-control custom-input"
                                placeholder="Stock"
                                aria-label="Stock"
                                onChange={handleChange}
                                name="stock"
                                value={currentProducto.stock}
                            />
                            <label for="exampleInputEmail1">Alerta</label>
                            <input
                                type="number"
                                className="form-control custom-input"
                                placeholder="Alerta"
                                aria-label="Alerta"
                                onChange={handleChange}
                                name="alerta"
                                value={currentProducto.alerta}
                            />
                        </div>
                        <ModalFooter>
                            <button
                                style={{ color: "tomato" }}
                                className="modal-button-cancel"
                                onClick={() => setShowElim(true)}
                            >
                                Eliminar Producto
                            </button>
                            <button
                                className="modal-button-create"
                                onClick={() => actualizar(currentProducto)}
                            >
                                Actualizar Producto
                            </button>
                            <button
                                className="modal-button-cancel"
                                onClick={handleClose}
                            >
                                Cancelar
                            </button>
                        </ModalFooter>

                        <div>
                            <label for="exampleInputEmail1">
                                Agregar BarCode
                            </label>
                            <input
                                type="text"
                                className="form-control custom-input"
                                name="codigo"
                                onChange={handleChangeBarcode}
                                value={currentcodigo.codigo}
                            />
                            {AllCodigos.map((codigo) => {
                                if (codigo.producto_id === currentProducto.id)
                                    return (
                                        <div>
                                            <ol class="list-group list-group-numbered">
                                                <li class="list-group-item d-flex justify-content-between align-items-start">
                                                    <div class="ms-2 me-auto">
                                                        <div class="fw-bold">
                                                            {codigo.codigo.toUpperCase()}
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <button
                                                            className="boton-modal-buscar2"
                                                            onClick={() =>
                                                                eliminar(codigo)
                                                            }
                                                        >
                                                            <i class="bi bi-x-octagon"></i>
                                                        </button>
                                                    </div>
                                                </li>
                                            </ol>
                                        </div>
                                    );
                                return "";
                            })}
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <button className="modal-button-create" onClick={submit}>
                        Agregar Barcode
                    </button>
                </Modal.Footer>
            </Modal>
            <ModalEliminarProducto
                show={showElim}
                setShow={setShowElim}
                setShowDetalle={setShowDetalleProd}
                producto={currentProducto}
            />
        </>
    );
}

export default ModalDetalleProducto;
