import React from 'react'
import Button from '../home/Button';

function SubPedidosLeft(){
return (
    <div>
        <div className="container-fluid">
            <div className="row ">
                <div className="col-xs-12 col-md-5 labelbottom">
                    <label>7 Unidades</label>
                </div>
                <div className="col-xs-12 col-md-3 labelbottom">
                    <label>Total</label>
                </div>
                <div className="col-xs-12 col-md-4 labelbottom">
                    <label>$ 1234.56</label>
                </div>
            </div>
            <div className="row">
                <div className="col-md-3">
                    <label className="label-bottom-pedidos">Efectivo</label>
                    <Button>$594.50</Button>
                </div>
                <div className="col-md-3">
                    <label className="label-bottom-pedidos">Efectivo</label>
                    <Button>$594.50</Button>
                </div>
                <div className="col-md-3">
                    <label className="label-bottom-pedidos">Efectivo</label>
                    <Button>$594.50</Button>
                </div>
                <div className="col-md-3">
                    <label className="label-bottom-pedidos">Efectivo</label>
                    <Button>$594.50</Button>
                </div>
            </div>
        </div>
    </div>
)}

export default SubPedidosLeft;