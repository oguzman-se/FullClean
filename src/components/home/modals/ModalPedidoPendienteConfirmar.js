import React from 'react'
import {Modal} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import {useHome} from '../../../context/home-context'
import Button from '../Button';


function ModalPendienteConf(props) {
  const {onRemoveAll, setLabelCliente, Allclientes} = useHome()

  const handleClose = () => setShowPendiente(false);  
  const {showPendiente, setShowPendiente, onSubmit, currentPedido, setShowPedidosPendientes, showPedidosPendientes} = props;
  const yes = ()=>{
    let currentCliente ;
            if (currentPedido.cliente_id !== 0){
                currentCliente = Allclientes.filter((c)=> c.id === currentPedido.cliente_id)
            } else{
                currentCliente = [{
                    id: 0,
                    cliente: "Consumidor Final"
                }]
            }
    onRemoveAll()
    handleClose()
    console.log("currentCliente", currentCliente)
    console.log("currentPedido", currentPedido)
    setLabelCliente(currentCliente[0])
    onSubmit(currentPedido.id)
    if(showPedidosPendientes === true){
      setShowPedidosPendientes(false)
  }
  }
  return (
    <>
      <Modal
        show={showPendiente}
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

export default ModalPendienteConf;
