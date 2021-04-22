import React from 'react'

function TopClientes() {
    return (
        <div>
            <div>
                <label>Cliente: Juan Perez</label>
                <label>Domicilio: Av. Mitre</label>
            </div>
            <div>
                <button>Perfil</button>
                <button>Pedidos</button>
                <button>Facturas</button>
                <button>Nuevo Pago</button>
                <button>Nuevo Pedido</button>
            </div>
            <div>
                <label>Deuda: $17.758</label>
            </div>
        </div>
    )
}

export default TopClientes
