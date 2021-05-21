import React from 'react'
import PedidosFull from './PedidosFull';
import SearchPedidos from './SearchPedidos';
import {usePedidos} from '../../context/pedidos-context'
function ListPedidos(){
  const {pedidos, buscarPedidos, setBuscarPedidos,
    buscadorPedidos} = usePedidos()
    
return (
    <div>
        <SearchPedidos
          pedidos={pedidos}
          setBuscarPedidos={setBuscarPedidos}
        />
        <PedidosFull
            buscarPedidos={buscarPedidos}
            buscadorPedidos={buscadorPedidos}
        />
    </div>
    
)}
export default ListPedidos;