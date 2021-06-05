// Clientes.js
import React from 'react'
import Layout from '../components/home/Layout'

function Alertas() {

  return(
    <Layout>
       <div>
            <label>Lista de Alertas</label>
            <div className="tabla3 ">
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
           
                    <tr>
                        <td></td>
                        <td></td>
                        <td>$</td>
                        <td>$</td>
                        <td></td>
                        <button className="iconos"
                        ><i class="bi bi-plus-circle-fill"></i></button>  
                    </tr>
                </tbody>            
                </table>
            </div>
        </div>
    </Layout>
  )
} 

export default Alertas