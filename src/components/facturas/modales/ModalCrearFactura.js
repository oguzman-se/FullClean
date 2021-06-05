import React, {useState} from 'react'
import {Modal} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import Button from '../../home/Button'
import { useToasts } from "react-toast-notifications";
import {useHome} from '../../../context/home-context'
import {usePedidos} from '../../../context/pedidos-context'
import clienteAxios from '../../../config/clienteAxios'
function ModalCrearFactura(props) {
  const [currentCliente2, setCurrentCliente2] = useState({
    cliente_id: 1
  })
  const {Allclientes} = useHome([]);
  const {obtenerFacturas} = usePedidos([]);
  const { addToast } = useToasts();
  const {showFactura, setShowFactura } = props;
  const handleClose = () => {
    setShowFactura(false);  
  }
  function handle(e){
    let newMetodo = {...currentCliente2}
    newMetodo[e.target.name] = e.target.value
    console.log(newMetodo)
    setCurrentCliente2(newMetodo)
}
  const submit = async () => {
    await clienteAxios
        .post("/facturas", {
            cliente_id: currentCliente2.cliente_id,
            valor_total: 0,
            valor_cubierto: 0,
            pedido_id: 0
        })
        .then((res) => {
            console.log(res.data);
            obtenerFacturas()
        })
        .catch((err) => {
            console.log("error post", err);
        });
};
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
          <select className="col-md-8" onChange={(e) => handle(e)} name="cliente_id">
          {Allclientes.map((clientes) => (
            <option value={clientes.id}>{clientes.nombre}</option>
            ))}
          </select>
        </Modal.Body>
        <Modal.Footer>
          <Button className="modal-button-create"
          onClick={submit}
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
