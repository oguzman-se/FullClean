import React, {useState} from 'react'
import {Modal} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import {useHome} from '../../../context/home-context'
import clienteAxios from '../../../config/clienteAxios'


function ModalDetalleProducto(props) {
  const {showDetalleProd, setShowDetalleProd, product, onAdd} = props;
  const handleClose = () => setShowDetalleProd(false);  

  return (
    <>
      <Modal
        show={showDetalleProd}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title id="modal-tittle">Detalle del Producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <ul class="list-group">
          <li class="list-group-item">Nombre: {product.nombre}</li>
          <li class="list-group-item">Costo: ${product.costo}</li>
          <li class="list-group-item">Precio: ${product.precio}</li>
        </ul>
        
        </Modal.Body>
        <Modal.Footer>
          <button className="modal-button-create"
          onClick={()=>onAdd(product)}
          >Agregar Producto</button>
          <button className="modal-button-cancel" onClick={handleClose}>
            Cancelar
          </button>
          
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalDetalleProducto;
