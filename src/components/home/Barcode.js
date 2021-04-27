import React from "react";
import { useState } from "react";
import { useHome } from '../../context/home-context'
function Barcode() {
    const [barcode, setBarcode] = useState([]);
    const [errorMatch, setErrorMatch] = useState([false]);
    const {onAdd, products} = useHome();
    const onChange = (e) => {
        setBarcode(e.target.value);
    };
    
    const searchProduct = () => {
        let match;
        let contador = 0;
        products.forEach(
            (product) =>{
            
                if(product.id.toString() === barcode){
                    match=product;
                    contador = 1;
                }else if(errorMatch === false){
                    console.log("error")
                }                 
            }
        )
        if(contador === 1){
            setErrorMatch(true);
            return (match);
        }else{
            return {
                id:"",
                nombre:""
            }
        }
        
    }
    
    const onKeyPresed = (e) => {
        if (e.key === "Enter") {
           onAdd(searchProduct())
        }
    };

    return (
    <div>
        <div className="row">
            <div className="col-md-12">
                <input
                onKeyPress={onKeyPresed}
                onChange={onChange}
                className="barcode"
                ></input>
            </div>
        </div>
    </div>    
        
    );
}

export default Barcode;
