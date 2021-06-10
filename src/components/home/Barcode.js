import React from "react";
import { useState } from "react";
import { useHome } from "../../context/home-context";
import ModalBarcode from "./modals/ModalBarcode";

function Barcode() {
    const { AllCodigos } = useHome([]);
    const [barcode, setBarcode] = useState([]);
    const [showBarcode, setShowBarcode] = useState(false);
    const [errorMatch] = useState([false]);
    const { onAdd, products, barcodeRef } = useHome();
    const onChange = (e) => {
        setBarcode(e.target.value);
    };

    const searchProduct = () => {
        let returnProduct;
        AllCodigos.forEach((cod) => {
            console.log(cod);
            if (cod.codigo !== null) {
                if (cod.codigo === undefined) {
                    console.log("hola");
                } else if (
                    cod.codigo.toString().toLowerCase() ===
                    barcode.toString().toLowerCase()
                ) {
                    returnProduct = cod.producto_id;
                } else if (errorMatch === false) {
                    console.log("no encuentra");
                }
            } else {
                console.log("cod.cod != null");
            }
        });
        return returnProduct;
    };

    const onKeyPresed = (e) => {
        if (e.key === "Enter") {
            let match = searchProduct();
            let producto;
            if (match !== undefined) {
                // eslint-disable-next-line
                {
                    products.map((product) => {
                        if (match === product.id) {
                            producto = product;
                        }
                        return "";
                    });
                }
                onAdd(producto);
                setBarcode("");
            } else {
                setShowBarcode(true);
            }
        }
    };

    return (
        <div>
            <div className="row">
                <div className="col-md-12">
                    <input
                        onKeyPress={onKeyPresed}
                        onChange={onChange}
                        value={barcode}
                        ref={barcodeRef}
                        className="barcode"
                    ></input>
                </div>
            </div>
            <ModalBarcode
                showBarcode={showBarcode}
                setShowBarcode={setShowBarcode}
                barcode={barcode}
            />
        </div>
    );
}

export default Barcode;
