import React from "react";
import { useState, useEffect } from "react";
import { useHome } from '../../context/home-context'
import clienteAxios from '../../config/clienteAxios'

function Barcode() {
    const {AllCodigos, setAllCodigos} = useHome([])
    const [barcode, setBarcode] = useState([]);
    const [errorMatch, setErrorMatch] = useState([false]);
    const {onAdd, products} = useHome();
    const onChange = (e) => {
        setBarcode(e.target.value);
    };

    const searchProduct = () => {
        let match;
        let contador = 0;
        AllCodigos.forEach(
            (cod) =>{

                if(cod.id.toString() === barcode){
                    match=cod;
                }else if (cod.id === 'undefined'){
                    contador = 1;
                }else if(errorMatch === false){
                    console.log("error")
                }                 
            }
            
        )
        return match;
        if(contador === 1){
            setErrorMatch(true);
            return (match);
        }else{
            return {
                id:"",
                name:""
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
