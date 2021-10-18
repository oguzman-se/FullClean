import React, { useEffect, useState } from "react";
import { usePedidos } from "../../context/pedidos-context";
import { usePedidosHook } from "./hooks";
import { ModalCajaDiaria } from "./modales/ModalCajaDiaria";

function SubPedidosLeft({ filtroBuscador }) {
  const { pedidos } = usePedidos();
  const { handleOpemodal, show, handleClose, cashFlow } = usePedidosHook();

  const [valorEfec, setValorEfec] = useState(0);
  const [valorCredito, setValorCredito] = useState(0);
  const [valorDebito, setValorDebito] = useState(0);
  const [valorCC, setValorCC] = useState(0);

  useEffect(() => {
    let toEf = 0;
    let toCred = 0;
    let toDeb = 0;
    let toCC = 0;
    pedidos.filter(filtroBuscador).forEach((p) => {
      if (p.metodo_pago === "efectivo") {
        toEf = toEf + p.valor_total;
      } else if (p.metodo_pago === "cuenta corriente") {
        toCC = toCC + p.valor_total;
      } else if (p.metodo_pago === "tarjeta debito") {
        toDeb = toDeb + p.valor_total;
      } else if (p.metodo_pago === "tarjeta credito") {
        toCred = toCred + p.valor_total;
      }
    });
    setValorCC(toCC);
    setValorEfec(toEf);
    setValorCredito(toCred);
    setValorDebito(toDeb);
  }, [pedidos, filtroBuscador]);

  return (
    <>
      <div className="container-fluid">
        <div className="row ">
          <div className="col-xs-12 col-md-12 labelbottom">
            <label>
              {pedidos.filter(filtroBuscador).reduce((acc) => {
                return parseInt(acc) + 1;
              }, 0)}{" "}
              Pedidos
            </label>
          </div>
        </div>

        <div className="row">
          <div className="col-md-3">
            <label className="label-bottom-pedidos text-center">Efectivo</label>
            <button className="boton2">${valorEfec}</button>
          </div>
          <div className="col-md-3">
            <label className="label-bottom-pedidos text-center">
              Tarjeta de Credito
            </label>
            <button className="boton2">${valorCredito}</button>
          </div>
          <div className="col-md-3">
            <label className="label-bottom-pedidos text-center">
              Tarjeta de Debito
            </label>
            <button className="boton2">${valorDebito}</button>
          </div>
          <div className="col-md-3">
            <label className="label-bottom-pedidos text-center">
              Cuenta Corriente
            </label>
            <button className="boton2">${valorCC}</button>
          </div>
          <div className="col-md-3 mt-3">
            <label className="label-bottom-pedidos text-center mb-0">
              Caja Diaría
            </label>
            <button className="boton2" onClick={handleOpemodal}>
              Ver más
            </button>
          </div>
        </div>
      </div>
      <ModalCajaDiaria data={cashFlow} show={show} handleClose={handleClose} />
    </>
  );
}

export default SubPedidosLeft;
