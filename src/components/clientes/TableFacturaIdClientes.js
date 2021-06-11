import React from 'react'
import {useHome} from '../../context/home-context'
function TableFacturaId(props) {
    const {facturasXcliente, Allclientes, filtroBuscador} = props;
    return (
        <div className="col-md-12 tabla110 ">
                <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th  scope="col">ID</th>
                        <th scope="col">Cliente</th>
                        <th scope="col">Valor Total</th>
                        <th scope="col">{facturasXcliente && facturasXcliente[0]?.estado ? "Estado" : "Valor Cubierto"}</th>
                        <th scope="col">Fecha y Hora</th>
                    </tr>
                </thead>
                <tbody>
                {facturasXcliente.filter(filtroBuscador).map((f)=>(
                    <tr>
                        <td>{f.id}</td>
                        <td>{
                            Allclientes.map((c)=>{
                                if(c.id === f.cliente_id){
                                    return(c.nombre)
                                }
                            })
                        }</td>
                        <td>${f.valor_total}</td>
                        {f.estado ? f.estado === "pendiente" ?<td className="pendiente">{f.estado.toUpperCase()}</td>
                        : <td className="confirm">{f.estado.toUpperCase()}</td> : <td>{`$${f.valor_cubierto}`}</td>}
                        <td>{f.fechayhora}</td>
                        </tr>
                        ))}
                </tbody>            
                </table>
            
        </div>
    )
}

export default TableFacturaId
