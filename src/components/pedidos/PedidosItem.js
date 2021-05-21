import React from 'react'

function PedidosItem(props) {
    const {pedido, Allclientes, masterSubmit} = props;
    let valorEfectivo = 0;
    if(pedido.metodo_pago === "efectivo"){
        console.log("EFECTIVO")
        valorEfectivo = valorEfectivo + pedido.valor_total;
        console.log(valorEfectivo)
    }
    return (
            <tr key={pedido.id}>
                <td>{pedido.id}</td>
                <td>{Allclientes.map((cliente)=>{
                    if(cliente.id === pedido.cliente_id){
                        return(
                            cliente.nombre
                        )
                    }
                    return ""
                })}</td>
                {pedido.estado === "pendiente"
                ? <td className="pendiente">{pedido.estado.toUpperCase()}</td>
                : <td className="confirm">{pedido.estado.toUpperCase()}</td>}
                
                <td>${pedido.valor_total}</td>  
                <td>{pedido.fechayhora.toUpperCase()}</td>  
                <button className="iconos"
                onClick={()=>masterSubmit(pedido)}
                ><i class="bi bi-plus-circle-fill"></i></button>  
                <button className="iconos"
                ><i class="bi bi-stickies"></i></button>                          
            </tr>
    )
}

export default PedidosItem;
