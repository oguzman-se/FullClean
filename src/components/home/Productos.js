import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Product from './Product'

function Productos(){

    return(
    <div className="row">
        <div className="col-xs-4 col-sm-4 col-md-2 grilla">
        <Product>Alcohol Etilico 5lts.</Product>
        </div>
        <div className="col-xs-4 col-sm-4 col-md-2 grilla">
        <Product>Alcohol Etilico 5lts.</Product>
        </div>
        <div className="col-xs-4 col-sm-4 col-md-2 grilla">
        <Product>Alcohol Etilico 5lts.</Product>
        </div>
        <div className="col-xs-4 col-sm-4 col-md-2 grilla">
        <Product>Alcohol Etilico 5lts.</Product>
        </div>
    </div>
    )
}

export default Productos;