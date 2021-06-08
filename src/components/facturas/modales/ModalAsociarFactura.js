import React, {useState} from 'react'
import {Modal} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import Button from '../../home/Button'
import {usePedidos} from '../../../context/pedidos-context'
import FacturasItem from '../FacturasItem';
import clienteAxios from '../../../config/clienteAxios'
import { useToasts } from "react-toast-notifications";
function ModalAsociarFactura(props) {
  const { addToast } = useToasts();
  const {pedidos, obtenerFacturas, currentFactura, pedidosArray} = usePedidos()
  const [modalAociar, setModalAsociar] = useState(false)
  const {showAsociar, setShowAsociar, Allclientes} = props;
  const handleClose = () => {
  setShowAsociar(false);
  }
  const handleYes = async () => {
    console.log(currentFactura.pedido_id)
      await clienteAxios
          .post("/pedidosfacturados", {
            pedido_id: pedidosArray,
            factura_id: currentFactura.id
          })
          .then((res) => {
              console.log(res.data);
              const actualizar = async () => {
                await clienteAxios
                    .put(`/facturas/${currentFactura.id}`, {
                      pedido_id: pedidosArray,
                    })
                    .then((res) => {
                      console.log(res.data);
                      obtenerFacturas()
                      handleClose()
                    })
                    .catch((err) => {
                        console.log("error put", err);
                        addToast("Esta queriendo asignar un pedido a una factura de diferente cliente", {
                          appearance: "error",
                          autoDismiss: true,
                      });
                      handleClose()
                      obtenerFacturas()
                    });
            };
            actualizar();
          })
          .catch((err) => {
              console.log("error post", err);
          });
  };
  return (
    <>
      <Modal
        show={showAsociar}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title id="modal-tittle">Asociar Pedido</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="tabla2">
            <table className="table">
              <thead className="thead-dark">
                  <tr >
                      <th  scope="col">ID</th>
                      <th scope="col">Nombre del Cliente</th>
                      <th scope="col">Estado</th>
                      <th scope="col">Valor Total</th>
                      <th scope="col">Fecha y Hora</th>
                      <th scope="col"></th>
                      <th scope="col"></th>
                  </tr>
              </thead>
              <tbody>
              {pedidos.filter(pedido => pedido.estado === "pendiente" || "confirmado")
              .map((pedido)=>{
                return(
                  <FacturasItem
                      Allclientes={Allclientes}
                      pedido={pedido}
                  />
              )
              }
              )}
              </tbody>            
            </table>
        </div>
        </Modal.Body>
        <Modal.Footer>
          <Button className="modal-button-create"
          onClick={handleYes}
          >
            Asociar
          </Button>
          <Button className="modal-button-cancel" onClick={handleClose}>
            Cerrar
          </Button>
          
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalAsociarFactura;
