import React, { useState } from "react";
import ModalPago from "./ModalPago";
function TableFacturaId(props) {
    const { facturasXcliente, Allclientes, filtroBuscador } = props;
    const [showPago, setShowPago] = useState(false);
    const [currentFact, setCurrentFact] = useState({});

    return (
        <div className="col-md-12 tabla110 ">
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Cliente</th>
                        <th scope="col">Valor Total</th>
                        <th scope="col">
                            {facturasXcliente && facturasXcliente[0]?.estado
                                ? "Estado"
                                : "Valor Cubierto"}
                        </th>
                        {facturasXcliente && facturasXcliente[0]?.estado ? (
                            <th scope="col">Fecha y Hora</th>
                        ) : (
                            <th scope="col">Pagar</th>
                        )}
                    </tr>
                </thead>
                <tbody>
                    {facturasXcliente.filter(filtroBuscador).map((f) => (
                        <tr>
                            <td>{f.id}</td>
                            <td>
                                {Allclientes.map((c) => {
                                    if (c.id === f.cliente_id) {
                                        return c.nombre;
                                    }
                                })}
                            </td>
                            <td>${f.valor_total}</td>
                            {f.estado ? (
                                f.estado === "pendiente" ? (
                                    <td className="pendiente">
                                        {f.estado.toUpperCase()}
                                    </td>
                                ) : (
                                    <td className="confirm">
                                        {f.estado.toUpperCase()}
                                    </td>
                                )
                            ) : (
                                <td>{`$${f.valor_cubierto}`}</td>
                            )}
                            {f.estado ? (
                                <td>{f.fechayhora}</td>
                            ) : f?.valor_cubierto === f?.valor_total ? (
                                <td
                                    style={{
                                        color: "tomato",
                                    }}
                                >
                                    PAGADA
                                </td>
                            ) : (
                                <td
                                    onClick={() => {
                                        setCurrentFact(f);
                                        setShowPago(true);
                                    }}
                                    style={{
                                        color: "tomato",
                                        cursor: "pointer",
                                    }}
                                >
                                    NUEVO PAGO
                                </td>
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
            <ModalPago
                showPago={showPago}
                setShowPago={setShowPago}
                factura={currentFact}
            />
        </div>
    );
}

export default TableFacturaId;
