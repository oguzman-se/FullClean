import React from "react";
import { useState } from "react";
import { useHome } from '../../context/home-context'
function Barcode() {
    const [barcode, setBarcode] = useState([]);
    const {onAdd, products} = useHome();
    const onChange = (e) => {
        setBarcode(e.target.value);
    };
    
    const searchProduct = () => {
        let match;
        products.forEach(
            (product) =>{
            
                if(product.id.toString() === barcode){
                    match=product;
                }else if (product.id === 'undefined'){
                    console.log("error")
                }                 
            }
        )
        return match;
    }
    
    const onKeyPresed = (e) => {
        if (e.key === "Enter") {
           onAdd(searchProduct())
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
