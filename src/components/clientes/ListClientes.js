import React from 'react'

function ListClientes() {
    return (
    <div>
        <div className="container-fluid">
        <div className="row">
            <input className="col-md-12 form-control searchPed" placeholder="Buscar pedido..."/>
        </div>
        </div>
        <div>
            <div className="row">
                <div className="col-md-6 ">
                    <input className="form-control searchPed" placeholder="Desde"/>
                    <input className="form-control searchPed" placeholder="Hasta"/>
                </div>
                <div className="col-md-6">
                    <label className="state">Estado:</label>
                    <select className="sel">
                        <option selected>Efectivo</option>
                        <option value="1">Tarjeta de credito</option>
                        <option value="2">Tarjeta de Debito</option>
                        <option value="3">Rapipago</option>
                    </select>
                                    
                </div>
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
                        <td >
                            <i class="bi bi-search"></i>
                        </td>
                    </tr>
                </tbody>            
                </table>
        </div>
    </div>
    )
}

export default ListClientes
