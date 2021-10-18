import { Button, Modal } from "react-bootstrap";

export const ModalCajaDiaria = ({ show, handleClose, data }) => {
  const total = data.reduce((a, b) => a + b.TotalPagado, 0);


  return (
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title id="modal-tittle">Listado Caja diaría</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <table className="table mb-0">
          <tbody>
          {data.length > 0  &&
            <tr>
              <td colSpan="2" className="border-0">
                <table className="table">
                  <thead>
                    <tr>
                      <th colSpan="5" className="border-0">
                        Facturas pagadas
                      </th>
                    </tr>
                    <tr>
                      <th>ID</th>
                      <th>N° Factura</th>
                      <th>Nombre Cliente</th>
                      <th>Valor Total</th>
                      <th>Pagado</th>
                    </tr>
                  </thead>
                  <tbody>
                  {data.filter((p) => p.Tipo === '1').map((p,i) => (
                    <tr>
                      <td>{p.Id}</td>
                      <td>{p.NumFactura_Estado}</td>
                      <td>{p.Cliente}</td>
                      <td>{p.ValorTotal}</td>
                      <td>{p.TotalPagado}</td>
                    </tr>
                  ))}
                  </tbody>
                </table>
              </td>
            </tr>
          }

          {data.length  > 0 &&
            <tr>
              <td colSpan="2" className="border-0">
                <table className="table">
                  <thead>
                    <tr>
                      <th colSpan="5" className="border-0">
                        Pedidos pagados
                      </th>
                    </tr>
                    <tr>
                      <th>ID</th>
                      <th>Nombre Cliente</th>
                      <th>Estado</th>
                      <th>Valor Total</th>
                      <th>Pagado</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.filter((p) => p.Tipo === '0').map((p,i) => (
                      <tr key={i}>
                        <td>{p.Id}</td>
                        <td>{p.Cliente}</td>
                        <td>{p.NumFactura_Estado}</td>
                        <td>{p.ValorTotal}</td>
                        <td>{p.TotalPagado}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </td>
            </tr>
          }

          </tbody>

          <tfoot>
            <tr>
              <th>Total Consolidado</th>
              <th className="text-center">${total}</th>
            </tr>
          </tfoot>
        </table>
      </Modal.Body>
      <Modal.Footer>
        <Button className="btn btn-custom" onClick={handleClose}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
