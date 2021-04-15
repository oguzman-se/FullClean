// Home.js
import Layout from '../components/home/Layout'
import React, {useState} from 'react'
import data from '../data/data'
import LeftSide from '../components/home/bigComponents/LeftSide'
import RightSide from '../components/home/bigComponents/RightSide';

function Home() {
  
  const [cartItems, setCartItems] = useState([]);
  const [show, setShow] = useState(false);
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
  const totalPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);

  return(
  <Layout>
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12 col-md-6">
            <LeftSide
            show={show}
            setShow={setShow}
            products={products}
            onAdd={onAdd}
            />
        </div>
        <div className="col-sm-12 col-md-6">
              <RightSide
              onRemove={onRemove}
              totalPrice={totalPrice}
              cartItems={cartItems}
              />
        </div>
      </div>    
    </div>
  </Layout>
  )}

export default Home