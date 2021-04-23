import React from 'react'
import Button  from '../home/Button'
import {useHome} from '../../context/home-context'

function Label(){
    const {onRemoveAll} = useHome();
    return(
        <div className="container-fluid">
            <div className="row combo-label">
                
                <div className="col-md-8 label">
                <label>Cliente: 00254 - Juan Perez</label>
                </div>
                <div className="col-md-4">
                    <button className="btn btn-label">Cargar Cliente</button>
                </div>
                <div className="col-md-8 label">
                    <label >Domicilio: Av. Mitre 159</label>
                </div>
                <div className="col-md-4 ">
                    <button className="btn btn-label"
                    onClick={onRemoveAll}
                    >Vaciar Compra</button>
                </div>
                
            </div>
        </div>
    )
}

export default Label;
