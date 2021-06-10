import React, { useEffect } from "react";
import PedidosItem from "./PedidosItem";
import { useHome } from "../../context/home-context";
import ModalPendienteConf from "../home/modals/ModalPedidoPendienteConfirmar";
import { usePedidos } from "../../context/pedidos-context";
import Busqueda from "./Busqueda";

function PedidoPendienteBody(props) {
    const {
        pedidos,
        currentPedido,
        setCurrentPedido,
        helpCurrentPedido,
    } = usePedidos();
    const { Allclientes } = useHome();
    const {
        search,
        setSearch,
        filtroBuscador,
        masterSubmit,
        showPendiente,
        setShowPendiente,
        onSubmit,
        setShowPedidosPendientes,
        showPedidosPendientes,
    } = props;

    return (
        <div>
            <Busqueda search={search} setSearch={setSearch} />
            <div className="lista">
                <h5>Lista de Pedidos</h5>
            </div>
            <div className="tabla2">
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Nombre del Cliente</th>
                            <th scope="col">Estado</th>
                            <th scope="col">Valor Total</th>
                            <th scope="col">Fecha y Hora</th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {pedidos.filter(filtroBuscador).map((pedido) => {
                            return (
                                <PedidosItem
                                    Allclientes={Allclientes}
                                    masterSubmit={masterSubmit}
                                    pedido={pedido}
                                />
                            );
                        })}
                    </tbody>
                </table>
                <ModalPendienteConf
                    setCurrentPedido={setCurrentPedido}
                    helpCurrentPedido={helpCurrentPedido}
                    showPendiente={showPendiente}
                    setShowPendiente={setShowPendiente}
                    onSubmit={onSubmit}
                    currentPedido={currentPedido}
                    setShowPedidosPendientes={setShowPedidosPendientes}
                    showPedidosPendientes={showPedidosPendientes}
                />
            </div>
        </div>
    );
}

export default PedidoPendienteBody;
