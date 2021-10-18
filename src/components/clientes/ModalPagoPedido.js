import React, { useState } from "react";
import { Modal, ModalFooter } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import clienteAxios from "../../config/clienteAxios";
import { useHome } from "../../context/home-context";
import { useToasts } from "react-toast-notifications";

function ModalPagoPedido({ showPago, setShowPago, currentPedido }) {
  const { addToast } = useToasts();

  let { obtenerClientes, obtPedidoXcliente, getDeudaXcliente } = useHome();
  const handleClose = () => setShowPago(false);

  console.log(currentPedido);
  const [pago, setPago] = useState(0);
  let [tot, setTot] = useState(0);

  const pagar = async () => {
    await clienteAxios
      .put(`pedidos/${currentPedido.id}`, {
        pagado: parseFloat(currentPedido.pagado) + parseFloat(pago),
      })
      .then(() => {
        clienteAxios
          .post(`pedidos/agregarPago`, {
            cliente_id: currentPedido.cliente_id,
            pago: parseFloat(pago),
            pedido_id: currentPedido.id,
          })
          .then(() => {
            obtPedidoXcliente();
            getDeudaXcliente();
            setShowPago(false);
            addToast("Pago realizado", {
              appearance: "success",
              autoDismiss: true,
            });
            obtenerClientes();
          })
          .catch(() => {
            addToast("Error generando el pago", {
              appearance: "error",
              autoDismiss: true,
            });
          });
      })
      .catch(() => {
        addToast("Error generando el pago", {
          appearance: "error",
          autoDismiss: true,
        });
      });
  };

  return (
    <>
      <Modal
        show={showPago}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title id="modal-tittle">Pagar pedido</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <input
              className="col-md-12 form-control modal-search"
              type="number"
              placeholder="Monto a abonar"
              onChange={(e) => {
                if (e.target.value > 0) {
                  setPago(e.target.value);
                  setTot(
                    currentPedido.valor_cubierto + parseFloat(e.target.value)
                  );
                }
              }}
            />
            <p style={{ display: "inline-block" }}>
              Valor total:
              <strong> ${currentPedido.valor_total}</strong>
            </p>
            <p style={{ display: "inline-block", float: "right" }}>
              Valor pagado:
              <strong> ${currentPedido.pagado}</strong>
            </p>
            {/*<p>
                            El saldo a pagar:{" "}
                            {tot === 0
                                ? factura.valor_total - factura.valor_cubierto
                                : factura.valor_total - tot}
                        </p>*/}
          </div>
        </Modal.Body>
        <ModalFooter>
          <button className="modal-button-create" onClick={pagar}>
            Pagar
          </button>
          <button className="modal-button-cancel" onClick={handleClose}>
            Cerrar
          </button>
        </ModalFooter>
      </Modal>
    </>
  );
}

export default ModalPagoPedido;
