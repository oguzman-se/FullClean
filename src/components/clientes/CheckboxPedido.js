import React, { useState } from "react";
import { useHome } from "../../context/home-context";

const CheckboxPedido = ({ pedido }) => {
    const [checked, setChecked] = useState(false);
    let { arrGenerateFact, setArrGenerateFact } = useHome();

    const handleInputChange = () => {
        if (checked) {
            let toArr = arrGenerateFact.filter(
                (df) => parseInt(df) !== pedido.id
            );
            setArrGenerateFact(toArr);
            setChecked(false);
            console.log(
                "tenemos este arrGenerate",
                arrGenerateFact,
                " y este por mandar",
                toArr
            );
        } else {
            setChecked(true);
            let toArr = [...arrGenerateFact, pedido.id];
            setArrGenerateFact(toArr);
            console.log(
                "tenemos este arrGenerate",
                arrGenerateFact,
                " y este por mandar",
                toArr
            );
        }
    };

    return (
        <>
            <input
                className="form-check-input"
                type="checkbox"
                name="pedidoCheck"
                value={pedido.id}
                style={{
                    marginLeft: 10,
                    marginTop: 2,
                }}
                onChange={handleInputChange}
                checked={checked}
            />
        </>
    );
};

export default CheckboxPedido;
