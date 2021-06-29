import React from "react";
import { Modal, ModalFooter } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import clienteAxios from "../../config/clienteAxios";
import { useHome } from "../../context/home-context";
import { useToasts } from "react-toast-notifications";

function ModalDetalleCliente({
    showDetalleCliente,
    setShowDetalleCliente,
    labelCliente,
    setLabelCliente,
    setShowElimCliente,
}) {
    const { addToast } = useToasts();
    const { setAllClientes } = useHome([]);
    const handleClose = () => setShowDetalleCliente(false);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setLabelCliente({ ...labelCliente, [name]: value });
        console.log(labelCliente);
    };
    const actualizar = async (cliente) => {
        await clienteAxios
            .put(`/clientes/${cliente.id}`, labelCliente)
            .then((res) => {
                console.log(res.data);
                setShowDetalleCliente(false);
                const getCliente = async () => {
                    await clienteAxios
                        .get("/clientes")
                        .then((r) => {
                            setAllClientes(r.data);
                            addToast("Cliente actualizado", {
                                appearance: "success",
                                autoDismiss: true,
                            });
                        })
                        .catch((r) => {
                            console.log("error get", r);
                        });
                };
                getCliente();
            })
            .catch((err) => {
                console.log("error put", err);
            });
    };

    return (
        <>
            <Modal
                show={showDetalleCliente}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title id="modal-tittle">Detalle Cliente</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="container-fluid">
                        <div className="row rowModalCliente">
                            <div className="col-6">
                                <label>Nombre</label>
                                <input
                                    type="text"
                                    className="form-control custom-input"
                                    placeholder="Nombre"
                                    aria-label="Username"
                                    onChange={handleChange}
                                    name="nombre"
                                    value={labelCliente.nombre}
                                    required
                                />
                            </div>
                            <div className="col-6">
                                <label>Mail</label>
                                <input
                                    type="text"
                                    className="form-control custom-input"
                                    placeholder="Mail"
                                    aria-label="Username"
                                    onChange={handleChange}
                                    name="mail"
                                    value={labelCliente.mail}
                                />
                            </div>
                            <div className="col-6">
                                <label>Teléfono</label>
                                <input
                                    type="text"
                                    className="form-control custom-input"
                                    placeholder="Teléfono"
                                    aria-label="Username"
                                    onChange={handleChange}
                                    name="telefono"
                                    value={labelCliente.telefono}
                                    required
                                />
                            </div>
                            <div className="col-6">
                                <label>Teléfono 2</label>
                                <input
                                    type="text"
                                    className="form-control custom-input"
                                    placeholder="Teléfono"
                                    aria-label="Username"
                                    onChange={handleChange}
                                    name="telefono2"
                                    value={labelCliente.telefono2}
                                />
                            </div>
                            <div className="col-6">
                                <label>CUIT</label>
                                <input
                                    type="text"
                                    className="form-control custom-input"
                                    placeholder="CUIT"
                                    aria-label="Username"
                                    onChange={handleChange}
                                    name="cuit"
                                    value={labelCliente.cuit}
                                />
                            </div>
                            <div className="col-6">
                                <label>Condición frente al IVA</label>
                                <select
                                    onChange={handleChange}
                                    value={labelCliente.cond_iva}
                                    name="cond_iva"
                                    className="select labelsm"
                                >
                                    <option value="no_definir">
                                        No definir
                                    </option>
                                    <option value="resp_inscrip">
                                        Responsable Inscripto
                                    </option>
                                    <option value="resp_mono">
                                        Responsable Monotributo
                                    </option>
                                    <option value="no_resp">
                                        No Responsable
                                    </option>
                                    <option value="exento">Exento</option>
                                    <option value="cons_final">
                                        Consumidor Final
                                    </option>
                                </select>
                            </div>
                            <div className="col-8">
                                <label>Domicilio</label>
                                <input
                                    type="text"
                                    className="form-control custom-input"
                                    placeholder="Domicilio"
                                    aria-label="Username"
                                    onChange={handleChange}
                                    name="domicilio"
                                    value={labelCliente.domicilio}
                                    required
                                />
                            </div>
                            <div className="col-4">
                                <label>Domicilio Nro</label>
                                <input
                                    type="text"
                                    className="form-control custom-input"
                                    placeholder="Domicilio Nro"
                                    aria-label="Username"
                                    onChange={handleChange}
                                    name="domicilio_nro"
                                    value={labelCliente.domicilio_nro}
                                />
                            </div>
                            <div className="col-6">
                                <label>Localidad</label>
                                <input
                                    type="text"
                                    className="form-control custom-input"
                                    placeholder="Localidad"
                                    aria-label="Username"
                                    onChange={handleChange}
                                    name="localidad"
                                    value={labelCliente.localidad}
                                />
                            </div>
                            <div className="col-3">
                                <label>Domicilio Piso</label>
                                <input
                                    type="text"
                                    className="form-control custom-input"
                                    placeholder="Piso"
                                    aria-label="Username"
                                    onChange={handleChange}
                                    name="domicilio_piso"
                                    value={labelCliente.domicilio_piso}
                                />
                            </div>
                            <div className="col-3">
                                <label>Domicilio Dpto</label>
                                <input
                                    type="text"
                                    className="form-control custom-input"
                                    placeholder="Dpto"
                                    aria-label="Username"
                                    onChange={handleChange}
                                    name="domicilio_dpto"
                                    value={labelCliente.domicilio_dpto}
                                />
                            </div>
                            <div className="col-12">
                                <label>Observación</label>
                                <textarea
                                    className="form-control custom-input"
                                    placeholder="Observación del cliente"
                                    aria-label="Username"
                                    onChange={handleChange}
                                    name="observacion"
                                    value={labelCliente.observacion}
                                />
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <ModalFooter>
                    <button
                        className="modal-button-cancel"
                        onClick={() => {
                            setShowElimCliente(true)
                            setShowDetalleCliente(false)
                        }}
                    >
                        Eliminar Cliente
                    </button>
                    <button
                        className="modal-button-create"
                        onClick={() => actualizar(labelCliente)}
                    >
                        Actualizar Cliente
                    </button>
                    <button
                        className="modal-button-cancel"
                        onClick={handleClose}
                    >
                        Cancelar
                    </button>
                </ModalFooter>
            </Modal>
        </>
    );
}

export default ModalDetalleCliente;
