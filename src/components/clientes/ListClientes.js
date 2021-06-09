import React from 'react'
import TableFacturaIdClientes from './TableFacturaIdClientes'
import {usePedidos} from '../../context/pedidos-context'
import {useHome} from '../../context/home-context'

function ListClientes() {
    const {facturasXcliente, setFacturaXcliente,obtenerFacturasXcliente, Allclientes} = useHome();
    return (
    <div>
        <div className="container-fluid">
        <div className="row">
            <input className="col-md-12 form-control searchPed ajustes" placeholder="Buscar pedido..."/>
        </div>
        </div>
        <div>
            <div className="row">
                <div className="col-md-6 ">
                    <input className="form-control searchPed" placeholder="Desde"/>
                    <input className="form-control searchPed" placeholder="Hasta"/>
                </div>
                <div className="col-md-3">
                    <select className="select labelsm">
                    <option value="efectivo" selected>Efectivo</option>
                    <option value="tarjeta credito">Tarjeta de credito</option>
                    <option value="tarjeta debito">Tarjeta de Debito</option>
                    <option value="cuenta corriente">Cuenta Corriente</option>
                </select>    
                </div>
                <div className="col-md-3">
                    <select className="select labelsm">
                    <option value="efectivo" selected>Efectivo</option>
                    <option value="tarjeta credito">Tarjeta de credito</option>
                    <option value="tarjeta debito">Tarjeta de Debito</option>
                    <option value="cuenta corriente">Cuenta Corriente</option>
                </select>    
                </div>
            </div>
        </div>
        <TableFacturaIdClientes
                    facturasXcliente={facturasXcliente}
                    Allclientes={Allclientes}
                />
    </div>
    )
}

export default ListClientes
