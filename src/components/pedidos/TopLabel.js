import React from 'react'
import {useHome} from '../../context/home-context'
import {usePedidos} from '../../context/pedidos-context'
function TopLabel(){
    const {labelPedido} = useHome([]);
    const {currentPedido} = usePedidos()
return (
    <div className="container-fluid">
            <div className="row combo-label2">
                
                <div className="col-md-8 label size">
                <label>N° de Pedido {currentPedido.id}</label>
                </div>
                <div className="col-md-4 ajuste-label label-pendiente-h5">
                {!currentPedido.estado
                ?<h5>Sin Estado</h5>
                :currentPedido.estado === "pendiente"
                ? <h5 className="pendiente ">{currentPedido.estado.toUpperCase()}</h5>
                :<h5 className="confirm ">{currentPedido.estado.toUpperCase()}</h5>}
                
                </div>

                <div className="col-md-8 label2">
                <label>Cliente: {labelPedido?.id} - {labelPedido?.nombre}</label>
                </div>
                <div className="col-md-4 ajuste-label">

                </div>
                
                <div className="col-md-8 label2">
                    <label >Domicilio: {labelPedido?.domicilio}</label>
                </div>
                <div className="col-md-4 ajuste-label">
                    <button className="btn btn-label"

                    >Vaciar Compra</button>
                </div>
            </div>
        </div>
)}
export default TopLabel;
