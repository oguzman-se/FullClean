import React from 'react'

function TableFacturaId(props) {
    const {facturasXcliente, Allclientes} = props;
    return (
        <div className="col-md-12 tabla110 ">
                <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th  scope="col">ID</th>
                        <th scope="col">Cliente</th>
                        <th scope="col">Valor Total</th>
                        <th scope="col">Valor Cubierto</th>
                        <th scope="col">Fecha y Hora</th>
                    </tr>
                </thead>
                <tbody>
                {facturasXcliente.map((f)=>(
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
                        <td>${f.valor_cubierto}</td>
                        <td>{f.fechayhora}</td>
                        </tr>
                        ))}
                </tbody>            
                </table>
            
        </div>
    )
}

export default TableFacturaId
