import React from "react";

export class ComponentToPrint extends React.PureComponent {
    render() {
        const { cartItems } = this.props;
        return (
            <div className="container-fluid bordes printRemito">
                <div className="row bb">
                    <div className="col-6 br info">
                        <label className="col-3">LOGO</label>
                        <label className="col-9">
                            Full Clean Express
                            <span>
                                VENTA Y DISTRIBUCION DE PRODUCTOS DE LIMPIEZA
                            </span>
                        </label>
                        <label className="col-12 direc">
                            BERUTI 70 - (1870) AVELLANEDA
                        </label>
                        <label className="col-12 direc" style={{ top: -10 }}>
                            Buenos Aires - Cel.: 11 5017 - 4060
                        </label>
                        <label className="col-12 redes" style={{ top: -15 }}>
                            <i
                                className="bi bi-facebook"
                                style={{ marginRight: 16 }}
                            ></i>
                            FULL CLEAN EXPRESS
                        </label>
                        <label className="col-12 redes" style={{ top: -20 }}>
                            <i
                                className="bi bi-instagram"
                                style={{ marginRight: 8 }}
                            ></i>{" "}
                            @fullcleanexpress
                        </label>
                    </div>
                    <div className="col-6">
                        <div className="row">
                            <div
                                className="col-3 br bb"
                                style={{
                                    textAlign: "center",
                                    fontWeight: "bold",
                                    fontSize: 38,
                                }}
                            >
                                x
                            </div>
                            <div
                                className="col-9 bb"
                                style={{
                                    textAlign: "center",
                                    fontWeight: "bold",
                                    fontSize: 30,
                                    marginTop: 5,
                                }}
                            >
                                RECIBO
                            </div>
                        </div>
                        <div className="row">
                            <div
                                className="col-12"
                                style={{
                                    paddingTop: 35,
                                }}
                            >
                                <div
                                    style={{
                                        border: "1px solid black",
                                        width: 200,
                                        height: 50,
                                        margin: "auto",
                                    }}
                                >
                                    <div
                                        style={{
                                            borderLeft: "1px solid black",
                                            borderRight: "1px solid black",
                                            width: 75,
                                            height: 50,
                                            margin: "auto",
                                        }}
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 bb">
                        <div style={{ marginTop: 15 }}>
                            Señor/es:...............................................................................................................................
                        </div>
                        <div style={{ marginTop: 10 }}>
                            Domicilio:..............................................................
                            Loc:
                            ........................................................
                        </div>
                    </div>
                </div>
                <div className="row bb">
                    <div
                        className="col-1 br"
                        style={{ height: 50, paddingTop: 15 }}
                    >
                        IVA
                    </div>
                    <div
                        className="col-6 br"
                        style={{
                            textAlign: "center",
                            fontSize: 13,
                            height: 50,
                            paddingTop: 5,
                        }}
                    >
                        <div className="withCuadrado">
                            RESP.ISNC.<div></div>
                        </div>
                        <div className="withCuadrado">
                            RESP. MONOT.<div></div>
                        </div>
                        <div className="withCuadrado">
                            NO RESP<div></div>
                        </div>
                        <div className="withCuadrado">
                            EXENTO<div></div>
                        </div>
                        <div className="withCuadrado">
                            CONS FINAL<div></div>
                        </div>
                    </div>
                    <div
                        className="col-5"
                        style={{ height: 50, paddingTop: 20 }}
                    >
                        C.U.I.T.: .....................................
                    </div>
                </div>
                <div className="row bb">
                    <div
                        className="col-7 br"
                        style={{ height: 35, paddingTop: 10 }}
                    >
                        Condición de Venta:
                        <div
                            className="withCuadrado"
                            style={{ marginLeft: 10 }}
                        >
                            Contado<div></div>
                        </div>
                        <div className="withCuadrado">
                            Cta. Cte.<div></div>
                        </div>
                    </div>
                    <div
                        className="col-5"
                        style={{ height: 35, paddingTop: 10 }}
                    >
                        Remito / s N° : ...........................
                    </div>
                </div>
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
                    <div className="col-3" style={{textAlign: 'center', fontWeight: 'bold'}}>
                        $
                        {cartItems.reduce((acc, curr) => {
                            let toReturn = acc + curr.precio * curr.qty;
                            return toReturn;
                        }, 0)}
                    </div>
                </div>
            </div>
        );
    }
}
