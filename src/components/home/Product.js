import React from 'react'

function Product(props){

    const {product, onAdd} = props;
    if (product.name.length < 15) {
        return (
            <button type="button" className="btn boton-secundario" onClick={()=>onAdd(product)}>
            {product.name}
            </button>
        )
    }else { 
        return(
            <button type="button" className="btn boton-secundario" onClick={()=>onAdd(product)} >
                {product.name.slice(0, 15) + "..."}
                <span className="tooltext">{product.name}</span>
            </button>
        )
    }
}

export default Product;