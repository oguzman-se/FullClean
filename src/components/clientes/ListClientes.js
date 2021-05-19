import React from 'react'
import PedidoPendiente from '../home/PedidoPendiente'

function ListClientes() {
    return (
    <div>
        <div className="container-fluid">
        <div className="row">
            <input className="col-md-12 form-control searchPed" placeholder="Buscar pedido..."/>
        </div>
        </div>
        <div>
            <div className="row">
                <div className="col-md-6 ">
                    <input className="form-control searchPed" placeholder="Desde"/>
                    <input className="form-control searchPed" placeholder="Hasta"/>
                </div>
                <div className="col-md-6">
                    <label className="state">Estado:</label>
                    <select className="sel">
                        <option selected>Efectivo</option>
                        <option value="1">Tarjeta de credito</option>
                        <option value="2">Tarjeta de Debito</option>
                        <option value="3">Rapipago</option>
                    </select>
                                    
                </div>
            </div>
        </div>
        <PedidoPendiente/>
    </div>
    )
}

export default ListClientes
