import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { useHome } from "../../../context/home-context";
import ModalNuevoCliente from "./ModalNuevoCliente";

function ModalCargarCliente(props) {
    const { showCargarCliente, setShowCargarCliente } = props;
    const {
        Allclientes,
        setLabelCliente,
        showNuevoCliente,
        setShowNuevoCliente,
    } = useHome([]);
    const [searchCli, setSearchCli] = useState("");
    const handleClose = () => setShowCargarCliente(false);
    const onAddCliente = (clientes) => {
        setLabelCliente(clientes);
        handleClose();
    };
    function searchingCli(searchCli) {
        return function (x) {
            return (
                x.nombre.toLowerCase().includes(searchCli) ||
                !searchCli ||
                x.telefono.toLowerCase().includes(searchCli) ||
                !searchCli ||
                x.domicilio.toLowerCase().includes(searchCli) ||
                !searchCli
            );
        };
    }
    return (
        <>
            <Modal
                show={showCargarCliente}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title id="modal-tittle">Cargar Cliente</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {Allclientes && (
                        <input
                            className="col-md-12 form-control modal-search"
                            type="text"
                            placeholder="Buscar"
                            aria-label="Search"
                            onChange={(e) =>
                                setSearchCli(e.target.value.toLowerCase())
                            }
                        />
                    )}

                    <div className="tabla2">
                        <table className="table">
                            <thead className="thead-dark">
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Nombre</th>
                                    <th scope="col">Domicilio</th>
                                    <th scope="col">Telefono</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="hover-tr" onClick={onAddCliente}>
                                    <td>0</td>
                                    <td>Consumidor Final</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                {Allclientes.filter(searchingCli(searchCli))
                                    .sort((a, b) => {
                                        if (b.id !== 0) {
                                            if (
                                                a.nombre.toLowerCase() >
                                                b.nombre.toLowerCase()
                                            ) {
                                                return 1;
                                            } else {
                                                return -1;
                                            }
                                        } else {
                                            return 1;
                                        }
                                    })
                                    .map((clientes, i) => (
                                        <tr
                                            key={i}
                                            onClick={() =>
                                                onAddCliente(clientes)
                                            }
                                            className="hover-tr"
                                        >
                                            <td>{clientes.id}</td>
                                            <td>{clientes.nombre}</td>
                                            <td>
                                                {clientes.domicilio} -{" "}
                                                {clientes.domicilio_nro
                                                    ? clientes.domicilio_nro
                                                    : ""}
                                            </td>
                                            <td>{clientes.telefono}</td>
                                        </tr>
                                    ))}
                            </tbody>
                        </table>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <button
                        className="modal-button-create"
                        onClick={() => setShowNuevoCliente(true)}
                    >
                        Nuevo Cliente
                    </button>
                    <button
                        className="modal-button-cancel"
                        onClick={handleClose}
                    >
                        Cancelar
                    </button>
                </Modal.Footer>
            </Modal>
            <ModalNuevoCliente
                showNuevoCliente={showNuevoCliente}
                setShowNuevoCliente={setShowNuevoCliente}
            />
        </>
    );
}

export default ModalCargarCliente;
