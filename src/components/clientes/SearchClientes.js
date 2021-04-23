import React from 'react'


function SearchClientes() {
    return (
        <div >
            <div className="container-fluid">
                <div className="row">
                    <button className="btn btn-custom-clientes col-md-3" >Nuevo Cliente</button>
                    <input placeholder="Buscar cliente..." className="col-md-8 form-control searchCli"></input>
                </div>
            </div>

        

            <div className="tabla2">
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
    )
}

export default SearchClientes
