import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Product from './Product'

function Productos(){

    return(
    <div className="row">
        <div className="col-md-2 grilla">
        <Product>Alcohol Etilico 5lts.</Product>
        </div>
        <div className="col-md-2 grilla">
        <Product>Alcohol Etilico 5lts.</Product>
        </div>
        <div className="col-md-2 grilla">
        <Product>Alcohol Etilico 5lts.</Product>
        </div>
        <div className="col-md-2 grilla">
        <Product>Alcohol Etilico 5lts.</Product>
        </div>
    </div>
    )
}

export default Productos;