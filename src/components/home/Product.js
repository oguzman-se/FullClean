import React from 'react'

function Product(props){

    const {product, onAdd} = props;
    if (product.nombre.length < 15) {
        return (
            <button type="button" className="btn boton-secundario" onClick={()=>onAdd(product)}>
            {product.nombre}
            </button>
        )
    }else { 
        return(
            <button type="button" className="btn boton-secundario" onClick={()=>onAdd(product)} >
                {product.nombre.slice(0, 15) + "..."}
                <span className="tooltext">{product.nombre}</span>
            </button>
        )
    }
}

export default Product;