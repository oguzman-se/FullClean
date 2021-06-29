import React, { useState } from "react";

const BarcodeItem = ({ barcodePressed }) => {
    const [that, setThat] = useState("");

    const handleChange = (e) => {
        setThat(e.target.value);
    };

    return (
        <input
            type="text"
            className="form-control custom-input"
            placeholder="Escanee un código de barras o escribalo y aprete ENTER"
            onChange={handleChange}
            onKeyPress={(e) => barcodePressed(e, that, setThat)}
            value={that}
        />
    );
};

export default BarcodeItem;
