import React from "react";
import { usePedidos } from "../../context/pedidos-context";
import { useHome } from "../../context/home-context";
import { useToasts } from "react-toast-notifications";
function TableFacturas(props) {
    const { addToast } = useToasts();
    const {
        facturas,
        currentFactura,
        setCurrentFactura,
        agregarOno,
        obtenerFacturasId,
    } = usePedidos();
    const { filtroBuscador } = props;
    const { Allclientes } = useHome();
    const onAddFactura = async (factura) => {
        obtenerFacturasId(factura.id);
        await setCurrentFactura(factura);
        addToast("Factura agregada", {
            appearance: "success",
            autoDismiss: true,
        });
    };
    return (
        <div>
            <div className="tabla80 ">
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">N° Factura</th>
                            <th scope="col">Cliente</th>
                            <th scope="col">Valor Total</th>
                            <th scope="col">Pagado</th>
                            <th scope="col">Estado</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {facturas.filter(filtroBuscador).map((factura) => (
                            <tr>
                                <td>{factura.id}</td>
                                <td>
                                    {factura?.num_factura
                                        ? factura.num_factura
                                        : ""}
                                </td>
                                <td>{factura.nombre}</td>
                                <td>${factura.valor_total}</td>
                                <td>${factura.valor_cubierto}</td>
                                <td>
                                    {(factura.estado &&
                                        factura.estado === "pendiente") ||
                                    factura.estado === null
                                        ? "PENDIENTE A FACTURAR"
                                        : "FACTURADO"}
                                </td>
                                <button
                                    className="iconos"
                                    onClick={() => onAddFactura(factura)}
                                >
                                    <i class="bi bi-plus-circle-fill"></i>
                                </button>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default TableFacturas;
