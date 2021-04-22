import React from 'react'

function LabelFacturas() {
    return (
        <div>
            <div><label>Factura: 1-65468449</label></div>
            <div><label>Cliente: Juan Perez</label></div>
            <div><label>Domicilio: Av. Mitre 159</label></div>
            <div>
                <label>Importe: $15.354</label>
                <button>Asociar Factura</button>
            </div>
            <div>
                <label>Listado de Pedidos Asociados a la Factura</label>
            </div>
            <div className="tabla2">
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
    )
}

export default LabelFacturas
