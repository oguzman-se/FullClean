import React from "react";
import Tooltip from "../Tooltip";
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
                    <Tooltip text={product.nombre} max={25} />
                </button>
            </div>
        );
    }
}

export default Product;
