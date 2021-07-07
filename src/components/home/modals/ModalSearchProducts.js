import React, { useRef, useState } from "react";
import { Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { useHome } from "../../../context/home-context";
import clienteAxios from "../../../config/clienteAxios";
import ModaleDetalleProducto from "./ModalDetalleProducto";
import { ListadoStock } from "../ListadoStock";
import { useReactToPrint } from "react-to-print";
import ModalListadoStock from "./ModalListadoStock";

function ModalSearchProducts() {
    const [showDetalleProd, setShowDetalleProd] = useState(false);
    const { showTable, setShowTable } = useHome();
    const handleClose = () => setShowTable(false);
    const [currentProducto, setCurrentProducto] = useState({});
    const { products, onAdd, term, setTerm, destacarProd } = useHome();

    const [showListadoStock, setShowListadoStock] = useState(false);

    const filtroBuscador = (item) => {
        //console.log("tenemos este producto", item);
        const validText = (it) => {
            let validator = false;
            if (term.length > 0) {
                if (it.id.toString().includes(term.toLowerCase())) {
                    validator = true;
                } else if (
                    it.nombre.toLowerCase().includes(term.toLowerCase())
                ) {
                    validator = true;
                }
            } else {
                validator = true;
            }
            return validator;
        };
        if (validText(item)) return item;
    };

    const onAddAndClose = product => {
        onAdd(product);
        setShowTable(false);
    }

    return (
        <div>
            <Modal
                show={showTable}
                onHide={handleClose}
                backdrop="static"
                className="modalProductos"
            >
                <Modal.Header>
                    <div className="">
                        <Modal.Title>Buscar Productos</Modal.Title>
                    </div>
                </Modal.Header>
                <Modal.Body>
                    {products && (
                        <input
                            className="col-md-12 form-control modal-search"
                            type="text"
                            placeholder="Buscar"
                            aria-label="Search"
                            onChange={(e) => setTerm(e.target.value)}
                        />
                    )}
                    <div className="modal-table">
                        <table className="table">
                            <thead className="thead-dark">
                                <tr>
                                    <th scope="col">Codigo</th>
                                    <th scope="col">Producto</th>
                                    <th scope="col">Categoria</th>
                                    <th scope="col">Costo</th>
                                    <th scope="col">Precio</th>
                                    <th scope="col">Editar</th>
                                    {/* <th scope="col"></th>*/}
                                </tr>
                            </thead>
                            <tbody>
                                {products
                                    .filter(filtroBuscador)
                                    .map((product) => (
                                        <tr
                                            key={product.id}
                                            className="trHover"
                                        >
                                            <td onClick={() => onAddAndClose(product)}>
                                                {product.id}
                                            </td>

                                            <td
                                                onClick={() => onAddAndClose(product)}
                                                className="name"
                                            >
                                                {product.nombre}
                                            </td>

                                            <td
                                                onClick={() => onAddAndClose(product)}
                                                className="name"
                                            >
                                                {product.nombreCat}
                                            </td>

                                            <td onClick={() => onAddAndClose(product)}>
                                                ${product.precio}
                                            </td>

                                            <td onClick={() => onAddAndClose(product)}>
                                                ${product.costo}
                                            </td>
                                            <td>
                                                <button
                                                    className="iconos"
                                                    style={{ paddingLeft: 10 }}
                                                    onClick={() => {
                                                        setCurrentProducto(
                                                            product
                                                        );
                                                        setShowDetalleProd(
                                                            true
                                                        );
                                                    }}
                                                >
                                                    <i className="bi bi-pencil-square"></i>
                                                </button>
                                            </td>
                                            {/*
                                            <td>
                                                {product.destacado === 1 ? (
                                                    <button
                                                        className="iconos"
                                                        onClick={() =>
                                                            destacarProd(
                                                                product,
                                                                false
                                                            )
                                                        }
                                                    >
                                                        <i className="bi bi-star-fill"></i>
                                                    </button>
                                                ) : (
                                                    <button
                                                        className="iconos"
                                                        onClick={() =>
                                                            destacarProd(
                                                                product,
                                                                true
                                                            )
                                                        }
                                                    >
                                                        <i className="bi bi-star"></i>
                                                    </button>
                                                )}
                                            </td>
                                        */}
                                        </tr>
                                    ))}
                            </tbody>
                        </table>
                    </div>
                </Modal.Body>
                <Modal.Footer style={{ justifyContent: "space-between" }}>
                    <button
                        className="btn"
                        onClick={() => setShowListadoStock(true)}
                    >
                        Imprimir listado
                    </button>
                    <button
                        className="modal-button-cancel"
                        onClick={handleClose}
                    >
                        Cerrar
                    </button>
                </Modal.Footer>
            </Modal>
            <ModaleDetalleProducto
                showDetalleProd={showDetalleProd}
                setShowDetalleProd={setShowDetalleProd}
                currentProducto={currentProducto}
                setCurrentProducto={setCurrentProducto}
            />
            <ModalListadoStock
                show={showListadoStock}
                setShow={setShowListadoStock}
            />
        </div>
    );
}

export default ModalSearchProducts;
