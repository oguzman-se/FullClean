import React, { useState } from "react";
import { useHome } from "../../context/home-context";
import ModalCargarCliente from "../home/modals/ModalCargarCliente";
import { useToasts } from "react-toast-notifications";

function SearchClientes(props) {
    const {
        Allclientes,
        setShowNuevoCliente,
        setLabelCliente,
        setFacturaXcliente,
        obtPedidoXcliente,
        setPedidosOrFactura,
        setArrGenerateFact,
        getDeudaXcliente,
        roundDeuda,
    } = useHome();
    const [buscarCliente, setBuscarCliente] = useState("");
    const { addToast } = useToasts();
    function buscadorClientes(buscarCliente) {
        return function (x) {
            return (
                x.nombre.toLowerCase().includes(buscarCliente) ||
                !buscarCliente ||
                x.telefono.toLowerCase().includes(buscarCliente) ||
                !buscarCliente ||
                x.domicilio.toLowerCase().includes(buscarCliente) ||
                !buscarCliente
            );
        };
    }
    const onAddCliente = (clientes) => {
        setLabelCliente(clientes);
        setFacturaXcliente([]);
        setArrGenerateFact([]);
        getDeudaXcliente(clientes.id);
        setPedidosOrFactura(true);
        obtPedidoXcliente(clientes.id);
        addToast("Cliente agregado", {
            appearance: "success",
            autoDismiss: true,
        });
    };
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <button
                        className="btn btn-custom-clientes col-md-3"
                        onClick={() => setShowNuevoCliente(true)}
                    >
                        Nuevo Cliente
                    </button>
                    {Allclientes && (
                        <input
                            placeholder="Buscar cliente..."
                            className="col-md-9 form-control searchCli"
                            onChange={(e) =>
                                setBuscarCliente(e.target.value.toLowerCase())
                            }
                        />
                    )}

                    <div
                        className="col-md-12 tabla4"
                        style={{ height: "75vh" }}
                    >
                        <table className="table">
                            <thead className="thead-dark">
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Nombre</th>
                                    <th scope="col">Domicilio</th>
                                    <th scope="col">Deuda</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="hover-tr" onClick={onAddCliente}>
                                    <td>0</td>
                                    <td>Consumidor Final</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                {Allclientes.filter(
                                    buscadorClientes(buscarCliente)
                                ).map((clientes) => (
                                    <tr
                                        className="hover-tr"
                                        onClick={() => onAddCliente(clientes)}
                                    >
                                        <td>{clientes.id}</td>
                                        <td>{clientes.nombre}</td>
                                        <td>{clientes.domicilio} - {clientes.domicilio_nro}</td>
                                        <td>
                                            $
                                            {clientes.deuda
                                                ? roundDeuda(clientes.deuda)
                                                : 0}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="row" style={{paddingTop: 5}}>
                    <div className="col-6">Deuda total:</div>
                    <div className="col-6" style={{ textAlign: "right", fontWeight: 'bold', paddingRight: 30 }}>
                        $
                        {Allclientes.length > 0
                            ? roundDeuda(
                                  Allclientes.reduce((acc, curr) => {
                                      if (curr.deuda > 0) {
                                          return (acc += curr.deuda);
                                      } else {
                                          return acc;
                                      }
                                  }, 0)
                              )
                            : ""}
                    </div>
                </div>
            </div>

            <ModalCargarCliente />
        </div>
    );
}

export default SearchClientes;
