import React from 'react'
import PedidosItem from './PedidosItem'
import {useHome} from '../../context/home-context'
import ModalPendienteConf from '../home/modals/ModalPedidoPendienteConfirmar'
import {usePedidos} from '../../context/pedidos-context'
function PedidoPendienteBody(props) {
    const {pedidos, currentPedido, setCurrentPedido, helpCurrentPedido} = usePedidos()
    const {Allclientes} = useHome()
    const {setBuscarPedidos, buscadorPedidos, buscarPedidos, masterSubmit, showPendiente,
        setShowPendiente, onSubmit, setShowPedidosPendientes, showPedidosPendientes} = props;
    return(
        <div>
        <div>
            {pedidos && (
            <input className="col-md-12 form-control modal-search"  type="text"
            placeholder="Buscar" aria-label="Search"
            onChange={e => setBuscarPedidos(e.target.value.toLowerCase())}
            />
            )}
        </div>
        
        <div className="lista">
            <h5>Lista de Pedidos</h5>
        </div>
        <div className="tabla">
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
            {pedidos.filter(pedido => pedido.estado === "pendiente" || "confirmado")
            .filter(buscadorPedidos(buscarPedidos)).map((pedido)=>{
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
