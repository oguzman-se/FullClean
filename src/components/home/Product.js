import React from 'react'



function Product(props){

    return(
        <button type="button" className="btn btn-secundario">{props.children}</button>
    )
}

export default Product;