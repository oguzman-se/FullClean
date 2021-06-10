import React from 'react'
import {Modal} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import {useHome} from '../../../context/home-context'
import Button from '../Button';
import { usePedidos } from '../../../context/pedidos-context';


function ModalPendienteConf(props) {
  const {onRemoveAll, setLabelCliente, Allclientes, setCurrentMetodo, currentMetodo} = useHome()
  const {setCurrentPedido} = usePedidos()
  const handleClose = () => setShowPendiente(false);  
  const {showPendiente, setShowPendiente, onSubmit, currentPedido,
     setShowPedidosPendientes, showPedidosPendientes, helpCurrentPedido} = props;
  const yes = ()=>{
    console.log("helpCurrentPedido", helpCurrentPedido)
    setCurrentPedido(helpCurrentPedido)
    let currentCliente ;
    if (helpCurrentPedido.cliente_id !== 0){
        currentCliente = Allclientes.filter((c)=> c.id === helpCurrentPedido.cliente_id)
    } else{
        currentCliente = [{
            id: 0,
            cliente: "Consumidor Final"
        }]
    }
    handleClose()
    setLabelCliente(currentCliente[0])
    setCurrentMetodo({ ...currentMetodo, metodo: helpCurrentPedido.metodo_pago });
    onSubmit(helpCurrentPedido.id)
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
