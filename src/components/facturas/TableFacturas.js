import React from 'react'
import {usePedidos} from '../../context/pedidos-context'
function TableFacturas() {
    const {facturas} = usePedidos();
    return (
        <div>
            <div className="tabla3 ">
                <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th  scope="col">ID</th>
                        <th scope="col">Cliente ID</th>
                        <th scope="col">Valor Total</th>
                        <th scope="col">Valor Cubierto</th>
                        <th scope="col">Pedido ID</th>
                    </tr>
                </thead>
                <tbody>
                {facturas.map((f)=>(
                    <tr>
                        <td>{f.id}</td>
                        <td>{f.cliente_id}</td>
                        <td>${f.valor_total}</td>
                        <td>${f.valor_cubierto}</td>
                        <td>{f.pedido_id}</td>
                    </tr>
                ))}
                </tbody>            
                </table>
            </div>
        </div>
    )
}

export default TableFacturas
