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
    const { products, onAdd, term, setTerm, setProducts } = useHome();

    const [showListadoStock, setShowListadoStock] = useState(false);

    function searchingTerm(term) {
        return function (x) {
            return (
                x.nombreCat.toLowerCase().includes(term.toLowerCase()) ||
                !term ||
                x.nombre.toLowerCase().includes(term) ||
                !term
            );
        };
    }

    const destacar = async (producto, destacado) => {
        await clienteAxios
            .put(`/productos/${producto.id}`, {
                destacado: destacado,
            })
            .then((res) => {
                console.log(res.data);
                const getProduct = async () => {
                    await clienteAxios
                        .get("/productos")
                        .then((r) => {
                            setProducts(r.data);
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
    return (
        <div>
            <Modal
                show={showTable}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
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
                                    <th scope="col"></th>
                                    <th scope="col"></th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {products
                                    .filter(searchingTerm(term))
                                    .map((product) => (
                                        <tr key={product.id}>
                                            <td>{product.id}</td>
                                            <td className="name">
                                                {product.nombre}
                                            </td>
                                            <td className="name">
                                                {product.nombreCat}
                                            </td>
                                            <td>${product.precio}</td>
                                            <td>${product.costo}</td>
                                            <td>
                                                <button
                                                    className="iconos"
                                                    onClick={() => {
                                                        setCurrentProducto(
                                                            product
                                                        );
                                                        setShowDetalleProd(
                                                            true
                                                        );
                                                    }}
                                                >
                                                    <i class="bi bi-pencil-square"></i>
                                                </button>
                                            </td>
                                            <td>
                                                <button
                                                    className="iconos"
                                                    onClick={() =>
                                                        onAdd(product)
                                                    }
                                                >
                                                    <i class="bi bi-plus-circle-fill"></i>
                                                </button>
                                            </td>
                                            <td>
                                                {product.destacado === 1 ? (
                                                    <button
                                                        className="iconos"
                                                        onClick={() =>
                                                            destacar(
                                                                product,
                                                                false
                                                            )
                                                        }
                                                    >
                                                        <i class="bi bi-star-fill"></i>
                                                    </button>
                                                ) : (
                                                    <button
                                                        className="iconos"
                                                        onClick={() =>
                                                            destacar(
                                                                product,
                                                                true
                                                            )
                                                        }
                                                    >
                                                        <i class="bi bi-star"></i>
                                                    </button>
                                                )}
                                            </td>
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
                destacar={destacar}
            />
            <ModalListadoStock
                show={showListadoStock}
                setShow={setShowListadoStock}
            />
        </div>
    );
}

export default ModalSearchProducts;
