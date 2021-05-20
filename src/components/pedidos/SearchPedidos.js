import React from 'react'
import {useHome} from '../../context/home-context'
import {usePedidos} from '../../context/pedidos-context'
function SearchPedidos(props){
    const {setBuscarPedidos} = props;
    const {pedidos} = usePedidos()
return (
<div className="searchPedidos">
    <div className="container-fluid">
        <div className="row">
            {pedidos && (
                <input className="col-md-12 form-control searchPed" placeholder="Buscar pedido..."
                aria-label="Search"
                type="text" onChange={e => setBuscarPedidos(e.target.value.toLowerCase())}
                />
            )}
        </div>
    </div>
    
        <div className="row">
            <div className="col-md-6 ">
                <input className="form-control searchPed" placeholder="Desde"/>
                <input className="form-control searchPed" placeholder="Hasta"/>
            </div>
            <div className="col-md-6">
                <label className="state">Estado:</label>
                <select className="sel">
                    <option selected>Todos</option>
                    <option value="0">Efectivo</option>
                    <option value="1">Tarjeta de credito</option>
                    <option value="2">Tarjeta de Debito</option>
                    <option value="3">Rapipago</option>
                </select>
                
                <button className="boton">Buscar</button>
                
            </div>
        </div>
    
</div>
)}

export default SearchPedidos;