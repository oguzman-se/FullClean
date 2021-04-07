// Home.js
import React from 'react'
import Layout from '../components/Layout'
import Button from '../components/Button'
import Example from '../components/Modal'

function Home() {
  
  return(
  <Layout>
    <div className="size-button">
          <Button className="sub-button">
            Nueva Compra
          </Button>
          <Button className="sub-button">
            + Producto
          </Button>  
          </div><div>      
          <Button className="sub-button">
            Nota de Credito
          </Button>
          <Button className="sub-button">
            + Categoria
          </Button>
          <Example/>
        </div>
  </Layout>

  )}

export default Home