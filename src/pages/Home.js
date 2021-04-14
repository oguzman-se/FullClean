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


function Home() {

  const [show, setShow] = useState(false);

  return(
  <Layout>
  <div className="container-fluid">
    <div className="row">
      <div className="col-lg-6">
        <div className="container group-vh-1">
          <div className="row ">
              <div className="col-md-8">
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
        <div className="col-md-8">
              
                  <Button>
                          Nota de Credito
                  </Button>             
                  <Button onClick={()=>setShow(true)}>
                          + Categoria
                  </Button> 
              </div>
              <div className="col-md-4">
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
        <div className="col-lg-6">
            <div className="container-fluid"> 
            <div className="row">
                <div className="col-lg-12">
                  <Barcode/>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                  <Label/>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                  <Table/>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                  <LabelBottomXL/>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
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