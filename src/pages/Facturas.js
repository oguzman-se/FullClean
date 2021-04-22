// Facturas.js
import React from 'react'
import Layout from '../components/home/Layout'
import LeftSideFacturas from '../components/facturas/bigComponents/LeftSideFacturas'
import RightSideFacturas from '../components/facturas/bigComponents/RightSideFacturas'

function Facturas() {
  return (
  <Layout>
    <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <LeftSideFacturas/>
          </div>
          <div className="col-md-6">
            <RightSideFacturas/>
          </div>
        </div>
      </div>
  </Layout>
  )
}

export default Facturas
