import React, { useEffect, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { useHome } from "../../context/home-context";
import { ComponentToPrint } from "./Remito";

const Example = ({ type, setShowRemito }) => {
    const { cartItems, cartPedidos, labelCliente, labelPedido } = useHome();
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        onAfterPrint: () => setShowRemito(false),
    });

    return (
        <div>
            <ComponentToPrint
                ref={componentRef}
                cartItems={type === "home" ? cartItems : cartPedidos}
                cliente={type === "home" ? labelCliente : labelPedido}
            />
            <br></br>
            <button className="btn btn-custom" onClick={() => handlePrint()}>
                Imprimir
            </button>
        </div>
    );
};

export default Example;
