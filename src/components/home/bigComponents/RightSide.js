import React from 'react'
import Barcode from '../Barcode'
import Label from '../Label'
import Table from '../Table'
import LabelBottomXL from '../LabelBottomXL'
import LabelBottomSM from '../LabelBottomSM'

function RightSide(props){
    const {cartItems, totalPrice, onRemove} = props;
    return(
        <div>
           <div className="container-fluid"> 
            <div className="row">
                <div className="col-md-12">
                  <Barcode/>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                  <Label />
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                  <Table cartItems={cartItems} onRemove={onRemove} />
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                  <LabelBottomXL countCartItems={cartItems.length} totalPrice={totalPrice}/>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                  <LabelBottomSM/>
                </div>
            </div>
            </div>
        </div>
    )
}

export default RightSide;














