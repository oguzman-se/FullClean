import React, { useState, useEffect} from 'react';
import clienteAxios from '../config/clienteAxios'
const HomeContext = React.createContext();


export function HomeProvider(props){
  // ESTE ESTADO ES PARA LOS ITEMS DEL CARRITO, LOS PRODUCTOS.
    const [cartItems, setCartItems] = useState([]);
     // ESTE ESTADO ES PARA LOS ITEMS DEL CARRITO, LOS PRODUCTOS.
     const [cartPedidos, setCartPedidos] = useState([]);
  //DISABLED BOTONES
    const [enable, setEnable] = useState(false);
    //SIRVE PARA EL BOTON DE NUEVA COMPRA, PARA SABER CUANDO MOSTRAR EL MODAL
    const [pendiente, setPendiente] = useState(false);
  //ESTE ESTADO SIRVE PARA ABRIR Y CERRAR EL MODL DE "+PRODUCTOS"
    const [show, setShow] = useState(false);
    //ESTADO DEL CURRENT PRODUCTO CUANDO SE CREA
      const [currentProducto, setCurrentProducto] = useState({})
  //MODAL DE CREAR UN NUEVO CLIENTE
  const [showNuevoCliente, setShowNuevoCliente] = useState(false);
  //ESTE ESTADO SIRVE PARA ABRIR Y CERRAR EL MODAL DE "BUSCAR PRODUCTOS"
    const [showTable, setShowTable] = useState(false);

  //ESRE ESTADO SIRVE PARA ABRIR Y CERRAR EL MODAL DE "+ CATEGORIA"
    const [showCategoria, setShowCategoria] = useState(false);

  //API

    //PRODUCTOS API
    const [products, setProducts] = useState([]);
    useEffect(() => {
        obtenerDatos()
    }, [])
    const obtenerDatos = async () => {
      await clienteAxios.get('/productos')
      .then(res => {
        setProducts(res.data)
      })
    }

//FACTURAS ID API
const [facturasXcliente, setFacturaXcliente] = useState([]);
useEffect(() => {
  obtenerFacturasXcliente()
    }, [])
    const obtenerFacturasXcliente = async () => {
      await clienteAxios.get(`/facturas/cliente/${labelCliente.id}`)
      .then(res => {
        setFacturaXcliente(res.data)
      })
    }

  //PEDIDO ID API
  const [pedidosXcliente, setPedidoXcliente] = useState([]);
  useEffect(() => {
    obtPedidoXcliente()
      }, [])
      const obtPedidoXcliente = async () => {
        await clienteAxios.get(`/pedidos/cliente/${labelCliente.id}`)
        .then(res => {
          setFacturaXcliente(res.data)
          console.log("pedidosXcliente", pedidosXcliente)
        })
      }  

  //PRODUCTOS CODIGO API
  const [AllCodigos, setAllCodigos] = useState([])
    useEffect(() => {
        obtenerCodigo()
    }, [])
    const obtenerCodigo = async () => {
      await clienteAxios.get('/productoscodigo')
      .then(res => {
        setAllCodigos(res.data)
      })
    }
    const [currentcodigo, setCurrentcodigo] = useState(
      {
        id: "",
        codigo:"",
        producto_id: ""
      }
    )
    //CATEGORIAS API
    const [AllCategorias, SetAllCategorias] = useState([]);

    useEffect(() => {
      obtenerCategorias()
    },
    // eslint-disable-next-line
    [])

    const obtenerCategorias = async () => {
      await clienteAxios.get('/categorias')
      .then(res => {
        SetAllCategorias(res.data)
        console.log("AllCategorias", AllCategorias)
      })
    }

    //CLIENTES API
    const [Allclientes, setAllClientes] = useState([]);

    useEffect(() => {
      obtenerClientes()
    },
    // eslint-disable-next-line
    [])

    const obtenerClientes = async () => {
      await clienteAxios.get('/clientes')
      .then(res => {
        setAllClientes(res.data)
        console.log("clientes", Allclientes)
      })
    }
    
  //USEEFFECT Y USESTATE DEL MODAL DE BUSCAR PRODUCTOS,
  // SE USA PARA MOSTRAR LOS PRODUCTOS Y PARA SU BUSCADOR
   const [term, setTerm] = useState("");

  //FUNCION PARA AGREGAR PRODUCTOS AL CARRITO
    const onAdd = (product) => {
    const exist = cartItems.find(x=> x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x)=>
        x.id === product.id ? { ...exist, qty: exist.qty + 1} : x
        )
      );
    }else{
      setCartItems([...cartItems, {...product, qty: 1}]);
    }
  };
  
  //FUNCION PARA QUITAR PRODUCTOS DEL CARRITO
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    }else {
      setCartItems(
        cartItems.map((x)=>
        x.id === product.id ? { ...exist, qty: exist.qty - 1} : x
        )
      );
    }
  }
  const onRemoveItem = (product) => {
    setCartItems(cartItems.filter((x) => x.id !== product.id));
  }
  //VACIA EL CARRITO
  const onRemoveAll = () => {
    setCartItems([])
  }
  //PRECIO TOTAL DE TODO EL CARRITO
  useEffect(() => {
    let PrecioTotal = 0
    let QtyTotal = 0
    cartItems.map((item)=>{
      PrecioTotal= PrecioTotal + item.precio * item.qty;
      QtyTotal = QtyTotal + item.qty;
    return ""
  })
  setTotalPrice(PrecioTotal)
  setQty(QtyTotal)
  console.log(cartItems)
  }, [cartItems])
  let [totalPrice, setTotalPrice] = useState(0);
  let [qty, setQty] = useState(0);
  
  
  //FUNCION PARA AGREGAR CLIENTE
  const [labelCliente, setLabelCliente] = useState([]);
   //FUNCION PARA AGREGAR CLIENTE
   const [labelPedido, setLabelPedido] = useState([]);
  //CLIENTE PEDIDOS
  const [labelPed, setLabelPed] = useState([]);
  //CURRENT METODOOOO
  const [currentMetodo, setCurrentMetodo] = useState({})

  //DECLARO QUIEN ES EL CONTEXT
  const value = 
    {
        cartItems,
        setCartItems,
        show,
        setShow,
        products,
        onAdd,
        onRemove,
        totalPrice,
        onRemoveAll,
        showTable,
        setShowTable,
        term,
        setTerm,
        onRemoveItem,
        qty,
        showCategoria,
        setShowCategoria,
        setProducts,
        AllCategorias,
        SetAllCategorias,
        Allclientes,
        setAllClientes,
        labelCliente,
        setLabelCliente,
        currentProducto,
        setCurrentProducto,
        AllCodigos,
        setAllCodigos,
        currentcodigo,
        setCurrentcodigo,
        setTotalPrice,
        enable, setEnable,
        pendiente, setPendiente,
        showNuevoCliente, setShowNuevoCliente,
        currentMetodo, setCurrentMetodo, labelPed, setLabelPed,
        cartPedidos, setCartPedidos, labelPedido, setLabelPedido,
        facturasXcliente, setFacturaXcliente,obtenerFacturasXcliente,
        pedidosXcliente, setPedidoXcliente, obtPedidoXcliente
      }
  return <HomeContext.Provider value={value} {...props} />
}
//EXPORTO EL CONTEXT
export function useHome(){
    const context = React.useContext(HomeContext);
    if(!context){
        throw new Error('Something wrong had happended')
    }
    return context;
}