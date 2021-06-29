import React, { useState } from "react";
import { ModalFooter } from "react-bootstrap";
import { useHome } from "../../context/home-context";
import clienteAxios from "../../config/clienteAxios";
import { useToasts } from "react-toast-notifications";
function CargarClientes(props) {
    const { handleClose } = props;
    const { addToast } = useToasts();
    const {
        Allclientes,
        setAllClientes,
        setLabelCliente,
        setCurrentMetodo,
        currentMetodo,
    } = useHome([]);
    const [cliente, setCliente] = useState({
        nombre: "",
        domicilio: "",
        telefono: "",
    });

    const BigClose = () => {
        handleClose();
        setCurrentMetodo({ ...currentMetodo, metodo: "efectivo" });
    };

    const submit = async () => {
        await clienteAxios
            .post("/clientes", cliente)
            .then((res) => {
                //setLabelCliente(cliente);
                //console.log(res.data);
                const getClientes = async () => {
                    await clienteAxios
                        .get("/clientes")
                        .then((r) => {
                            let that = r.data.filter(
                                (c) => c.nombre === cliente.nombre
                            );
                            setLabelCliente(that[0]);
                            setAllClientes(r.data);
                            handleClose();
                            addToast("Cliente creado", {
                                appearance: "success",
                                autoDismiss: true,
                            });
                        })
                        .catch((r) => {
                            console.log("error get", r);
                            console.log(Allclientes);
                        });
                };
                getClientes();
            })
            .catch((err) => {
                console.log("error post", err);
            });
    };

    function handle(e) {
        const newCliente = { ...cliente };
        newCliente[e.target.name] = e.target.value;
        setCliente(newCliente);
    }
    return (
        <div>
            <div className="container-fluid">
                <div className="row rowModalCliente">
                    <div className="col-6">
                        <label>Nombre</label>
                        <input
                            type="text"
                            className="form-control custom-input"
                            placeholder="Nombre"
                            aria-label="Username"
                            onChange={handle}
                            name="nombre"
                            value={cliente.nombre}
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
                            onChange={handle}
                            name="mail"
                            value={cliente.mail}
                        />
                    </div>
                    <div className="col-6">
                        <label>Teléfono</label>
                        <input
                            type="text"
                            className="form-control custom-input"
                            placeholder="Teléfono"
                            aria-label="Username"
                            onChange={handle}
                            name="telefono"
                            value={cliente.telefono}
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
                            onChange={handle}
                            name="telefono2"
                            value={cliente.telefono2}
                        />
                    </div>
                    <div className="col-6">
                        <label>CUIT</label>
                        <input
                            type="text"
                            className="form-control custom-input"
                            placeholder="CUIT"
                            aria-label="Username"
                            onChange={handle}
                            name="cuit"
                            value={cliente.cuit}
                        />
                    </div>
                    <div className="col-6">
                        <label>Condición frente al IVA</label>
                        <select
                            onChange={handle}
                            value={cliente.cond_iva}
                            name="cond_iva"
                            className="select labelsm"
                        >
                            <option value="no_definir">No definir</option>
                            <option value="resp_inscrip">
                                Responsable Inscripto
                            </option>
                            <option value="resp_mono">
                                Responsable Monotributo
                            </option>
                            <option value="no_resp">No Responsable</option>
                            <option value="exento">Exento</option>
                            <option value="cons_final">Consumidor Final</option>
                        </select>
                    </div>
                    <div className="col-8">
                        <label>Domicilio</label>
                        <input
                            type="text"
                            className="form-control custom-input"
                            placeholder="Domicilio"
                            aria-label="Username"
                            onChange={handle}
                            name="domicilio"
                            value={cliente.domicilio}
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
                            onChange={handle}
                            name="domicilio_nro"
                            value={cliente.domicilio_nro}
                        />
                    </div>
                    <div className="col-6">
                        <label>Localidad</label>
                        <input
                            type="text"
                            className="form-control custom-input"
                            placeholder="Localidad"
                            aria-label="Username"
                            onChange={handle}
                            name="localidad"
                            value={cliente.localidad}
                        />
                    </div>
                    <div className="col-3">
                        <label>Domicilio Piso</label>
                        <input
                            type="text"
                            className="form-control custom-input"
                            placeholder="Piso"
                            aria-label="Username"
                            onChange={handle}
                            name="domicilio_piso"
                            value={cliente.domicilio_piso}
                        />
                    </div>
                    <div className="col-3">
                        <label>Domicilio Dpto</label>
                        <input
                            type="text"
                            className="form-control custom-input"
                            placeholder="Dpto"
                            aria-label="Username"
                            onChange={handle}
                            name="domicilio_dpto"
                            value={cliente.domicilio_dpto}
                        />
                    </div>
                    <div className="col-12">
                        <label>Observación</label>
                        <textarea
                            className="form-control custom-input"
                            placeholder="Observación del cliente"
                            aria-label="Username"
                            onChange={handle}
                            name="observacion"
                            value={cliente.observacion}
                        />
                    </div>
                </div>
            </div>
            <ModalFooter>
                <button className="modal-button-create" onClick={submit}>
                    Crear & Asignar Cliente
                </button>
                <button className="modal-button-cancel" onClick={BigClose}>
                    Cancelar
                </button>
            </ModalFooter>
        </div>
    );
}

export default CargarClientes;
