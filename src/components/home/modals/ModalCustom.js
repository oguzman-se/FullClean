import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { useHome } from "../../../context/home-context";
import clienteAxios from "../../../config/clienteAxios";
import { useToasts } from "react-toast-notifications";
import SelectCategoria from "../selectCategoria";
import BarcodeItem from "./nuevoProducto/BarcodeItem";
import CalcPorcentual from "./nuevoProducto/CalcPorcentual";

function ModalCustom() {
    const { addToast } = useToasts();
    const { setShow, show } = useHome();
    const { setProducts } = useHome();
    const handleClose = () => setShow(false);
    const {
        currentProducto,
        setCurrentProducto,
        AllCategorias,
        setAllCodigos,
    } = useHome();

    const [barcodes, setBarcodes] = useState([]);

    const barcodePressed = (e, current, setCurrent) => {
        if (e.key === "Enter") {
            setBarcodes([...barcodes, current]);
            setCurrent("");
        }
    };

    const byeBARCODE = (that) => {
        let newBarcodeArr = [...barcodes].filter((b) => b !== that);
        setBarcodes(newBarcodeArr);
    };

    const submit = async () => {
        console.log(currentProducto);
        await clienteAxios
            .post("/productos/conBarcodes", {
                nombre: currentProducto.nombre,
                costo: currentProducto.costo,
                precio: currentProducto.precio,
                categoria_id: currentProducto.category_id,
                destacado: false,
                stock: currentProducto.stock,
                margen:
                    currentProducto?.margen !== ""
                        ? currentProducto.margen
                        : null,
                alerta: currentProducto.alerta,
                barcodes: barcodes,
            })
            .then((res) => {
                console.log(res.data);
                const getProd = async () => {
                    await clienteAxios
                        .get("/productos")
                        .then((r) => {
                            setProducts(r.data);
                            handleClose();
                            addToast("Producto creado", {
                                appearance: "success",
                                autoDismiss: true,
                            });
                            setCurrentProducto("");
                        })
                        .catch((r) => {
                            addToast(r.data, {
                                appearance: "error",
                                autoDismiss: true,
                            });
                        });
                };
                const getCod = async () => {
                    await clienteAxios
                        .get("/productoscodigo")
                        .then((r) => {
                            setAllCodigos(r.data);
                        })
                        .catch((r) => {
                            console.log("error get", r);
                        });
                };
                getCod();
                getProd();
            })
            .catch((e) => {
                addToast(e.data, {
                    appearance: "error",
                    autoDismiss: true,
                });
            });
    };

    function handle(e) {
        let newProducto = { ...currentProducto };
        newProducto[e.target.name] = e.target.value;
        setCurrentProducto(newProducto);
    }

    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title id="modal-tittle">Nuevo Producto</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <div>
                            <label for="exampleInputEmail1">
                                Nombre del Producto
                            </label>
                            <input
                                type="text"
                                className="form-control custom-input"
                                placeholder="Nombre"
                                aria-label="Username"
                                onChange={(e) => handle(e)}
                                name="nombre"
                                value={currentProducto.nombre}
                            />
                        </div>
                        <CalcPorcentual
                            currentProducto={currentProducto}
                            setCurrentProducto={setCurrentProducto}
                        />
                        <div>
                            <label for="exampleInputEmail1">Stock</label>
                            <input
                                type="number"
                                className="form-control custom-input"
                                placeholder="Stock"
                                aria-label="Stock"
                                onChange={(e) => handle(e)}
                                name="stock"
                                value={currentProducto.stock}
                            />
                            <label for="exampleInputEmail1">Alerta</label>
                            <input
                                type="number"
                                className="form-control custom-input"
                                placeholder="Alerta"
                                aria-label="Alerta"
                                onChange={(e) => handle(e)}
                                name="alerta"
                                value={currentProducto.alerta}
                            />
                        </div>
                        <div>
                            <label for="exampleInputEmail1">Categoria</label>
                            <SelectCategoria
                                currentProducto={currentProducto}
                                setCurrentProducto={setCurrentProducto}
                                cats={AllCategorias}
                            />
                        </div>
                    </div>
                    <div style={{ marginTop: 15 }}>
                        <label for="exampleInputEmail1">BARCODES</label>
                        {barcodes.length > 0 ? (
                            <ol style={{ marginLeft: 50 }}>
                                {barcodes.map((b) => {
                                    return (
                                        <li style={{ padding: "5px 0" }}>
                                            {b}
                                            <button
                                                className="iconos"
                                                onClick={() => byeBARCODE(b)}
                                                style={{ float: "right" }}
                                            >
                                                <i className="bi bi-x-octagon"></i>
                                            </button>
                                        </li>
                                    );
                                })}
                            </ol>
                        ) : (
                            ""
                        )}
                        <BarcodeItem barcodePressed={barcodePressed} />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <button
                        className="modal-button-create"
                        onClick={(e) => submit(e)}
                    >
                        Crear Producto
                    </button>
                    <button
                        className="modal-button-cancel"
                        onClick={handleClose}
                    >
                        Cancelar
                    </button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalCustom;
