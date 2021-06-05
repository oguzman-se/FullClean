import React from 'react'
import {Modal} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import Button from '../../home/Button'
import ListPedidos from '../../pedidos/ListPedidos'
import { useToasts } from "react-toast-notifications";
function ModalAsociarFactura(props) {

  const {showAsociar, setShowAsociar} = props;
  const handleClose = () => {
    setShowAsociar(false);  
  }
  return (
    <>
      <Modal
        show={showAsociar}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title id="modal-tittle">Asociar Pedido</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListPedidos/>
        </Modal.Body>
        <Modal.Footer>
          <Button className="modal-button-create"
          >
            Crear
          </Button>
          <Button className="modal-button-cancel" onClick={handleClose}>
            Cerrar
          </Button>
          
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalAsociarFactura;
