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
        products.forEach(
            (product) =>{
                const productChose = products.find(x=> x.id === product.id);
                if(productChose === barcode){
                    console.log(productChose)
                }else(
                    console.log("error")
                )
                return productChose;
            }
            
        )
        
    }
    
    const onKeyPresed = (e) => {
        if (e.key === "Enter") {
           searchProduct();
           console.log(barcode)
           console.log(products)
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
