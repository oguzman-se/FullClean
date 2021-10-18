import { useState } from "react";
import clienteAxios from "../../../config/clienteAxios";
import { useToasts } from "react-toast-notifications";

export const usePedidosHook = () => {
  const [show, setShow] = useState(false);
  const [cashFlow, setCashFlow] = useState([])
  const { addToast } = useToasts();

  const handleOpemodal = () => {
    setShow(true);
    getDataCajaDiaria();
  };

  const handleClose = () => {
    setShow(false);
  };

  const getDataCajaDiaria = () => {
    clienteAxios
      .get("/pagos/caja")
      .then((res) => {
        setCashFlow(res.data)
      })
      .catch((err) => {  
        console.log(err)
        addToast("No pudimos consultar la caja diaria", {
        appearance: "error",
        autoDismiss: true,
      })
    });
  };

  console.log(cashFlow  )

  return {
    show,
    handleClose,
    handleOpemodal,
    getDataCajaDiaria,
    cashFlow
  };
};
