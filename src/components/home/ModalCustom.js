import React from 'react'
import {Modal} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import {useHome} from '../../context/home-context';

function ModalCustom() {
  const {setShow, show} = useHome();
  const handleClose = () => setShow(false);

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title id="modal-tittle">Nuevo Producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div>
          <label for="exampleInputEmail1">Titulo</label>
          <input type="text" className="form-control" 
          placeholder="Username" aria-label="Username"/>
        </div>
        <div>
          <label for="exampleInputEmail1">Descripcion</label>
          <input type="text" className="form-control" 
          placeholder="Descripcion"/>
        </div>
        <div>
          <label for="exampleInputEmail1">Categoria Padre</label>
          <input type="text" className="form-control" 
          placeholder="Categoria Padre"/>
        </div>
        <div>
          <label for="exampleInputEmail1">Imagen</label>
          <div className="custom-file">
            
            <input type="file" className="custom-file-input" id="customFile"/>
            <label className="custom-file-label" for="customFile">Choose file</label>
          </div>
        </div>
        </Modal.Body>
        <Modal.Footer>
          <button className="modal-button-create">Crear Producto</button>
          <button className="modal-button-cancel" onClick={handleClose}>
            Cancelar
          </button>
          
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalCustom;
