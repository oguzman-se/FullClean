import React from 'react'
import {useState, useEffect} from 'react'
function Barcode(){

    const [barcode, setBarcode] = useState([]); 
    return(
        <input className="barcode" ></input>
    )
}

export default Barcode;
