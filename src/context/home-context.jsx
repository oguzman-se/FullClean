import React, { useState, useMemo, useEffect} from 'react';
import data from '../data/data'
const HomeContext = React.createContext();

export function HomeProvider(props){
  // ESTE ESTADO ES PARA LOS ITEMS DEL CARRITO, LOS PRODUCTOS.
    const [cartItems, setCartItems] = useState([]);
  //ESTE ESTADO SIRVE PARA ABRIR Y CERRAR EL MODL DE "+PRODUCTOS"
    const [show, setShow] = useState(false);
  //ESRE ESTADO SIRVE PARA ABRIR Y CERRAR EL MODAL DE "BUSCAR PRODUCTOS"
    const [showTable, setShowTable] = useState(false);
  //OBTENGO LOS PRODUCTOS A TRAVES DE UN JSON
    const {products} = data;
  //USEEFFECT Y USESTATE DEL MODAL DE BUSCAR PRODUCTOS,
  // SE USA PARA MOSTRAR LOS PRODUCTOS Y PARA SU BUSCADOR
  const [prod, setProd] = useState([]);
    useEffect( () => {
      setProd(products)
    }, [products] )
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
  const totalPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  //DECLARO QUIEN ES EL CONTEXT
  const value = useMemo(()=> {
      return ({
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
        prod,
        setProd,
        term,
        setTerm,
        onRemoveItem
      })
  }, [cartItems,setCartItems,show,setShow, products, totalPrice, showTable,
     setShowTable, prod, setProd, term, setTerm, onRemoveItem])

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