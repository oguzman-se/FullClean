import React from 'react'
import Button from '../home/Button';

function SubPedidosRight(){
return (
    <div className="container group-vh-5 subpedidosright">
            <div className="row ">
                <div className="col-md-6">
                    <label className="labelsm">Metodo de Pago:</label>
                </div>
                <div className="col-3 ajuste">
                    <Button
                    >Confirmar</Button>           
                </div>
                <div className="col-3 ajuste">
                    
                     <button type="button" className="btn btn-custom" >Remito</button>
                     
                </div>
            </div>
            <div className="row ">
                <div className="col-md-6" >
                <select className="select labelsm">
                    <option selected>Efectivo</option>
                    <option value="1">Tarjeta de credito</option>
                    <option value="2">Tarjeta de Debito</option>
                    <option value="3">Cuenta Corriente</option>
                </select>
                </div>
                <div className="col-3 ajuste"></div>
                <div className="col-3 ajuste">
                 <button type="button" className="btn btn-custom" >Ticket</button>
                </div>
            </div>
        </div>
)}
export default SubPedidosRight;