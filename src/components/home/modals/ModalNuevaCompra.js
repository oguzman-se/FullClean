import React from 'react'
import {Modal} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import {useHome} from '../../../context/home-context'
import Button from '../Button';


function ModalNuevaCompra(props) {
  const {onRemoveAll, labelCliente, setLabelCliente} = useHome()
  const handleClose = () => setShowNuevaCompra(false);  
  const {showNuevaCompra, setShowNuevaCompra} = props;
  const yes = ()=>{
    onRemoveAll()
    handleClose()
    setLabelCliente({})
  }
  return (
    <>
      <Modal
        show={showNuevaCompra}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title id="modal-tittle">Advertencia</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <h3>Los cambios en el carrito de compra no han sido guardados, esta accion perdera los cambios realizados.
            ¿Desea Continuar?
        </h3>
        </Modal.Body>
        <Modal.Footer>
          <Button className="modal-button-create" onClick={yes}>
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

export default ModalNuevaCompra;
