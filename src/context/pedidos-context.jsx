import React , {useState, useEffect} from 'react';
import clienteAxios from '../config/clienteAxios'
const PedidosContext = React.createContext();

export function PedidosProvider(props){
  //PEDIDOS API
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
  //PEDIDOS DETALLE API
  const [pedidoDetalle, setPedidoDetalle] = useState([]);

  useEffect(() => {
      obtenerDetalle()
  }, [])
  const obtenerDetalle = async () => {
    await clienteAxios.get('/pedidodetalles')
    .then(res => {
      setPedidoDetalle(res.data)
    })
  }
  //ARRAY DE PEDIDOS
    const [array, setArray] = useState([]);
  //ARRAY DONDE SE GUARDAN LOS PEDIDOS
    const [bigArray, setBigArray] = useState([]);
  //DECLARO QUIEN ES EL CONTEXT
  const value = 
    {
      pedidos, setPedidos,
      array, setArray,
      bigArray, setBigArray,
      pedidoDetalle, setPedidoDetalle
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