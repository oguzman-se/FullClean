import React from "react";
import { useState, useEffect } from "react";
import { useHome } from '../../context/home-context'
import clienteAxios from '../../config/clienteAxios'

function Barcode() {
    const [barcode, setBarcode] = useState([]);
    const [errorMatch, setErrorMatch] = useState([false]);
    const {onAdd, products} = useHome();
    const onChange = (e) => {
        setBarcode(e.target.value);
    };

    const [productCod, setProductCod] = useState([]);
    
    useEffect(() => {
        obtenerDatos()
    }, [])

    const obtenerDatos = async () => {
        await clienteAxios.get('/productoscodigo')
        .then(res => {
            setProductCod(res.data)
        })
    }
    const searchProduct = () => {
        let match;
        let contador = 0;
        productCod.forEach(
            (UnitCod) =>{
            
                if(UnitCod.codigo.toString() === barcode){
                    match=UnitCod;
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
