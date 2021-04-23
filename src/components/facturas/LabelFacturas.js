import React from 'react'

function LabelFacturas() {
    return (
        <div className="container-fluid">
            <div className="row">
                
                <label className="col-md-12 label-border">Factura: 1-65468449</label>
                <label className="col-md-12 label-border">Cliente: Juan Perez</label>
                <label className="col-md-12 label-border">Domicilio: Av. Mitre 159</label>
                
                <label className="col-md-7 label-border">Importe: $15.354</label>
                <button className="col-md-4 btn btn-facturas">Asociar Pedido</button>
        
            </div>
            
            <div className="row">
                <label className="col-md-12 label-facturas">Listado de Pedidos Asociados a la Factura</label>
            
                
                <div className="col-md-12 tabla2">
                    <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th  scope="col">ID</th>
                            <th scope="col">Empresa</th>
                            <th scope="col">Total</th>
                            <th scope="col">Estado</th>
                            <th scope="col">Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>00001</td>
                            <td>Consorcio Mitre</td>
                            <td>520</td>
                            <td className="pendiente">Pendiente</td>
                            <td className="confirm">Confirmado</td>
                        </tr>
                    </tbody>            
                    </table>
                </div>
        
            </div>
        </div>
    )
}

export default LabelFacturas
