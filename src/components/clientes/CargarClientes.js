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
    const [clientes, setClientes] = useState({
        id: "",
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
            .post("/clientes", {
                nombre: clientes.nombre,
                domicilio: clientes.domicilio,
                telefono: clientes.telefono,
            })
            .then((res) => {
                setLabelCliente(clientes);
                console.log(res.data);
                const getClientes = async () => {
                    await clienteAxios
                        .get("/clientes")
                        .then((r) => {
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
        const newCliente = { ...clientes };
        newCliente[e.target.id] = e.target.value;
        setClientes(newCliente);
    }
    return (
        <div>
            <label>Nombre</label>
            <input
                type="text"
                className="form-control custom-input"
                placeholder=""
                aria-label="Username"
                onChange={(e) => handle(e)}
                id="nombre"
                value={clientes.nombre}
            />
            <label>Domicilio</label>
            <input
                type="text"
                className="form-control custom-input"
                placeholder=""
                aria-label="Username"
                onChange={(e) => handle(e)}
                id="domicilio"
                value={clientes.domicilio}
            />
            <label>Telefono</label>
            <input
                type="text"
                className="form-control custom-input"
                placeholder=""
                aria-label="Username"
                onChange={(e) => handle(e)}
                id="telefono"
                value={clientes.telefono}
            />
            <ModalFooter>
                <button
                    className="modal-button-create"
                    onClick={(e) => submit(e)}
                >
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
