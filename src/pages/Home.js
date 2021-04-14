// Home.js
import Layout from '../components/home/Layout'
import Button from '../components/home/Button'
import Search from '../components/home/Search'
import Barcode from '../components/home/Barcode'
import Productos from '../components/home/Productos'
import Label from '../components/home/Label'
import Table from '../components/home/Table'
import LabelBottomXL from '../components/home/LabelBottomXL'
import LabelBottomSM from '../components/home/LabelBottomSM'
import ModalCustom from '../components/home/ModalCustom'
import React, {useState} from 'react'
import data from '../data/data'

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



  return(
  <Layout>
  <div className="container-fluid">
    <div className="row">
      <div className="col-sm-12 col-md-6">
        <div className="container group-vh-1">
          <div className="row ">
              <div className="col-sm-12 col-md-8">
              <Button >
                      Nueva Compra
              </Button>             
              <Button onClick={()=>setShow(true)}>
                      + Producto
              </Button> 
              </div>
          </div>
        </div>
        <div className="container group-vh-1">
        <div className="row">
        <div className="col-sm-12 col-md-8">
              
                  <Button>
                          Nota de Credito
                  </Button>             
                  <Button onClick={()=>setShow(true)}>
                          + Categoria
                  </Button> 
              </div>
              <div className="col-sm-12 col-md-4">
              <Button>
                Buscar Productos
              </Button>
              </div>
        </div>
        </div>
              <ModalCustom show={show} setShow={setShow}/>
          
          <div className="group-vh-2">
            <Search/>
          </div>
          <div className="productos">
            <Productos products={products} onAdd={onAdd}/>          
          </div>
        </div>
        <div className="col-sm-12 col-md-6">
            <div className="container-fluid"> 
            <div className="row">
                <div className="col-md-12">
                  <Barcode/>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                  <Label/>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                  <Table cartItems={cartItems} onRemove={onRemove} />
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                  <LabelBottomXL/>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                  <LabelBottomSM/>
                </div>
            </div>
            </div>
          
        </div>
    </div>    
</div>
    
  </Layout>

  )}

export default Home