import React from "react";
import { useState } from "react";
import { useHome } from '../../context/home-context'
function Barcode() {
    const [barcode, setBarcode] = useState([]);
    const {onAdd, products} = useHome();
    const onChange = (e) => {
        setBarcode(e.target.value);
    };
    
    const searchProduct = (barcode) => {
        Object.keys(products).forEach(
            function(key){
                if(products[key].id===barcode){
                    return products[key]
                }
            }
        )
    }

    const onKeyPresed = (e) => {
        if (e.key === "Enter") {
            onAdd(searchProduct(barcode))
        }
    };

    return (
        <div>
            <input
            onKeyPress={onKeyPresed}
            onChange={onChange}
            className="barcode"
            ></input>
        </div>
        
        
    );
}

export default Barcode;
