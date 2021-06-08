import React, {useState} from 'react'
import { Link } from "react-router-dom";
import {useHome} from '../../context/home-context'
import ModalDetalleCliente from './ModalDetalleCliente';
function TopClientes() {
    const {labelCliente, setLabelCliente, obtenerFacturasXcliente, obtPedidoXcliente} = useHome();
    const [showDetalleCliente, setShowDetalleCliente] = useState(false)
    return (
        <div className="container-fluid">
            <div className="row">
                {!labelCliente.nombre 
                ? <label className="col-md-12 label-border">Cliente: Consumidor Final</label>
                : <label className="col-md-12 label-border">Cliente: {labelCliente.id}</label>}
                
                <label className="col-md-12 label-border-none">Domicilio: {labelCliente.domicilio}</label>
                <div>
                    <button className="btn btn-custom-clientes-chicos"
                    onClick={()=>setShowDetalleCliente(true)}
                    >Perfil</button>
                    <button className="btn btn-custom-clientes-chicos" onClick={()=>obtPedidoXcliente()}>Pedidos</button>
                    <button className="btn btn-custom-clientes-chicos" onClick={()=>obtenerFacturasXcliente(labelCliente)}>Facturas</button>
                    <button className="btn btn-custom-clientes-chicos">Nuevo Pago</button>
                    <Link className="btn btn-custom-clientes-chicos" to="/" >Nuevo Pedido</Link>
                </div>
                <div>
                    <label className="label-deuda">Deuda: </label>
                    <label className="label-deuda rojo">$17.758</label>
                </div>
            </div>
            
            <ModalDetalleCliente
                showDetalleCliente={showDetalleCliente}
                setShowDetalleCliente={setShowDetalleCliente}
                labelCliente={labelCliente}
                setLabelCliente={setLabelCliente}
            />
        </div>
    )
}

export default TopClientes
