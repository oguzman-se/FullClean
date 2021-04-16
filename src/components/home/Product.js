import React from 'react'

function Product(props){

    const {product, onAdd} = props;
    if (product.name.length < 15) {
        return (
            <button type="button" className="btn btn-secundario" onClick={()=>onAdd(product)}>
            {product.name}
            </button>
        )
    }else {
        return(
            <button type="button" className="btn btn-secundario" onClick={()=>onAdd(product)} >
                {product.name.slice(0, 27) + "..."}
                <span className="tooltext">{product.name}</span>
            </button>
        )
    }
}

export default Product;