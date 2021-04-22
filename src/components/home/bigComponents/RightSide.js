import React from 'react'
import Barcode from '../Barcode'
import Label from '../Label'
import Table from '../Table'
import LabelBottomXL from '../LabelBottomXL'
import LabelBottomSM from '../LabelBottomSM'

function RightSide(props){
    const {cartItems} = props;
    return(
        <div>
           <div > 
            <div className="container-fluid">
                <div className="row">
                  <Barcode/>
                </div>
                <div className="row">
                  <Label />
                </div>
            </div>
            <div>
                <div >
                  <Table/>
                </div>
            </div>
            <div >
                <div >
                  <LabelBottomXL countCartItems={cartItems.length}/>
                </div>
            </div>
            <div >
                <div >
                  <LabelBottomSM/>
                </div>
            </div>
            </div>
        </div>
    )
}

export default RightSide;














