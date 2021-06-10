import React, {useState, useEffect} from 'react'
import { Link } from "react-router-dom";
import {useHome} from '../../context/home-context'
import ModalDetalleCliente from './ModalDetalleCliente';
function TopClientes() {
    const {labelCliente, setLabelCliente, obtenerFacturasXcliente, obtPedidoXcliente, facturasXcliente} = useHome();
    const [showDetalleCliente, setShowDetalleCliente] = useState(false)
    const [deuda, setDeuda] = useState(0)
    useEffect(() => {
        if(facturasXcliente.length > 0){
            let tuDeuda = 0;
            facturasXcliente.map((f)=>{
                if(f.valor_cubierto){
                    tuDeuda = tuDeuda + parseFloat(f.valor_total) - parseFloat(f.valor_cubierto)
                    console.log(f)
                }else{
                    tuDeuda = tuDeuda + parseFloat(f.valor_total)
                    console.log(f)
                }
            })
            setDeuda(tuDeuda)
        }else{
            setDeuda(0)
        }
    }, [facturasXcliente])
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
                    <label className="label-deuda rojo">${deuda}</label>
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
