import React, {useState, useEffect} from 'react'
import clienteAxios from '../../config/clienteAxios'
import {usePedidos} from '../../context/pedidos-context'
import {useHome} from '../../context/home-context'
import ModalPendienteConf from './modals/ModalPedidoPendienteConfirmar'
function PedidoPendiente({setShowPedidosPendientes}) {
    const {onAdd, products, cartItems,setCartItems, Allclientes, setLabelCliente, setEnable, pendiente} = useHome()
    const {pedidos} = usePedidos()
    const [showPendiente, setShowPendiente] = useState(false);
    const [currentPedido, setCurrentPedido] = useState(0)

    const onSubmit = async(id)=>{
        await clienteAxios.get(`/pedidodetalles/pedido/${id}`)
        .then((res)=>{
            let arr = res.data;
            let ArrayFinal = []
            arr.map((item)=> {
                let dataProduct = products.filter((p)=> p.id === item.producto_id) 
                if(dataProduct[0]){
                    let productoIdeal = {
                        id: dataProduct[0].id,
                        nombre: dataProduct[0].nombre,
                        precio: item.precio,
                        qty: item.cantidad,
                    }
                    ArrayFinal.push(productoIdeal)
                }
            })
            setCartItems(ArrayFinal)
            setEnable(true)
        })
        .catch((e)=>{
            console.log(e)
        })
    }
    const masterSubmit = (pedido)=>{
        setCurrentPedido(pedido)
        if(cartItems.length > 0 && pendiente === false){
            setShowPendiente(true)
        }else{
            let currentCliente ;
            if (pedido.cliente_id !== 0){
                currentCliente = Allclientes.filter((c)=> c.id === pedido.cliente_id)
            } else{
                currentCliente = [{
                    id: 0,
                    cliente: "Consumidor Final"
                }]
            }
            setLabelCliente(currentCliente[0])
            onSubmit(pedido.id)
            setShowPedidosPendientes(false)
            
        }
    }
    return (
        <div className="tabla2">
                <table className="table">
                <thead className="thead-dark">
                    <tr >
                        <th  scope="col">ID</th>
                        <th scope="col">Cliente ID</th>
                        <th scope="col">Estado</th>
                        <th scope="col">Valor Total</th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    
                    {pedidos.filter(pedido => pedido.estado === "pendiente").map((pedido)=>(
                        <tr >
                            <td>{pedido.id}</td>
                            <td>{pedido.cliente_id}</td>
                            <td className="pendiente">{pedido.estado.toUpperCase()}</td>
                            <td>${pedido.valor_total}</td>  
                            <button className="iconos"
                            onClick={()=>masterSubmit(pedido)}
                            ><i class="bi bi-plus-circle-fill"></i></button>  
                            <button className="iconos"
                            ><i class="bi bi-stickies"></i></button>                          
                        </tr>
                        ))}
                    
                </tbody>            
                </table>
                <ModalPendienteConf
                    showPendiente={showPendiente} 
                    setShowPendiente={setShowPendiente}
                    onSubmit={onSubmit}
                    currentPedido={currentPedido}
                    setShowPedidosPendientes={setShowPedidosPendientes}
                />
        </div>
    )
}

export default PedidoPendiente
