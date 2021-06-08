import React, {useState} from 'react'
import {useHome} from '../../context/home-context'
import ModalCargarCliente from '../home/modals/ModalCargarCliente'
import { useToasts } from "react-toast-notifications";


function SearchClientes() {
    const {Allclientes, setShowNuevoCliente, setLabelCliente, setFacturaXcliente} = useHome();
    const [buscarCliente, setBuscarCliente] = useState("");
    const { addToast } = useToasts();
    function buscadorClientes(buscarCliente){
        return function(x){
          return (
            x.nombre.toLowerCase().includes(buscarCliente) || !buscarCliente ||
            x.telefono.toLowerCase().includes(buscarCliente) || !buscarCliente ||
            x.domicilio.toLowerCase().includes(buscarCliente) || !buscarCliente
          ) 
        }
      }
      const onAddCliente = (clientes) => {
        setLabelCliente(clientes)
        setFacturaXcliente([])
        addToast("Cliente agregado", {
            appearance: "success",
            autoDismiss: true,
        });
      };
    return (
        
        <div >
            <div className="container-fluid">
                <div className="row">
                    <button className="btn btn-custom-clientes col-md-3"
                    onClick={()=>setShowNuevoCliente(true)}
                     >Nuevo Cliente</button>
                     {Allclientes && (
                        <input placeholder="Buscar cliente..." 
                        className="col-md-9 form-control searchCli"
                        onChange={e => setBuscarCliente(e.target.value.toLowerCase())}
                        />
                        )}
                    

                <div className="col-md-12 tabla4">
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
                    <tr className="hover-tr" onClick={onAddCliente}>
                        <td>0</td>
                        <td>Consumidor Final</td>
                        <td></td>
                        <td></td>
                    </tr>
                {Allclientes.filter(buscadorClientes(buscarCliente)).map((clientes) => (
                    <tr className="hover-tr"
                    onClick={async()=>
                    await onAddCliente(clientes)
                    }>
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
            </div>
            
            <ModalCargarCliente/>
        </div>
    )
}

export default SearchClientes
