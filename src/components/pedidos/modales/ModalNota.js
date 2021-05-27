import React from 'react'
import {Modal} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import Button from '../../home/Button'
import clienteAxios from '../../../config/clienteAxios'
import {useHome} from '../../../context/home-context'
import {usePedidos} from '../../../context/pedidos-context'
import { useToasts } from "react-toast-notifications";
function ModalNota(props) {
  const {currentPedido, setCurrentPedido, setPedidos} = usePedidos()
  const { addToast } = useToasts();
  const {showNota, setShowNota, pedido} = props;
  const handleClose = () => {
    setShowNota(false);  
  }
  const handleChange = e => {
    const {name, value} = e.target;
    setCurrentPedido((prevState)=>({
      ...prevState,
      [name]: value
    }))
    console.log("currentPedido",currentPedido);
  }
  const actualizar = async () => {
    await clienteAxios.put(`/pedidos/${pedido.id}`, {
      notas: currentPedido.notas
    })
    .then((res) =>{
      console.log(res.data)
      const getNotas = async () => {
        await clienteAxios
        .get('/pedidos')
        .then((r) => {
          setPedidos(r.data)
          setCurrentPedido({})
          addToast("Nota agregada", {
            appearance: "success",
            autoDismiss: true,
        });
        })
        .catch((r) => {
          console.log("error get", r);
        });
      };
      getNotas();
    })
    .catch((err) => {
      console.log("error put", err);
    });
  }
  return (
    <>
      <Modal
        show={showNota}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title id="modal-tittle">Advertencia</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label for="exampleInputEmail1">Nota del Pedido</label>
            <input type="text" className="form-control custom-input" 
            name="notas" value={currentPedido.notas}
            onChange={handleChange}
            />
        </Modal.Body>
        <Modal.Footer>
          <Button className="modal-button-create" 
           onClick={()=> actualizar(currentPedido)}
          >
            Agregar
          </Button>
          <Button className="modal-button-cancel" onClick={handleClose}>
            Cerrar
          </Button>
          
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalNota;
