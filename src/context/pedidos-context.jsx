import React /*, {useState, useEffect} */from 'react';
//import clienteAxios from '../config/clienteAxios'
const PedidosContext = React.createContext();


export function PedidosProvider(props){
 
  //DECLARO QUIEN ES EL CONTEXT
  const value = 
    {
        
      }
  return <PedidosContext.Provider value={value} {...props} />
}
//EXPORTO EL CONTEXT
export function usePedidos(){
    const context = React.useContext(PedidosContext);
    if(!context){
        throw new Error('Something wrong had happended')
    }
    return context;
}