import React, { useState } from "react";
import ModalNota from "../pedidos/modales/ModalNota";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
function PedidosItem(props) {
    const { pedido, Allclientes, masterSubmit } = props;
    const [showNota, setShowNota] = useState(false);
    return (
        <tr>
            <td>{pedido.id}</td>
            <td>
                {Allclientes.map((cliente) => {
                    if (cliente.id === pedido.cliente_id) {
                        return cliente.nombre;
                    }
                    return "";
                })}
            </td>
            {pedido.estado === "pendiente" ? (
                <OverlayTrigger
                    overlay={
                        <Tooltip id="tooltip-disabled">{pedido.notas}</Tooltip>
                    }
                >
                    <span className="d-inline-block">
                        <td className="pendiente">
                            {pedido.estado.toUpperCase()}
                        </td>
                    </span>
                </OverlayTrigger>
            ) : (
                <td className="confirm">{pedido.estado.toUpperCase()}</td>
            )}

            <td>${pedido.valor_total}</td>
            <td>{pedido.fechayhora.toUpperCase()}</td>
            <button className="iconos" onClick={() => masterSubmit(pedido)}>
                <i class="bi bi-plus-circle-fill"></i>
            </button>
            <button className="iconos" onClick={() => setShowNota(true)}>
                <i class="bi bi-stickies"></i>
            </button>

            <ModalNota
                setShowNota={setShowNota}
                showNota={showNota}
                pedido={pedido}
            />
        </tr>
    );
}

export default PedidosItem;
