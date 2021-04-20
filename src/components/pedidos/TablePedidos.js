import React from 'react'

function TablePedidos(){
return (
    <div>
        <div className="tabla2">
            <table className="table">
            <thead className="thead-dark">
                <tr>
                    <th  scope="col">Codigo</th>
                    <th scope="col">Producto</th>
                    <th scope="col">Cantidad</th>
                    <th scope="col">price Un.</th>
                    <th scope="col">Total</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                    <tr >
                        <td>0001</td>
                        <td className="name">ALcohol Etilico</td>
                        <td>520</td>
                        <td>$520</td>
                        <td>$520</td>
                        <td>
                            <button className="btn-cross" >X</button>
                        </td>
                    </tr>
            </tbody>            
            </table>
        </div>
    </div>
)}
export default TablePedidos;