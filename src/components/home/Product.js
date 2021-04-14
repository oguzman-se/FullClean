import React from 'react'

function Product(props){
    const {product, onAdd} = props;
    return(
        <button type="button" className="btn btn-secundario" onClick={()=>onAdd(product)}>{product.name}</button>
    )
}

export default Product;