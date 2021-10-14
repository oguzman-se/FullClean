import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import PropTypes from "prop-types";
import { calculateDay } from "../../../utils";
import { useToasts } from "react-toast-notifications";

import { usePedidos } from "../../../context/pedidos-context";

const ModalNotaCredito = (props) => {
  const { pedidos } = usePedidos()
  const { show, setShow, setCurrent, setVentaCredito } = props;
  const [search, setSearch] = useState("");
  const { addToast } = useToasts();

  const handleClose = () => {
    setShow(false);
  };

  const handleSearch = ({ target }) => {
    setSearch(target.value.toLowerCase());
  };

  const filtrarPedidos = () => {
    return (pedido) => pedido.id?.toString().includes(search) || !search;
  };

  const handleCurrent = (id) => {
    setCurrent(id);
    setShow(false);
    addToast(`Nota de credito seteada, relacionada al pedido (${id})`, {appearance: "success",autoDismiss: true,});
    setVentaCredito(`NC-${id}`)
  };

  return (
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title id="modal-tittle">Listado Pedidos</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <input
            className="col-md-12 form-control modal-search"
            type="text"
            placeholder="Buscar"
            aria-label="Search"
            defaultValue={search}
            onChange={handleSearch}
          />
        </div>
        {pedidos.length > 0 ? (
          <div className="tabla2">
            <table className="table">
              <thead className="thead-dark sticky">
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Nombre del Cliente</th>
                  <th scope="col">Estado</th>
                  <th scope="col">Valor Total</th>
                  <th scope="col">Fecha y Hora</th>
                </tr>
              </thead>
              <tbody>
                {pedidos
                .filter((p) => p.tipo_pedido === 'venta' && p.estado === 'confirmado')
                .filter(filtrarPedidos()).map((p) => (
                  <tr
                    key={p.id}
                    className="cursor-pointer hover-tr"
                    onClick={() => handleCurrent(p.id)}
                  >
                    <td>{p.id}</td>
                    <td>{p.full_name}</td>
                    <td>{p.estado.toUpperCase()}</td>
                    <td>${p.valor_total}</td>
                    <td>{p?.fechayhora && calculateDay(p?.fechayhora)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <h2>No se encontraron pedidos</h2>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button className="btn btn-custom" onClick={handleClose}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

ModalNotaCredito.propTypes = {
  show: PropTypes.bool,
  setShow: PropTypes.func,
  listPedidos: PropTypes.array,
  handleCurrent: PropTypes.func,
};

export default ModalNotaCredito;
