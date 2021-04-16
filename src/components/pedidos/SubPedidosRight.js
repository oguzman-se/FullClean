import React from 'react'
import Button from '../home/Button';

function SubPedidosRight(){
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
            <div className="row ">
                <div className="col-xs-12 col-md-5 margin-labelsm">
                    <label className="label">Metodo de Pago:</label>
                </div>
                <div className="col-xs-12 col-md-3 group-button-1">
                    <Button>Confirmar</Button>
                </div>
                <div className="col-xs-12 col-md-3 group-button-1">
                    <Button>Remito</Button>
                </div>
            </div>
            <div className="row ">
                <div className="col-md-5 margin-labelsm " >
                <select className="select">
                    <option selected>Efectivo</option>
                    <option value="1">Tarjeta de credito</option>
                    <option value="2">Tarjeta de Debito</option>
                    <option value="3">Rapipago</option>
                </select>
                </div>
                <div className="col-md-3 group-button-2">
                </div>
                <div className="col-md-3 ">
                    <Button>Ticket</Button>
                </div>
            </div>
        </div>
    </div>
)}
export default SubPedidosRight;