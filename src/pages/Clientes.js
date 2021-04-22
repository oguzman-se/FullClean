// Clientes.js
import React from 'react'
import Layout from '../components/home/Layout'
import LeftSideClientes from '../components/clientes/bigComponents/LeftSideClientes'
import RightSideClientes from '../components/clientes/bigComponents/RightSideClientes'

function Clientes() {

  return(
    <Layout>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <LeftSideClientes/>
          </div>
          <div className="col-md-6">
            <RightSideClientes/>
          </div>
        </div>
      </div>
    </Layout>
  )
} 

export default Clientes