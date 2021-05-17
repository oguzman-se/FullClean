import React from 'react'
import {Modal} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import {useHome} from '../../../context/home-context'
import Button from '../Button';


function ModalConfirmarPedido(props) {
  const handleClose = () => setShowModalConfirmar(false);  
  const {showModalConfirmar, setShowModalConfirmar, handleEstado} = props;
  
  return (
    <>
      <Modal
        show={showModalConfirmar}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title id="modal-tittle">Advertencia</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <h3>¿Desea confirmar el pedido?</h3>
        </Modal.Body>
        <Modal.Footer>
          <Button className="modal-button-create" onClick={()=>{handleEstado("confirmado")}}>
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

export default ModalConfirmarPedido;
