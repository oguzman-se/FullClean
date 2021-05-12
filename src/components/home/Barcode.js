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
                        console.log("hola")
                    }else if(cod.codigo.toString() === barcode.toLowerCase()){
                        match=cod.producto_id;
                    }else if(errorMatch === false){
                        console.log("no encuentra")
                    }    
                }else{
                    console.log("cod.cod != null")
                }     
            }
        )
        let returnProduct;
        if(match !== undefined){
            {products.map((product)=>{
                if(match === product.id){
                    returnProduct = product;
                }
            })}
        }else{
            alert("abrir barcode")
        }
        
        console.log("return",returnProduct)
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
