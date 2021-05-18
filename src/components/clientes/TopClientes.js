import React from 'react'
import {useHome} from '../../context/home-context'
function TopClientes() {
    const {labelCliente} = useHome([]);
    return (
        <div className="container-fluid">
            <div className="row">
                {!labelCliente.nombre 
                ? <label className="col-md-12 label-border">Cliente: Consumidor Final</label>
                : <label className="col-md-12 label-border">Cliente: {labelCliente.nombre}</label>}
                
                <label className="col-md-12 label-border-none">Domicilio: {labelCliente.domicilio}</label>
                <div>
                    <button className="btn btn-custom-clientes-chicos">Perfil</button>
                    <button className="btn btn-custom-clientes-chicos">Pedidos</button>
                    <button className="btn btn-custom-clientes-chicos">Facturas</button>
                    <button className="btn btn-custom-clientes-chicos">Nuevo Pago</button>
                    <button className="btn btn-custom-clientes-chicos">Nuevo Pedido</button>
                </div>
                <div>
                    <label className="label-deuda">Deuda: </label>
                    <label className="label-deuda rojo">$17.758</label>
                </div>
            </div>
            
            
        </div>
    )
}

export default TopClientes
