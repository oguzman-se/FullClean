import React from "react";

const ListadoRecibo = ({ cartItems }) => {
    return (
        <>
            <div className="tabla table6">
                <table
                    className="table table-bordered"
                    style={{ textAlign: "center" }}
                >
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col" style={{ width: "10%" }}>
                                Cantidad
                            </th>
                            <th scope="col" style={{ width: "55%" }}>
                                Detalle
                            </th>
                            <th scope="col" style={{ width: "15%" }}>
                                P. Unit.
                            </th>
                            <th scope="col" style={{ width: "20%" }}>
                                Importe
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartItems.map((c) => (
                            <tr>
                                <th scope="row">{c.qty}</th>
                                <td>{c.nombre}</td>
                                <td>{c.precio}</td>
                                <td>{c.precio * c.qty}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="row bt">
                <div className="col-9 br">Total</div>
                <div
                    className="col-3"
                    style={{ textAlign: "center", fontWeight: "bold" }}
                >
                    $
                    {cartItems.reduce((acc, curr) => {
                        let toReturn = acc + curr.precio * curr.qty;
                        return toReturn;
                    }, 0)}
                </div>
            </div>
        </>
    );
};

export default ListadoRecibo;
