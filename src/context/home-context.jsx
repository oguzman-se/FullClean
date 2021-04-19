import React, { useState, useMemo} from 'react';
import data from '../data/data'
const HomeContext = React.createContext();

export function HomeProvider(props){
    const [cartItems, setCartItems] = useState([]);
    const [show, setShow] = useState(false);
    const [showTable, setShowTable] = useState(false);
    const {products} = data;
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
  const onRemoveAll = () => {
    setCartItems([])
  }
  const totalPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);


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
        setShowTable
      })
  }, [cartItems,setCartItems,show,setShow, products, totalPrice, showTable, setShowTable])

  return <HomeContext.Provider value={value} {...props} />
}

export function useHome(){
    const context = React.useContext(HomeContext);
    if(!context){
        throw new Error('Something wrong had happended')
    }
    return context;
}