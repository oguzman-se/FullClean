import React, {useState} from 'react'
import {Modal} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import {useHome} from '../../../context/home-context'
import clienteAxios from '../../../config/clienteAxios'


function ModalCargarCliente(props) {
  const {showCargarCliente, setShowCargarCliente} = props;
  const handleClose = () => setShowCargarCliente(false);  


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
    .then((res) => {
      console.log(res.data)
    })
    .catch((err)=>{
      console.log("error post", err)
    })
    
  }
  function handle(e){
      const newCliente = {...clientes}
      newCliente[e.target.id] = e.target.value
      setClientes(newCliente)
  }


  return (
    <>
      <Modal
        show={showCargarCliente}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title id="modal-tittle">Cargar Cliente</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
          </form>
        
        </Modal.Body>
        <Modal.Footer>
          <button className="modal-button-create"
          onClick={(e)=> submit(e)}
          >Crear Producto</button>
          <button className="modal-button-cancel" onClick={handleClose}>
            Cancelar
          </button>
          
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalCargarCliente;
