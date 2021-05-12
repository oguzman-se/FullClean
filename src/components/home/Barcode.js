import React from "react";
import { useState } from "react";
import { useHome } from '../../context/home-context'


function Barcode() {
    const {AllCodigos} = useHome([])
    const [barcode, setBarcode] = useState([]);
    const [errorMatch] = useState([false]);
    const {onAdd, products} = useHome();
    const onChange = (e) => {
        setBarcode(e.target.value);
    };

    const searchProduct = () => {
        let match;
        let contador = 0;
        AllCodigos.forEach(
            (cod) =>{
                console.log(cod)
                if(cod.codigo !== null){
                     if (cod.codigo === undefined){
                        contador = 1;
                        console.log("aaa")
                    }else if(cod.codigo.toString() === barcode){
                        match=cod.producto_id;
                        console.log()
                    }else if(errorMatch === false){
                        console.log("error")
                    }    
                }else{
                    console.log("error")
                }     
            }

        )
        let returnProduct;
        {products.map((product)=>{
            if(match === product.id){
                returnProduct = product;
            }
        })}
        console.log(returnProduct)
        return returnProduct;
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
