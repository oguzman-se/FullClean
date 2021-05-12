import React from 'react'
import {Modal} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import Button from '../Button';
import PedidoPendiente from '../PedidoPendiente'

function ModalPedidosPendientes(props) {
  const {showPedidosPendientes, setShowPedidosPendientes} = props;
  const handleClose = () => {
    setShowPedidosPendientes(false);
  }
  

  return (
    <>
      <Modal
        show={showPedidosPendientes}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title id="modal-tittle">Pedidos Pendientes</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <PedidoPendiente/>
        </Modal.Body>
        <Modal.Footer>
        
          <Button className="modal-button-cancel" onClick={handleClose}>
            Cerrar
          </Button>
          
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalPedidosPendientes;
