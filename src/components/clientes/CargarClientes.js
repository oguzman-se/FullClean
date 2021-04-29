import React, {useState} from 'react'
import {useHome} from '../../context/home-context'
import clienteAxios from '../../config/clienteAxios'

function CargarClientes() {
  const {Allclientes, setAllClientes} = useHome([]);
  const [clientes, setClientes] = useState({
    id: "",
    nombre:"",
    domicilio:"",
    telefono: ""
  })

  const submit = async () => {
    await clienteAxios.post('/clientes', {
      nombre: clientes.nombre,
      domicilio: clientes.domicilio,
      telefono: clientes.telefono
    })
    .then((res) =>{
      console.log(res.data)
      const getClientes = async () => {
        await clienteAxios
        .get('/categorias')
        .then((r) => {
          setAllClientes(r.data)
          setClientes(r.data)
          console.log("Allclientes",Allclientes)
          console.log("clientes",clientes)
        })
        .catch((r) => {
          console.log("error get", r);
          console.log(Allclientes)
        });
      };
      getClientes();
    })
    .catch((err) => {
      console.log("error post", err);
    });
    
  }
  function handle(e){
      const newCliente = {...clientes}
      newCliente[e.target.id] = e.target.value
      setClientes(newCliente)
  }
    return (
      <form >
      <label >Nombre</label>
      <input type="text" className="form-control custom-input" 
      placeholder="" aria-label="Username"
      onChange={(e) => handle(e)} id="nombre" value={clientes.nombre}
      />
      <label >Domicilio</label>
      <input type="text" className="form-control custom-input" 
      placeholder="" aria-label="Username"
      onChange={(e) => handle(e)} id="domicilio" value={clientes.domicilio}
      />
      <label >Telefono</label>
      <input type="text" className="form-control custom-input" 
      placeholder="" aria-label="Username"
      onChange={(e) => handle(e)} id="telefono" value={clientes.telefono}
      />
      <button className="modal-button-create"
          onClick={(e)=> submit(e)}
          >Crear Cliente</button>
    </form>
    )
}

export default CargarClientes
