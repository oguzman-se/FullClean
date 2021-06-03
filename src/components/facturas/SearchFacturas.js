import React, {useState} from 'react'
import ModalCrearFactura from './modales/ModalCrearFactura'
function SearchFacturas() {
    const [showFactura, setShowFactura] = useState(false)
    return (
        <div>
            <div className="container-fluid">
        
        <div className="row ajustes9">
            <input className="col-md-8 form-control searchPed" placeholder="Buscar por numero de pedido..."/>
            <button className="col-md-3 boton" onClick={()=>setShowFactura(true)}>Crear Factura</button> 
        </div>
        </div>
        <div>
            <div className="row">
                <div className="col-md-6 ">
                    <input className="form-control searchPed" placeholder="Desde"/>
                    <input className="form-control searchPed" placeholder="Hasta"/>
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
        <ModalCrearFactura
            showFactura={showFactura}
            setShowFactura={setShowFactura}
        />
        </div>
    )
}

export default SearchFacturas
