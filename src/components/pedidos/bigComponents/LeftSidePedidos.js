import React from 'react'
import ListPedidos from '../ListPedidos'
import SearchPedidos from '../SearchPedidos'
import SubPedidosLeft from '../SubPedidosLeft'
function LeftSidePedidos(){
return (
    <div>
        <div>
            <div><SearchPedidos/></div>
            <div><ListPedidos/></div> 
        </div>
        <div>
            <div><SubPedidosLeft/></div>
        </div>
               
    </div>
)}

export default LeftSidePedidos;