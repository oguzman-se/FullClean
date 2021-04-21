import React from 'react'
import Button  from '../home/Button'
import {useHome} from '../../context/home-context'

function Label(){
    const {onRemoveAll} = useHome();
    return(
        <div className="container grop-vh-3">
            <div className="row combo-label">
                <div className="col-md-9 label">
                    <label>Cliente: 00254 - Juan Perez</label>
                </div>
                <div className="col-md-3">
                    <Button>Cargar Cliente</Button>
                </div>
            </div>
        
            <div className="row combo-label" >
                <div className="col-md-9 label">
                    <label >Domicilio: Av. Mitre 159</label>
                </div>
                <div className="col-md-3">
                    <Button
                    onClick={onRemoveAll}
                    >Vaciar Compra</Button>
                </div>
            </div>
        </div>
    )
}

export default Label;
