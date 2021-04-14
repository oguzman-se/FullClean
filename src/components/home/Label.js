import React from 'react'
import Button  from '../home/Button'

function Label(){
    return(
        <div className="container-fluid">
            <div className="row grop-vh-3">
                <div className="col-md-9 combo-label">
                    <label className="label">Cliente: 00254 - Juan Perez</label>
                </div>
                <div className="col-md-3">
                    <Button>Cargar Cliente</Button>
                </div>
            </div>
        
            <div className="row grop-vh-3" >
                <div className="col-md-9 combo-label">
                    <label className="label">Domicilio: Av. Mitre 159</label>
                </div>
                <div className="col-md-3">
                    <Button>Vaciar Compra</Button>
                </div>
            </div>
        </div>
    )
}

export default Label;
