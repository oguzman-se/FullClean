import React from 'react'
import {usePedidos} from '../../context/pedidos-context'

function SubPedidosLeft(){
    const {qtyPedidos} = usePedidos();
return (
    <div>
        <div className="container-fluid">
            <div className="row ">
                <div className="col-xs-12 col-md-12 labelbottom">
                    <label>{qtyPedidos} Pedidos</label>
                </div>
            </div>
        
        <div className="row">
                <div className="col-md-3">
                    <label className="label-bottom-pedidos">Efectivo</label>
                    <button className="boton2">$594.50</button>
                </div>
                <div className="col-md-3">
                    <label className="label-bottom-pedidos">Tarjeta de Credito</label>
                    <button className="boton2">$594.50</button>
                </div>
                <div className="col-md-3">
                    <label className="label-bottom-pedidos">Tarjeta de Debito</label>
                    <button className="boton2">$594.50</button>
                </div>
                <div className="col-md-3">
                    <label className="label-bottom-pedidos">Cuenta Corriente</label>
                    <button className="boton2">$594.50</button>
                </div>
            </div>
        </div>
         
    </div>
)}

export default SubPedidosLeft;