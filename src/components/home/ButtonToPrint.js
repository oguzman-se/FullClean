import React, { useEffect, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { useHome } from "../../context/home-context";
import { ComponentToPrint } from "./Recibo";

const Example = () => {
    const { cartItems, labelCliente } = useHome();
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

    return (
        <div>
            <ComponentToPrint
                ref={componentRef}
                cartItems={cartItems}
                cliente={labelCliente}
            />
            <br></br>
            <button className="btn btn-custom" onClick={() => handlePrint()}>
                Imprimir
            </button>
        </div>
    );
};

export default Example;
