import React, {useState} from 'react'
import {Modal} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import {useHome} from '../../../context/home-context'
import Button from '../Button';
import clienteAxios from '../../../config/clienteAxios'
import { useToasts } from "react-toast-notifications";

function ModalIconos(props) {
  const [margenCategory, setMargenCategory] = useState({})
  const {showIconoCategory, setShowIconosCategory, currentCategoria} =props;
  const { addToast } = useToasts();
  const handleClose = () => {
    setShowIconosCategory(false);  
  }
  const handleChange = e=> {
    const {name, value} = e.target;
    setMargenCategory({...margenCategory, [name]:value})
    console.log(margenCategory);
  }
  return (
    <>
      <Modal
        show={showIconoCategory}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title id="modal-tittle">{currentCategoria.nombre}</Modal.Title>
        </Modal.Header> 
        <Modal.Body>
        <label>Margen de Categoria</label>
        <input
            type="text"
            className="form-control custom-input"
            placeholder=""
            value={margenCategory.nombre}
            onChange={handleChange} 
        />
        </Modal.Body>
        <Modal.Footer>
          <Button className="modal-button-create" >
            Si
          </Button>
          <Button className="modal-button-cancel" onClick={handleClose}>
            No
          </Button>
          
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalIconos;
