// Pedidos.js
import React from 'react'
import Layout from '../components/home/Layout'
import LeftSidePedidos from '../components/pedidos/bigComponents/LeftSidePedidos'

function Pedidos(){
return (
  <Layout>
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6">
          <LeftSidePedidos/>
        </div>
      </div>
    </div>
    
      
  </Layout>
)}

export default Pedidos