import React from 'react'
import {Modal} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import Button from '../Button';


function ModalPedidosPendientes(props) {
  const handleClose = () => setShowPedidosPendientes(false);  
  const {showPedidosPendientes, setShowPedidosPendientes} = props;

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
        <h3>
        ****PEDIDOS OENTIENTES****
        </h3>
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
