import React from "react";
function Product(props) {
    const { product, onAdd } = props;
    if (product.nombre.length < 20) {
        return (
            <div>
                <button
                    type="button"
                    className="btn boton-secundario inLower"
                    onClick={() => onAdd(product)}
                >
                    {product.nombre}
                </button>
            </div>
        );
    } else {
        return (
            <div>
                <button
                    type="button"
                    className="btn boton-secundario inLower"
                    onClick={() => onAdd(product)}
                >
                    {product.nombre.slice(0, 25) + "..."}
                    <span className="tooltext">{product.nombre}</span>
                </button>
            </div>
        );
    }
}

export default Product;
