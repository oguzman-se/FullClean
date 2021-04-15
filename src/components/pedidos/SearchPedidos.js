import React from 'react'

function SearchPedidos(){
return (
    <div className="container">
        <div className="row">
            <input className="col-md-12" placeholder="Buscar pedido..."/>
        </div>
        <div className="row">
            <div className="col-md-6">
                <input placeholder="Desde"/>
                <input placeholder="Hasta"/>
            </div>
            <div className="col-md-6">
                <label>Estado:</label>
                <select>
                    <option>Pendiente</option>
                </select>
                <button>Buscar</button>
            </div>
        </div>
    </div>
)}

export default SearchPedidos;