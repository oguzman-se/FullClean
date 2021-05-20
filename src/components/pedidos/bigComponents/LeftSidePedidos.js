import React from 'react'
import SearchPedidos from '../SearchPedidos'
import ListPedidos from '../ListPedidos'
import SubPedidosLeft from '../SubPedidosLeft'

function LeftSidePedidos(){
return (
    <div>
        <div>
            <div><ListPedidos/></div> 
        </div>
        <div>
            <div><SubPedidosLeft/></div>
        </div>

    </div>
)}

export default LeftSidePedidos;