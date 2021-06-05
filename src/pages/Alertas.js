// Clientes.js
import React from 'react'
import Layout from '../components/home/Layout'
import {usePedidos} from '../context/pedidos-context'
import {useHome} from '../context/home-context'
import clienteAxios from '../config/clienteAxios'
function Alertas() {
const {alertas, setAlertas} = usePedidos()
const {products} = useHome()

const eliminar = async (a) => {
    await clienteAxios.delete(`/alertas/${a.id}`)
    .then((res) =>{
      console.log(res.data)
    })
    .catch((err) => {
      console.log("error delete", err);
    });
    
  }
  return(
    <Layout>
       <div className="container-fluid">
            <label className="titulo">Lista de Alertas</label>
            <div className="tabla2 ">
                <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th  scope="col">ID</th>
                        <th scope="col">Tipo</th>
                        <th scope="col">Producto</th>
                        <th scope="col">Fecha y Hora</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                {alertas.map((a)=>(
                    <tr>
                        <td>{a.id}</td>
                        <td>{a.tipo}</td>
                        {products.map((p)=>{
                            if(p.id === a.producto_id){
                                return(
                                    <td>{p.nombre}</td>
                                )
                            }
                        })}
                        <td>{a.fechayhora}</td>
                        <button className="iconos"
                        onClick={()=>eliminar(a)}
                        ><i class="bi bi-trash-fill"></i></button>  
                    </tr>
                ))}
                    
                </tbody>            
                </table>
            </div>
        </div>
    </Layout>
  )
} 

export default Alertas