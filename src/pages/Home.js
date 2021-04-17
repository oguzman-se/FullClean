// Home.js
import Layout from '../components/home/Layout'
import React from 'react'
import LeftSide from '../components/home/bigComponents/LeftSide'
import RightSide from '../components/home/bigComponents/RightSide';
import {HomeProvider, useHome} from '../context/home-context'

export default () => 
<HomeProvider>
  <Home></Home>
</HomeProvider>

function Home() {
  const {cartItems} =useHome();
  return(
  <Layout>
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12 col-md-6">
            <LeftSide/>
        </div>
        <div className="col-sm-12 col-md-6">
            <RightSide
            cartItems={cartItems}
            />
        </div>
      </div>    
    </div>
  </Layout>
  )}
