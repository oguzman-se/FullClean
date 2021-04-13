import React from 'react'
import CrossButton from './CrossButton'
function Table(){

    return(
        <>
        <table className="table">
            <thead className="thead-dark">
                <tr>
                    <th  scope="col">Codigo</th>
                    <th scope="col">Producto</th>
                    <th scope="col">Cantidad</th>
                    <th scope="col">Precio Un.</th>
                    <th scope="col">Total</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody className="body">
                <tr >
                <th scope="row">0001</th>
                <td >Alcohol Etilico x 5 lts.</td>
                <td>520</td>
                <td>520</td>
                <td>520</td>
                <td>
                    <CrossButton>X</CrossButton>
                </td>
                </tr>
                <tr >
                <th  scope="row">0001</th>
                <td >Alcohol Etilico x 5 lts.</td>
                <td>520</td>
                <td>520</td>
                <td>520</td>
                <td>
                    <CrossButton>X</CrossButton>
                </td>
                </tr>
                <tr>
                <th  scope="row">0001</th>
                <td >Alcohol Etilico x 5 lts.</td>
                <td>520</td>
                <td>520</td>
                <td>520</td>
                <td>
                    <CrossButton>X</CrossButton>
                </td>
                </tr>
                <tr>
                <th  scope="row">0001</th>
                <td >Alcohol Etilico x 5 lts.</td>
                <td>520</td>
                <td>520</td>
                <td>520</td>
                <td>
                    <CrossButton>X</CrossButton>
                </td>
                </tr>
                <tr>
                <th  scope="row">0001</th>
                <td >Alcohol Etilico x 5 lts.</td>
                <td>520</td>
                <td>520</td>
                <td>520</td>
                <td>
                    <CrossButton>X</CrossButton>
                </td>
                </tr>
                <tr>
                <th  scope="row">0001</th>
                <td >Alcohol Etilico x 5 lts.</td>
                <td>520</td>
                <td>520</td>
                <td>520</td>
                <td>
                    <CrossButton>X</CrossButton>
                </td>
                </tr>
                <tr>
                <th  scope="row">0001</th>
                <td >Alcohol Etilico x 5 lts.</td>
                <td>520</td>
                <td>520</td>
                <td>520</td>
                <td>
                    <CrossButton>X</CrossButton>
                </td>
                </tr>
            </tbody>            
            </table>
        </>
    )
}

export default Table;
