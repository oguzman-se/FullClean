import React from 'react'
import Button  from '../home/Button'

function Label(){

    return(
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-9 ">
                    <label class="label">Cliente:</label>
                    <label class="label">00254 - Juan Perez</label>
                </div>
                <div class="col-md-3">
                    <Button>Cargar Cliente</Button>
                </div>
            </div>
            <div class="row" >
                <div class="col-md-9">
                    <label class="label">Domicilio:</label>
                    <label class="label">Av. Mitre 159</label>
                </div>
                <div class="col-md-3">
                    <Button>Vaciar Compra</Button>
                </div>
            </div>
        </div>
    )
}

export default Label;
