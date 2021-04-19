import React from 'react'
import Button from '../home/Button'
function SearchPedidos(){
return (
<div>
    <div className="container-fluid">
        <div className="row">
            <input className="col-md-12 form-control search" placeholder="Buscar pedido..."/>
        </div>
    </div>
    <div>
        <div className="row">
            <div className="col-md-6 ">
                <input className="form-control search" placeholder="Desde"/>
                <input className="form-control search" placeholder="Hasta"/>
            </div>
            <div className="col-md-6">
                <label className="state">Estado:</label>
                <select className="sel">
                    <option selected>Efectivo</option>
                    <option value="1">Tarjeta de credito</option>
                    <option value="2">Tarjeta de Debito</option>
                    <option value="3">Rapipago</option>
                </select>
                
                <button className="boton">Buscar</button>
                
            </div>
        </div>
    </div>
</div>
)}

export default SearchPedidos;