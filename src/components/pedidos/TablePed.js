import React from 'react'
import {useHome} from '../../context/home-context'
import TableItem from '../home/tableItem';

function TablePed(){
    const {cartPedidos} = useHome();

    return(
        <div className="tabla">
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
        <tbody>
            
            {cartPedidos.map((item)=>(
                <TableItem
                    item={item}
                />
            ))}
        </tbody>            
        </table>
    </div>
        
    )
}

export default TablePed;
