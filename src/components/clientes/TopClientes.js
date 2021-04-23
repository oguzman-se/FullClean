import React from 'react'

function TopClientes() {
    return (
        <div className="container-fluid">
            <div className="row">
                <label className="col-md-12 label-border">Cliente: Juan Perez</label>
                <label className="col-md-12 label-border-none">Domicilio: Av. Mitre</label>
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
