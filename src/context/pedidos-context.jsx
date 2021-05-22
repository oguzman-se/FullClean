import React , {useState, useEffect} from 'react';
import clienteAxios from '../config/clienteAxios'
const PedidosContext = React.createContext();

export function PedidosProvider(props){
  //PEDIDOS API
  const [pedidos, setPedidos] = useState([]);
  const [helpCurrentPedido, setHelpCurrentPedido] = useState([]);
  let qtyPedidos = pedidos.length;
  useEffect(() => {
      obtenerDatos()
  }, [])
  const obtenerDatos = async () => {
    await clienteAxios.get('/pedidos')
    .then(res => {
      setPedidos(res.data)
    })
  }
  //BUSCADOR DE PEDIDOS
  const [buscarPedidos, setBuscarPedidos] = useState("");
  function buscadorPedidos(buscarPedidos){
    return function(y){
      return (
        y.estado.toLowerCase().includes(buscarPedidos) || !buscarPedidos
      ) 
    }
  }
  //STATE PARA MODAL NUEVA VENTA
  const [showNuevaCompra, setShowNuevaCompra] = useState(false);
  //ARRAY DE PEDIDOS
    const [array, setArray] = useState([]);
  //ARRAY DONDE SE GUARDAN LOS PEDIDOS
    const [bigArray, setBigArray] = useState([]);
  
  //VALORES DE EFECTIVO, CTA. CTE, DEBITO Y CREDITO
 // let valorEfectivo = 0;
  const [valorEfectivo, setValorEfectivo] = useState(0)
  //CURRENT PEDIDO PENDIENTE
  const [currentPedido, setCurrentPedido] = useState(0)
  //DECLARO QUIEN ES EL CONTEXT
  const value = 
    {
      pedidos, setPedidos,
      array, setArray,
      bigArray, setBigArray,
      showNuevaCompra, setShowNuevaCompra,
      qtyPedidos, buscarPedidos, setBuscarPedidos,
      buscadorPedidos, valorEfectivo, setValorEfectivo,
      currentPedido, setCurrentPedido,
      helpCurrentPedido, setHelpCurrentPedido      
      
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