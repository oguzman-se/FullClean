import React from 'react'
import Button from '../home/Button'
function SearchPedidos(){
return (
    <div className="container">
        <div className="row">
            <input className="col-md-12 form-control search" placeholder="Buscar pedido..."/>
        </div>
        <div className="row">
            <div className="col-md-6 ">
                <input className="form-control search" placeholder="Desde"/>
                <input className="form-control search" placeholder="Hasta"/>
            </div>
            <div className="col-md-6">
                <label>Estado:</label>
                <select className="select">
                    <option selected>Efectivo</option>
                    <option value="1">Tarjeta de credito</option>
                    <option value="2">Tarjeta de Debito</option>
                    <option value="3">Rapipago</option>
                </select>
                <Button>Buscar</Button>
            </div>
        </div>
    </div>
)}

export default SearchPedidos;