import React , {useState, useEffect} from 'react';
import clienteAxios from '../config/clienteAxios'
const PedidosContext = React.createContext();

export function PedidosProvider(props){
  //PRODUCTOS API
  const [pedidos, setPedidos] = useState([]);
  useEffect(() => {
      obtenerDatos()
  }, [])
  const obtenerDatos = async () => {
    await clienteAxios.get('/pedidos')
    .then(res => {
      setPedidos(res.data)
    })
  }
    
  //DECLARO QUIEN ES EL CONTEXT
  const value = 
    {
      pedidos, setPedidos
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