import React, { useEffect, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import {useHome} from '../../context/home-context'
import { ComponentToPrint } from './Remito';

const Example = () => {
  const { cartItems } = useHome();
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div>
      <ComponentToPrint ref={componentRef} 
      cartItems={cartItems}

      />
      <br></br>
      <button className="btn btn-custom" onClick={()=>handlePrint()}>Imprimir</button>
    </div>
  );
};

export default Example;
