import React from 'react'

function ListPedidos(){
return (
    <div>
        <div className="lista">
            <h5>Lista de Pedidos</h5>
        </div>
        <div className="tabla">
        <table className="table">
        <thead className="thead-dark">
            <tr>
                <th  scope="col">ID</th>
                <th scope="col">Empresa</th>
                <th scope="col">Total</th>
                <th scope="col">Estado</th>
                <th scope="col">Fecha</th>
            </tr>
        </thead>
        <tbody>
            
        <tr >
            <td>0001</td>
            <td className="name">Apple SRL</td>
            <td>$1500</td>
            <td className="pendiente" >Pendiente</td>
            <td>10/05/2021</td>
        </tr>
        </tbody>            
        </table>
    </div>
    </div>
)}
export default ListPedidos;