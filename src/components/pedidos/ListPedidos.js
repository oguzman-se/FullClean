import React, {useState} from 'react'
import clienteAxios from '../../config/clienteAxios'
import {useHome} from '../../context/home-context'
import Pendiente from './Pedidos'
import {usePedidos} from '../../context/pedidos-context'
function ListPedidos(props) {
    const {products, cartPedidos, setCartPedidos, Allclientes, setLabelPedido, setEnable, pendiente} = useHome()
    const {setCurrentPedido, setHelpCurrentPedido} = usePedidos()
    const [showPendiente, setShowPendiente] = useState(false);
    const {setShowPedidosPendientes, showPedidosPendientes} = props;
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
                return ""
            })
            setCartPedidos(ArrayFinal)
            setEnable(true)
        })
        .catch((e)=>{
            console.log(e)
        })
    }
    const masterSubmit = async(pedido)=>{
        if(cartPedidos.length > 0 && pendiente === false){
            setShowPendiente(true)
            setHelpCurrentPedido(pedido)
        }else{
            setCurrentPedido(pedido)
            let currentCliente ;
            if (pedido.cliente_id !== 0){
                currentCliente = Allclientes.filter((c)=> c.id === pedido.cliente_id)
            } else{
                currentCliente = [{
                    id: 0,
                    cliente: "Consumidor Final"
                }]
            }
            setLabelPedido(currentCliente[0])
            onSubmit(pedido.id)
            if(showPedidosPendientes === true){
                setShowPedidosPendientes(false)
            }
            
        }
    }
    //BUSCADOR DE PEDIDOS
    const [buscarPedidos, setBuscarPedidos] = useState("");
    const buscadorPedidos = (buscarPedidos) => {
        return function(x){
            console.log(x.ciente_id)
        return (
            x.estado.toLowerCase().includes(buscarPedidos) || !buscarPedidos
        ) 
        }
    }
    return (
        <Pendiente
            buscarPedidos={buscarPedidos}
            setBuscarPedidos={setBuscarPedidos}
            buscadorPedidos={buscadorPedidos}
            masterSubmit={masterSubmit}
            showPendiente={showPendiente}
            setShowPendiente={setShowPendiente}
            onSubmit={onSubmit}
            showPedidosPendientes={showPedidosPendientes}
            setShowPedidosPendientes={setShowPedidosPendientes}
            
        />
    )
}

export default ListPedidos;