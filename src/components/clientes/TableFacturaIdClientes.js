import React, { useState } from "react";
import ModalInfoFactura from "./ModalInfoFactura";
import ModalPago from "./ModalPago";

function TableFacturaId({ facturasXcliente, filtroBuscador }) {
    const [showPago, setShowPago] = useState(false);
    const [showFactura, setShowFactura] = useState(false);
    const [currentFact, setCurrentFact] = useState({});

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
                        <th scope="col">N° Factura</th>
                        <th scope="col">Valor Total</th>
                        <th scope="col">Pagado</th>
                        <th scope="col">Estado</th>
                        <th scope="col">Pagar</th>
                        <th scope="col">Info</th>
                    </tr>
                </thead>
                <tbody>
                    {facturasXcliente.filter(filtroBuscador).map((f) => (
                        <tr>
                            <td>{f.id}</td>
                            <td>{f?.num_factura ? f.num_factura : ""}</td>
                            <td>${f.valor_total}</td>
                            <td>{`$${f.valor_cubierto}`}</td>
                            <td>
                                {f.estado && f.estado === "pendiente"
                                    ? "PENDIENTE A FACTURAR"
                                    : "FACTURADO"}
                            </td>
                            {f?.valor_cubierto === f?.valor_total ? (
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
                            <td>
                                <button
                                    className="iconos"
                                    onClick={() => {
                                        setCurrentFact(f);
                                        setShowFactura(true);
                                    }}
                                >
                                    <i className="bi bi-plus-circle-fill"></i>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <ModalPago
                showPago={showPago}
                setShowPago={setShowPago}
                factura={currentFact}
            />
            <ModalInfoFactura
                show={showFactura}
                setShow={setShowFactura}
                currentFact={currentFact}
                calculateDay={calculateDay}
            />
        </div>
    );
}

export default TableFacturaId;
