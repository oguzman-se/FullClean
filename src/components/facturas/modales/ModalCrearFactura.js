import React from 'react'
import {Modal} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import Button from '../../home/Button'
import { useToasts } from "react-toast-notifications";
import {useHome} from '../../../context/home-context'
function ModalCrearFactura(props) {
  const {Allclientes, setLabelCliente,
    showNuevoCliente, setShowNuevoCliente} = useHome([]);
  const { addToast } = useToasts();
  const {showFactura, setShowFactura } = props;
  const handleClose = () => {
    setShowFactura(false);  
  }
  return (
    <>
      <Modal
        show={showFactura}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title id="modal-tittle">Crear factura</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label for="exampleInputEmail1" className="col-md-4">Clientes</label>
          <select className="col-md-8">
          {Allclientes.map((clientes) => (
            <option>{clientes.nombre}</option>
            ))}
          </select>
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

export default ModalCrearFactura;
