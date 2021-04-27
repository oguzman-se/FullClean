import React, {useState, useEffect} from 'react'
import {Modal} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import {useHome} from '../../../context/home-context'
import clienteAxios from '../../../config/clienteAxios'

function ModalCustom() {
  const {setShowCategoria, showCategoria} = useHome();
  const handleClose = () => setShowCategoria(false);
  const [categoria, setCategoria] = useState({
    id: "",
    nombre:""
  })

  const submit = async (e) => {
    e.preventDefault();
    await clienteAxios.post('/categorias', {
      nombre: categoria.nombre
    })
    .then(res => {
      console.log(res.categoria)
    })
    .catch ((e) => {
      console.log(e)
    })
  }
  function handle(e){
      const newCategoria = {...categoria}
      newCategoria[e.target.id] = e.target.value
      setCategoria(newCategoria)
      console.log(newCategoria)
  }
  
  return (
    <>
      <Modal
        show={showCategoria}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title id="modal-tittle">Nuevo Producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form >
          <label for="exampleInputEmail1">Crear Categoria</label>
          <input type="text" className="form-control custom-input" 
          placeholder="" aria-label="Username"
          onChange={(e) => handle(e)} id="nombre" value={categoria.nombre}
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

export default ModalCustom;
