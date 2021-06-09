import React from 'react'
import Button from '../home/Button';
import {usePedidos} from '../../context/pedidos-context'
function SubPedidosRight(){
    const {currentPedido} = usePedidos()
return (
    <div className="container group-vh-5 subpedidosright">
            <div className="row ">
                <div className="col-md-6">
                   
                </div>
                <div className="col-3 ajuste">
                
                </div>
                <div className="col-3 ajuste">
                {currentPedido.estado === "pendiente"
                ? <Button disabled>Remito</Button>
                : <Button>Remito</Button>}
                </div>
            </div>
            <div className="row ">
                <div className="col-md-6" >
               
                </div>
                <div className="col-3 ajuste"></div>
                <div className="col-3 ajuste">
                {currentPedido.estado === "pendiente"
                ? <Button disabled>Ticket</Button>
                : <Button>Ticket</Button>}
                </div>
            </div>
        </div>
)}
export default SubPedidosRight;