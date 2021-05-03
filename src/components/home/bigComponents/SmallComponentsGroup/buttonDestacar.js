import React from 'react'

function buttonDestacar(props) {
    const {product, destacar} = props;
    return (
        <button
        onClick={()=> destacar(product)}
        >Destacar
        </button>
    )
}

export default buttonDestacar;
