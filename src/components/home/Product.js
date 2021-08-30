import React from "react";
import { useHome } from "../../context/home-context";
import Tooltip from "../Tooltip";
function Product({ product, onAdd }) {
    let { barcodeRef } = useHome();

    const handleClick = () => {
        onAdd(product);
        setTimeout(() => {
            barcodeRef.current.focus();
        }, 200);
    };

    if (product.nombre.length < 20) {
        return (
            <div>
                <button
                    type="button"
                    className="btn boton-secundario inLower"
                    onClick={handleClick}
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
                    onClick={handleClick}
                >
                    <Tooltip text={product.nombre} max={25} />
                </button>
            </div>
        );
    }
}

export default Product;
