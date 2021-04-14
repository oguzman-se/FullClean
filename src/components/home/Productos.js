import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Product from './Product'

function Productos(props){
    const {products, onAdd} = props;
    return(
    <div className="row">
        <div className="col-xs-6 col-sm-6 col-md-12 grilla">
        {products.map((product)=>(
            <Product key={product.id} product={product} onAdd={onAdd}></Product>
        ))}
        </div>
        
        
    </div>
    )
}

export default Productos;