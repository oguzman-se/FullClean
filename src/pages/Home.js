// Home.js

import Layout from '../components/home/Layout'
import Button from '../components/home/Button'
import Search from '../components/home/Search'
import Barcode from '../components/home/Barcode'
import Productos from '../components/home/Productos'
import ModalCustom from '../components/home/ModalCustom'
import React, {useState} from 'react'


function Home() {

  const [show, setShow] = useState(false);

  return(
  <Layout>
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-6">
          <div class="row">
              <div class="col-md-3">
              <Button >
                      Nueva Compra
              </Button>
              </div>

              <div class="col-md-3">
              <Button onClick={()=>setShow(true)}>
                      + Producto
              </Button> 
              </div>
          </div>

          <div class="row">
              <div class="col-md-3">
              <Button >
                        Nota de Credito
              </Button>
              </div>

              <div class="col-md-3">
              <Button >
                        + Categoria
              </Button>
              </div>

              <div class="col-md-2">
              
              </div>

              <div class="col-md-4">
              <Button>
                Buscar Productos
              </Button>
              </div>

          </div>
              <ModalCustom show={show} setShow={setShow}/>
          
          <div>
            <Search/>
          </div>
          <div class="productos">
            <Productos/>
            <Productos/>
            <Productos/>
            <Productos/>
            <Productos/>
            <Productos/>
            <Productos/>
            <Productos/>
            <Productos/>
            <Productos/>
           
          </div>
        </div>
        <div class="col-lg-6">
          <div class="row">
              <div class="container-fluid">
                <Barcode/>
              </div>
          </div>
        </div>
    </div>    
</div>
    
  </Layout>

  )}

export default Home