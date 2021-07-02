import React, { useState } from "react";
import CheckboxPedido from "./CheckboxPedido";
import CheckboxPedidoPagado from "./CheckboxPedidoPagado";

function TablePedidosId({ facturasXcliente, filtroBuscador }) {
    const calculateDay = (diaSQL) => {
        let dateObj = new Date(diaSQL);
        let month = dateObj.getUTCMonth() + 1; //months from 1-12
        let day = dateObj.getUTCDate();
        let year = dateObj.getUTCFullYear();
        return `${day}-${month}-${year} ${diaSQL.substr(11, 5)}`;
    };

    return (
        <div className="col-md-12 tabla110 ">
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Pagado</th>
                        <th scope="col">Método de pago</th>
                        <th scope="col">Valor Total</th>
                        <th scope="col">Estado</th>
                        <th scope="col">Estado de facturación</th>
                        <th scope="col">Fecha y Hora</th>
                    </tr>
                </thead>
                <tbody>
                    {facturasXcliente.filter(filtroBuscador).map((f) => (
                        <tr>
                            <td>{f.id}</td>
                            <td>
                                {f.status_factura === "SIN FACTURAR" ? (
                                    <CheckboxPedidoPagado pedido={f} />
                                ) : (
                                    ""
                                )}
                            </td>
                            <td>{f.metodo_pago}</td>
                            <td>${f.valor_total}</td>
                            {f.estado === "pendiente" ? (
                                <td className="pendiente">
                                    {f.estado?.toUpperCase()}
                                </td>
                            ) : (
                                <td className="confirm">
                                    {f.estado?.toUpperCase()}
                                </td>
                            )}
                            <td>
                                {f.status_factura === "SIN FACTURAR" ? (
                                    <>
                                        SIN FACTURAR{" "}
                                        <CheckboxPedido pedido={f} />
                                    </>
                                ) : (
                                    f.status_factura
                                )}
                            </td>
                            <td>
                                {f.fechayhora ? calculateDay(f.fechayhora) : ""}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default TablePedidosId;
