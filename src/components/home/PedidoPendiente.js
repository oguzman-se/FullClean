import React, {useState, useEffect} from 'react'
import {usePedidos} from '../../context/pedidos-context'

function PedidoPendiente() {
    const {pedidoDetalle, pedidos} = usePedidos()
    const [detalle, setDetalle] = useState()
    
    useEffect(() => {
        funcionDetalle()
        },
        // eslint-disable-next-line
        [detalle])
    
        const funcionDetalle = () => {
        pedidoDetalle.filter(product => product.pedido_id === 133).map((product)=> {
                setDetalle(product)
                console.log("detalle", detalle)
            })
        }

    return (
        <div className="tabla2">
                <table className="table">
                <thead className="thead-dark">
                    <tr >
                        <th  scope="col">ID</th>
                        <th scope="col">Cliente ID</th>
                        <th scope="col">Estado</th>
                        <th scope="col">Valor Total</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    
                    {pedidos.filter(pedido => pedido.estado === "pendiente").map((pedido)=>(
                        <tr>
                            <td>{pedido.id}</td>
                            <td>{pedido.cliente_id}</td>
                            <td>{pedido.estado}</td>
                            <td>{pedido.valor_total}</td>                            
                        </tr>
                        ))}
                    
                </tbody>            
                </table>
        </div>
    )
}

export default PedidoPendiente
