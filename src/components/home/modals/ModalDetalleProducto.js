import React from 'react'
import {Modal} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import {useHome} from '../../../context/home-context'


function ModalCargarCliente(props) {
  const {showDetalleProd, setShowDetalleProd} = props;
  const {products} = useHome();
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
          <Modal.Title id="modal-tittle">Detalle producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {products.map((product)=>(
          <tr key={product.id} className="trhover">
              <td>{product.id}</td>
              <td className="name">{product.nombre}</td>
              <td>${product.precio}</td>
                        
          </tr>
        ))}      
        </Modal.Body>
        <Modal.Footer>
          <button className="modal-button-cancel" onClick={handleClose}>
            Cancelar
          </button>
          
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalCargarCliente;
