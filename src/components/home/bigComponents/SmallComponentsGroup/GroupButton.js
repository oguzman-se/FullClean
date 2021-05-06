import React, {useState} from 'react'
import ModalCustom from '../../modals/ModalCustom'
import ModalCategoria from '../../modals/ModalCategoria'
import ModalSearchProducts from '../../modals/ModalSearchProducts'
import Button from '../../Button'
import {useHome} from '../../../../context/home-context';
import {usePedidos} from '../../../../context/pedidos-context'
import ModalNuevaCompra from '../../modals/ModalNuevaCompra'
import ModalPedidosPendientes from '../../modals/ModalPedidosPendientes'
function GroupButton(){
    const {setShow, setShowTable, setShowCategoria, onRemoveAll} = useHome();
    const {pedidos} = usePedidos();
    const [showNuevaCompra, setShowNuevaCompra] = useState(false);
    const [showPedidosPendientes, setShowPedidosPendientes] = useState(false);
   /* const nuevaCompra = ()=>{
        pedidos.map((pedido)=>{
            if( pedido.estado.lenght > 0){
                setShowNuevaCompra(true)
            }else{
                onRemoveAll()
            }
        })
        
    }
    */
    return(
        <div className="group-vh-1">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-3 ajuste">
                    <Button onClick={()=>setShowNuevaCompra(true)}>Nueva Compra</Button>             
                    </div>
                    <div className="col-3 ajuste">
                    <Button onClick={()=>setShow(true)}>
                            + Producto
                    </Button> 
                    </div>
                    <div className="col-2 ajuste"></div>
                    <div className="col-4 ajuste">
                    <Button onClick={()=>setShowPedidosPendientes(true)}>
                            Pedidos Pendientes
                    </Button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-3 ajuste">
                    <Button>Nota de Credito</Button>     
                    </div>
                    <div className="col-3 ajuste">        
                        <Button 
                        onClick={()=>setShowCategoria(true)}
                        >
                                + Categoria
                        </Button>
                    </div>
                    <div className="col-2 ajuste"></div>
                    <div className="col-4 ajuste">
                    <Button onClick={()=>setShowTable(true)}>Buscar Productos</Button>
                    </div>
                </div>
            </div>
                    
            <ModalCustom/>
            <ModalSearchProducts/>
            <ModalCategoria/>
            <ModalNuevaCompra
                showNuevaCompra={showNuevaCompra}
                setShowNuevaCompra={setShowNuevaCompra}
            />
            <ModalPedidosPendientes
                showPedidosPendientes={showPedidosPendientes}
                setShowPedidosPendientes={setShowPedidosPendientes}
            />
        </div>
        
    )
}
export default GroupButton;














