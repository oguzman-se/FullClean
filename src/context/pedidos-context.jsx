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
      console.log("pedidos", res.data)
      setPedidos(res.data)
    })
  }

   //FACTURAS ID API
   const [facturasId, setFacturasId] = useState([]);
  
       const obtenerFacturasId = async (params) => {
         await clienteAxios.get(`/pedidosfacturados/factura/${ params ? params : currentFactura.id}`)
         .then(res => {
           setFacturasId(res.data)
         })
       }



  const [alertas, setAlertas] = useState([]);
  useEffect(() => {
    obtenerAlertas()
  }, [])
  const obtenerAlertas = async () => {
    await clienteAxios.get('/alertas')
    .then(res => {
      setAlertas(res.data)
    })
  }

  //FUNCION PARA ASOCIAR PEDIDOS O AGREGAR A LA DERECHA
  const [agregarOno, setAgregarOno] = useState(false)

  //FUNCION PARA AGREGAR PRODUCTOS AL CARRITO
  const [checked, setChecked] = useState(false)
  const [pedidosArray, setPedidosArray] = useState([])
  const onAddFactura = (pedido) => {
    setChecked(!checked)
    if (checked === false) {
      setPedidosArray([...pedidosArray, pedido.id]);
    }else{
      setPedidosArray(pedidosArray.filter((x) => x.id === pedido.id));
    }
  };

   //FACTURAS API
   const [facturas, setFacturas] = useState([]);
   useEffect(() => {
    obtenerFacturas()
   }, [])
   const obtenerFacturas = async () => {
     await clienteAxios.get('/facturas')
     .then(res => {
      setFacturas(res.data)
     })
   }
  //NUEVA VENTA NOTA DE CREDITO
  const [ventaCredito, setVentaCredito] = useState(null);
  //CURRENT FACTURA
  const [currentFactura, setCurrentFactura] = useState({});
  //STATE PARA MODAL NUEVA VENTA
  const [showNuevaCompra, setShowNuevaCompra] = useState(false);
  //STATE PARA MODAL REMITO
  const [showRemito, setShowRemito] = useState(false);
  //STATE PARA MODAL TICKET
  const [showTicket, setShowTicket] = useState(false);
  //ARRAY DE PEDIDOS
    const [array, setArray] = useState([]);
  //ARRAY DONDE SE GUARDAN LOS PEDIDOS
    const [bigArray, setBigArray] = useState([]);
  
  //VALORES DE EFECTIVO, CTA. CTE, DEBITO Y CREDITO
  // EFECTIVO
    const [valorEfectivo, setValorEfectivo] = useState(0);
    useEffect(() => {
      let PrecioEfectivo = 0
      pedidos.filter((p)=> p.metodo_pago === "efectivo").map((p)=>{
        PrecioEfectivo = PrecioEfectivo + p.valor_total;
      return ""
    })
    setValorEfectivo(PrecioEfectivo)
    }, [pedidos])

  // TARJETA DE CREDITO
  const [valorCredito, setValorCredito] = useState(0);
  useEffect(() => {
    let PrecioCredito = 0
    pedidos.filter((p)=> p.metodo_pago === "tarjeta credito").map((p)=>{
      PrecioCredito = PrecioCredito + p.valor_total;
    return ""
  })
  setValorCredito(PrecioCredito)
  }, [pedidos])

  // TARJETA DE DEBITO
  const [valorDebito, setValorDebito] = useState(0);
  useEffect(() => {
    let PrecioDebito = 0
    pedidos.filter((p)=> p.metodo_pago === "tarjeta debito").map((p)=>{
    PrecioDebito = PrecioDebito + p.valor_total;
    return ""
  })
  setValorDebito(PrecioDebito)
  }, [pedidos])

  // CUENTA CORRIENTE
  const [valorCorriente, setValorCorriente] = useState(0);
  useEffect(() => {
    let PrecioCorriente = 0
    pedidos.filter((p)=> p.metodo_pago === "cuenta corriente").map((p)=>{
      PrecioCorriente = PrecioCorriente + p.valor_total;
    return ""
  })
  setValorCorriente(PrecioCorriente)
  }, [pedidos])

 

  //CURRENT PEDIDO PENDIENTE
  const [currentPedido, setCurrentPedido] = useState(0)
  //DECLARO QUIEN ES EL CONTEXT
  const value = 
    {
      pedidos, setPedidos,
      array, setArray,
      bigArray, setBigArray,
      showNuevaCompra, setShowNuevaCompra,
      qtyPedidos, valorEfectivo, valorCredito,
      valorDebito,valorCorriente,
      currentPedido, setCurrentPedido,
      helpCurrentPedido, setHelpCurrentPedido,
      ventaCredito, setVentaCredito,
      showRemito, setShowRemito,
      showTicket, setShowTicket, facturas,
      currentFactura, setCurrentFactura, alertas, setAlertas, obtenerFacturas,
      onAddFactura, pedidosArray, setPedidosArray, agregarOno, setAgregarOno,
      facturasId, setFacturasId, obtenerFacturasId, setFacturas
      
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
