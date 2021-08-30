import React from "react";
import Select from "react-select";

const SelectProd = ({ products, setter }) => {
    const handleChange = (newValue, evento) => {
        if (evento.action === "clear") {
            setter((prev) => ({
                ...prev,
                producto_id: 0,
            }));
        } else if (evento.action === "select-option") {
            setter((prev) => ({
                ...prev,
                producto_id: newValue.value,
            }));
        }
    };

    return (
        <>
            <Select
                classNamePrefix="select"
                defaultValue={products[0]}
                isSearchable
                isClearable
                name="color"
                options={products}
                onChange={handleChange}
            />
        </>
    );
};

export default SelectProd;
