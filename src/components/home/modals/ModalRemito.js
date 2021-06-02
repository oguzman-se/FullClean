import React from 'react'
import {Modal} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import Button from '../Button';
import ButtonToPrint from '../ButtonToPrint'

function ModalRemito(props) {
  const {showRemito, setShowRemito} = props;
  const handleClose = () => {setShowRemito(false)}
  return (
    <>
      <Modal
        show={showRemito}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title id="modal-tittle">Advertencia</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ButtonToPrint/>
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

export default ModalRemito;
