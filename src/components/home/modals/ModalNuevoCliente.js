import React, {useState} from 'react'
import {Modal} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import CargarClientes from '../../clientes/CargarClientes'


function ModalNuevoCliente(props) {
  const {showNuevoCliente, setShowNuevoCliente} = props;
 
  const handleClose = () => setShowNuevoCliente(false);  
 
  return (
    <>
      <Modal
        show={showNuevoCliente}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title id="modal-tittle">Cargar Cliente</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CargarClientes
            handleClose={handleClose}
          />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalNuevoCliente;
