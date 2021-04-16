import React from 'react'
import TopLabel from '../TopLabel'
import TablePedidos from '../TablePedidos'
import SubPedidosRight from '../SubPedidosRight'

function RightSidePedidos(){
return (
    <div>
        <div>
            <div><TopLabel/></div>
            <div><TablePedidos/></div> 
        </div>
        <div>
            <div><SubPedidosRight/></div>
        </div>

    </div>
)}

export default RightSidePedidos;