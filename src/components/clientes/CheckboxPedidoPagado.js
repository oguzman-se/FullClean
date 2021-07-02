import React, { useState } from "react";
import clienteAxios from "../../config/clienteAxios";
import {useHome} from "../../context/home-context";

const CheckboxPedidoPagado = ({ pedido }) => {

    let {getDeudaXcliente} = useHome();

    const [checked, setChecked] = useState(() => {
        if (pedido.pagado) {
            return pedido.pagado;
        } else {
            return false;
        }
    });

    const submitPagado = async (valor) => {
        await clienteAxios
            .put(`/pedidos/${pedido.id}`, { pagado: valor })
            .then((res) => {
                //ACA HAY Q RECALCULAR LA DEUDA????
                getDeudaXcliente(pedido.cliente_id)
                setChecked(valor);
            })
            .catch((err) => console.log("error pagando el pedido", err));
    };

    const handleInputChange = () => {
        if (checked) submitPagado(false);
        else submitPagado(true);
    };

    return (
        <input
            className="form-check-input"
            type="checkbox"
            name="pedidoCheck"
            value={pedido.pagado ? pedido.pagado : ""}
            style={{
                marginLeft: 17,
                marginTop: 2,
            }}
            onChange={handleInputChange}
            checked={checked}
        />
    );
};

export default CheckboxPedidoPagado;
