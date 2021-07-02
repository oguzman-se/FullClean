import React, { useState } from "react";
import ModalCrearFactura from "./modales/ModalCrearFactura";

function SearchFacturas(props) {
    const [showFactura, setShowFactura] = useState(false);
    const { search, setSearch, filtroBuscador } = props;
    const handleChange = (e) => {
        setSearch({ ...search, [e.target.name]: [e.target.value] });
    };
    return (
        <div>
            <div className="container-fluid">
                <div className="row ajustes9">
                    <input
                        name="text"
                        value={search.text}
                        onChange={handleChange}
                        className="col-md-8 form-control searchPed "
                        placeholder="Buscar factura por id..."
                    />
                    <button
                        className="col-md-3 boton"
                        onClick={() => setShowFactura(true)}
                    >
                        Crear Factura
                    </button>
                    <div className="col-md-12">
                        <p className="boder-right mb-1">
                            Estado de facturación:
                        </p>
                        <select
                            onChange={handleChange}
                            value={search.fact}
                            name="fact"
                            className="select labelsm mb-3"
                        >
                            <option value="pendiente" selected>
                                PENDIENTE A FACTURAR
                            </option>
                            <option value="facturado">FACTURADO</option>
                            <option value="">TODOS</option>

                        </select>
                    </div>
                </div>
            </div>
            <ModalCrearFactura
                showFactura={showFactura}
                setShowFactura={setShowFactura}
            />
        </div>
    );
}

export default SearchFacturas;
