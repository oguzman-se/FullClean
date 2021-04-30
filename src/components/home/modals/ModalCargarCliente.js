import React from 'react'
import {Modal} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import {useHome} from '../../../context/home-context'


function ModalCargarCliente(props) {
  const {showCargarCliente, setShowCargarCliente} = props;
  const {Allclientes, onAddCliente} = useHome([]);
  const handleClose = () => setShowCargarCliente(false);  

  return (
    <>
      <Modal
        show={showCargarCliente}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title id="modal-tittle">Cargar Cliente</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="tabla2">
                <table className="table">
                <thead className="thead-dark">
                    <tr >
                        <th  scope="col">ID</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Domicilio</th>
                        <th scope="col">Telefono</th>
                    </tr>
                </thead>
                <tbody>
                {Allclientes.map((clientes) => (
                    <tr onClick={async()=>
                    await onAddCliente(clientes)
                    }>
                        <td>{clientes.id}</td>
                        <td>{clientes.nombre}</td>
                        <td>{clientes.domicilio}</td>
                        <td>{clientes.telefono}</td>
                    </tr>
                    ))}
                    
                </tbody>            
                </table>
        </div>
        
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
