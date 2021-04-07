// Home.js

import Layout from '../components/Layout'
import Button from '../components/Button'
import ModalCustom from '../components/ModalCustom'
import React, {useState} from 'react'

function Home() {

  const [show, setShow] = useState(false);

  return(
  <Layout>
    <div className="size-button">
          <Button className="sub-button">
            Nueva Compra
          </Button>
          <Button className="sub-button" onClick={()=>setShow(true)}>
            + Producto
          </Button>  
          </div><div>      
          <Button className="sub-button">
            Nota de Credito
          </Button>
          <Button className="sub-button">
            + Categoria
          </Button>
          <ModalCustom show={show} setShow={setShow}/>
        </div>
  </Layout>

  )}

export default Home