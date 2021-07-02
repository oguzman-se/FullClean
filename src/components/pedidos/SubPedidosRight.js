import React, { useState } from "react";
import Button from "../home/Button";
import { usePedidos } from "../../context/pedidos-context";
import ModalRecibo from "../home/modals/ModalRecibo";
import ModalRemito from "../home/modals/ModalRemito";
function SubPedidosRight() {
    const { currentPedido } = usePedidos();

    const [showRemito, setShowRemito] = useState(false);
    const [showTicket, setShowTicket] = useState(false);

    return (
        <div className="container group-vh-5 subpedidosright">
            <div className="row ">
                <div className="col-md-6"></div>
                <div className="col-3 ajuste"></div>
                <div className="col-3 ajuste">
                    <button
                        type="button"
                        className="btn btn-custom"
                        onClick={() => setShowRemito(true)}
                    >
                        Recibo
                    </button>
                </div>
            </div>
            <div className="row ">
                <div className="col-md-6"></div>
                <div className="col-3 ajuste"></div>
                <div className="col-3 ajuste">
                    <button
                        type="button"
                        className="btn btn-custom"
                        onClick={() => setShowTicket(true)}
                    >
                        Remito
                    </button>
                </div>
            </div>
            <ModalRecibo
                type="pedidos"
                showRemito={showRemito}
                setShowRemito={setShowRemito}
            />
            <ModalRemito
                type="pedidos"
                showRemito={showTicket}
                setShowRemito={setShowTicket}
            />
        </div>
    );
}
export default SubPedidosRight;
