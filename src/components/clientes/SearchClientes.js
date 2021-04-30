import React from 'react'
import {useHome} from '../../context/home-context'

function SearchClientes() {
    const {Allclientes} = useHome([]);
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
                        <th scope="col">Nombre</th>
                        <th scope="col">Domicilio</th>
                        <th scope="col">Telefono</th>
                    </tr>
                </thead>
                <tbody>
                {Allclientes.map((clientes) => (
                    <tr>
                        <td>{clientes.id}</td>
                        <td>{clientes.nombre}</td>
                        <td>{clientes.domicilio}</td>
                        <td>{clientes.telefono}</td>
                    </tr>
                    ))}
                    
                </tbody>            
                </table>
        </div>
        </div>
    )
}

export default SearchClientes
