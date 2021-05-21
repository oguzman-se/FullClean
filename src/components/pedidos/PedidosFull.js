import React, {useState} from 'react'
import clienteAxios from '../../config/clienteAxios'
import {useHome} from '../../context/home-context'
import ModalPendienteConf from '../home/modals/ModalPedidoPendienteConfirmar'
import PedidosItem from './PedidosItem'
import {usePedidos} from '../../context/pedidos-context'
function PedidosFull(props) {
    const {pedidos, currentPedido, setCurrentPedido,  modalCorrection, setModalCorrection} = usePedidos()
    const {products, cartItems,setCartItems, Allclientes, setLabelCliente, setEnable, pendiente} = useHome()
    const [showPendiente, setShowPendiente] = useState(false);
    const {setShowPedidosPendientes, showPedidosPendientes, buscadorPedidos, buscarPedidos, } = props;
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
            setCartItems(ArrayFinal)
            setEnable(true)
        })
        .catch((e)=>{
            console.log(e)
        })
    }
    const masterSubmit = async(pedido)=>{
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
            if(showPedidosPendientes === true){
                setShowPedidosPendientes(false)
            }
            
        }
    }
    return (
        <div>
            
            <div className="lista">
                <h5>Lista de Pedidos</h5>
            </div>
            <div className="tabla">
                <table className="table">
                <thead className="thead-dark">
                    <tr >
                        <th  scope="col">ID</th>
                        <th scope="col">Nombre del Cliente</th>
                        <th scope="col">Estado</th>
                        <th scope="col">Valor Total</th>
                        <th scope="col">Fecha y Hora</th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                {pedidos.filter(buscadorPedidos(buscarPedidos)).map((pedido)=>{
                return(
                    <PedidosItem
                            Allclientes={Allclientes}
                            masterSubmit={masterSubmit}
                            pedido={pedido}
                        />
                )
                }
                )}
                        
                </tbody>            
                </table>
                <ModalPendienteConf
                    setModalCorrection={setModalCorrection}
                    showPendiente={showPendiente} 
                    setShowPendiente={setShowPendiente}
                    onSubmit={onSubmit}
                    currentPedido={currentPedido}
                    setShowPedidosPendientes={setShowPedidosPendientes}
                    showPedidosPendientes={showPedidosPendientes}
                />
        </div>
        </div>
        
    )
}

export default PedidosFull;
