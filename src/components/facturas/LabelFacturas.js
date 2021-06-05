import React, {useState} from 'react'
import {usePedidos} from '../../context/pedidos-context'
import {useHome} from '../../context/home-context'
import ModalAsociarFactura from './modales/ModalAsociarFactura'
function LabelFacturas() {
    const [showAsociar, setShowAsociar] = useState(false);
    const {currentFactura} = usePedidos()
    const {Allclientes} = useHome()
    return (
        <div className="container-fluid">
            <div className="row">
                
                <label className="col-md-12 label-border">Factura: {currentFactura.id}</label>
                <label className="col-md-12 label-border">Cliente: {
                    Allclientes.map((c)=>{
                        if(c.id === currentFactura.cliente_id){
                            return(c.nombre)
                        }
                    })
                }</label>
                <label className="col-md-12 label-border">Domicilio: {
                    Allclientes.map((c)=>{
                        if(c.id === currentFactura.cliente_id){
                            return(c.domicilio)
                        }
                    })
                }</label>
                
                <label className="col-md-7 label-border">Importe: ${currentFactura.valor_total}</label>
                <button className="col-md-4 btn btn-facturas" onClick={()=>setShowAsociar(true)}>Asociar Pedido</button>
        
            </div>
            
            <div className="row">
                <label className="col-md-12 label-facturas">Listado de Pedidos Asociados a la Factura</label>
            
                
                <div className="col-md-12 tabla2">
                    <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th  scope="col">ID</th>
                            <th scope="col">Empresa</th>
                            <th scope="col">Total</th>
                            <th scope="col">Estado</th>
                            <th scope="col">Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>00001</td>
                            <td>Consorcio Mitre</td>
                            <td>520</td>
                            <td className="pendiente">Pendiente</td>
                            <td className="confirm">Confirmado</td>
                        </tr>
                    </tbody>            
                    </table>
                </div>
        
            </div>
            <ModalAsociarFactura
                showAsociar={showAsociar}
                setShowAsociar={setShowAsociar}
            />
        </div>
    )
}

export default LabelFacturas
