import React from 'react'
import {usePedidos} from '../../context/pedidos-context'
import {useHome} from '../../context/home-context'
import { useToasts } from "react-toast-notifications";
function TableFacturas() {
    const { addToast } = useToasts();
    const {facturas, currentFactura, setCurrentFactura} = usePedidos();
    const {Allclientes} = useHome()
    const onAddFactura = (factura) => {
        setCurrentFactura(factura)
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
                {facturas.map((f)=>(
                    <tr>
                        <td>{f.id}</td>
                        <td>{
                            Allclientes.map((c)=>{
                                if(c.id === f.cliente_id){
                                    return(c.nombre)
                                }
                            })
                        }</td>
                        <td>${f.valor_total}</td>
                        <td>${f.valor_cubierto}</td>
                        <td>{f.pedido_id === 0 ? "No esta asociada a un pedido" : f.pedido_id}</td>
                        <button className="iconos"
                        onClick={()=>onAddFactura(f)}
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
