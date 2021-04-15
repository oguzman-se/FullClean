import React from 'react'

function ListPedidos(){
return (
    <div>
        Lista de Pedidos
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
                <td>Pendiente</td>
                <td>Confirmado</td>
            </tr>
        </tbody>            
        </table>
    </div>
)}

export default ListPedidos