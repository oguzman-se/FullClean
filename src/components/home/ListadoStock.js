import React from "react";

export class ListadoStock extends React.PureComponent {
    render() {
        const { products } = this.props;
        return (
            <div className="container-fluid bordes printRemito">
                <div className="row">
                    <div className="col-12">
                        <div className="tabla table6">
                            <table
                                className="table table-bordered"
                                style={{ textAlign: "center" }}
                                id="tablaStock"
                            >
                                <thead className="thead-dark">
                                    <tr>
                                        <th
                                            scope="col"
                                            style={{ width: "10%" }}
                                        >
                                            N°
                                        </th>
                                        <th
                                            scope="col"
                                            style={{ width: "50%" }}
                                        >
                                            Nombre
                                        </th>
                                        <th
                                            scope="col"
                                            style={{ width: "10%" }}
                                        >
                                            Stock
                                        </th>
                                        <th
                                            scope="col"
                                            style={{ width: "15%" }}
                                        >
                                            Costo
                                        </th>
                                        <th
                                            scope="col"
                                            style={{ width: "15%" }}
                                        >
                                            Precio
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {products.map((p, i) => {
                                        return (
                                            <>
                                                <tr>
                                                    <td>{i+1}</td>
                                                    <td>{p.nombre}</td>
                                                    <td>{p.stock}</td>
                                                    <td>{p.costo}</td>
                                                    <td>{p.precio}</td>
                                                </tr>
                                            </>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
