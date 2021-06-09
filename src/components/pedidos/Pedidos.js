import React, {useEffect} from "react";
import PedidosItem from "./PedidosItem";
import { useHome } from "../../context/home-context";
import ModalPendienteConf from "../home/modals/ModalPedidoPendienteConfirmar";
import { usePedidos } from "../../context/pedidos-context";

function PedidoPendienteBody(props) {
    const {
        pedidos,
        currentPedido,
        setCurrentPedido,
        helpCurrentPedido,
    } = usePedidos();
    const { Allclientes } = useHome();
    const {
        setBuscarPedidos,
        buscadorPedidos,
        buscarPedidos,
        masterSubmit,
        showPendiente,
        setShowPendiente,
        onSubmit,
        setShowPedidosPendientes,
        showPedidosPendientes,
    } = props;

    useEffect(() => {
        console.log('pedidos: ', pedidos);
    }, [pedidos]);

    return (
        <div>
            <div className="container-fluid">
        <div className="row">
            <input className="col-md-12 form-control searchPed ajustes" placeholder="Buscar pedido..."/>
        </div>
        </div>
        <div>
            <div className="row">
                <div className="col-md-6 ">
                    <input className="form-control searchPed" placeholder="Desde"/>
                    <input className="form-control searchPed" placeholder="Hasta"/>
                </div>
                <div className="col-md-3">
                    <select className="select labelsm">
                    <option value="efectivo" selected>Efectivo</option>
                    <option value="tarjeta credito">Tarjeta de credito</option>
                    <option value="tarjeta debito">Tarjeta de Debito</option>
                    <option value="cuenta corriente">Cuenta Corriente</option>
                </select>    
                </div>
                <div className="col-md-3">
                    <select className="select labelsm">
                    <option value="efectivo" selected>Efectivo</option>
                    <option value="tarjeta credito">Tarjeta de credito</option>
                    <option value="tarjeta debito">Tarjeta de Debito</option>
                    <option value="cuenta corriente">Cuenta Corriente</option>
                </select>    
                </div>
            </div>
        </div>

            <div className="lista">
                <h5>Lista de Pedidos</h5>
            </div>
        <div className="tabla2">
            <table className="table">
            <thead className="thead-dark">
                <tr >
                    <th  scope="col">ID</th>
                    <th scope="col">Nombre del Cliente</th>
                    <th scope="col">Estado</th>
                    <th scope="col">Valor Total</th>
                    <th scope="col">Fecha y Hora</th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
            {pedidos.map((pedido)=>{
                return(
                    <PedidosItem
                            Allclientes={Allclientes}
                            masterSubmit={masterSubmit}
                            pedido={pedido}
                        />
            )
            }
            )}
               
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
    )
        
}

export default PedidoPendienteBody;
