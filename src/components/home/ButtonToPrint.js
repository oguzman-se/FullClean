import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

import { ComponentToPrint } from './Remito';

const Example = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div>
      <ComponentToPrint ref={componentRef}  />
      <br></br>
      <button className="btn btn-custom" onClick={()=>handlePrint()}>Print this out!</button>
    </div>
  );
};

export default Example;