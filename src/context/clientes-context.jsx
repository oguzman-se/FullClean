import React, { useState, useMemo, useEffect} from 'react';
import clienteAxios from '../config/clienteAxios'
const ClientesContext = React.createContext();


export function ClientesProvider(props){
  
  //DECLARO QUIEN ES EL CONTEXT
  const value = useMemo(()=> {
      return ({
        
      })
  }, [])

  return <ClientesProvider.Provider value={value} {...props} />
}
//EXPORTO EL CONTEXT
export function useClientes(){
    const context = React.useContext(ClientesContext);
    if(!context){
        throw new Error('Something wrong had happended')
    }
    return context;
}