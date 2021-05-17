import React from 'react'
import Button  from '../home/Button'
function TopLabel(){
return (
    <div className="container-fluid">
            <div className="row combo-label2">
                
                <div className="col-md-8 label size">
                <label>N° de Pedido 0001</label>
                </div>
                <div className="col-md-4 ajuste-label label-pendiente-h5">
                <h5 className="pendiente "
                    >Pendiente</h5>
                </div>

                <div className="col-md-8 label2">
                    <label >Cliente:</label>
                </div>
                <div className="col-md-4 ajuste-label">
                    <button className="btn btn-label"

                    >Vaciar Compra</button>
                </div>
                
                <div className="col-md-8 label2">
                    <label >Domicilio:</label>
                </div>
                <div className="col-md-4 ajuste-label">
                    <button className="btn btn-label"

                    >Vaciar Compra</button>
                </div>
            </div>
        </div>
)}
export default TopLabel;