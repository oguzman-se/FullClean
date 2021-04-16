import React from 'react'
import Button  from '../home/Button'
function TopLabel(){
return (
    <div>
        <div className="row grop-vh-3">
                <div className="col-md-9">
                    <label className="label">N° Pedido 00001</label>
                </div>
                <div className="col-md-3 ">
                    <label className="label-state">Pendiente</label>
                </div>
        </div>
        <div className="row grop-vh-3">
                <div className="col-md-9">
                    <label className="labelPedidos">Cliente: 00254 - Juan Perez</label>
                </div>
                <div className="col-md-9">
                    <label className="labelPedidos">Domicilio: Av. Mitre 159</label>
                </div>
                <div className="col-md-3">
                    <Button>Asociar Factura</Button>
                </div>
            </div>
    </div>
)}
export default TopLabel;