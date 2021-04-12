import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Product from './Product'

function Productos(){

    return(
    <div class="row">
        <div class="col-md-3 grilla">
        <Product>Alcohol Etilico 5lts.</Product>
        </div>
        <div class="col-md-3 grilla">
        <Product>Alcohol Etilico 5lts.</Product>
        </div>
        <div class="col-md-3 grilla">
        <Product>Alcohol Etilico 5lts.</Product>
        </div>
        <div class="col-md-3 grilla">
        <Product>Alcohol Etilico 5lts.</Product>
        </div>
    </div>
    )
}

export default Productos;