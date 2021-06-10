import React from 'react'
import {usePedidos} from '../../context/pedidos-context'
import {useHome} from '../../context/home-context'
import { useToasts } from "react-toast-notifications";
function TableFacturas() {
    const { addToast } = useToasts();
    const {facturas, currentFactura, setCurrentFactura, agregarOno, obtenerFacturasId} = usePedidos();

    const {Allclientes} = useHome()
    const onAddFactura = async(factura) => {
        obtenerFacturasId(factura.id)
        await setCurrentFactura(factura)
        addToast("Factura agregada", {
            appearance: "success",
            autoDismiss: true,
        });
      };
    return (
        <div>
            <div className="tabla80 ">
                <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th  scope="col">ID</th>
                        <th scope="col">Cliente ID</th>
                        <th scope="col">Valor Total</th>
                        <th scope="col">Valor Cubierto</th>
                        <th scope="col">Pedido ID</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                {facturas.map((factura)=>(
                    <tr>
                        <td>{factura.id}</td>
                        <td>{
                            Allclientes.map((c)=>{
                                if(c.id === factura.cliente_id){
                                    return(c.nombre)
                                }
                            })
                        }</td>
                        <td>${factura.valor_total}</td>
                        <td>${factura.valor_cubierto}</td>
                        <td>{factura.pedido_id === 0 ? "No esta asociada a un pedido" : factura.pedido_id}</td>
                        <button className="iconos"
                        onClick={()=>onAddFactura(factura)}
                        ><i class="bi bi-plus-circle-fill"></i></button>
                        
                        </tr>
                        ))}
                </tbody>            
                </table>
            </div>
        </div>
    )
}

export default TableFacturas
