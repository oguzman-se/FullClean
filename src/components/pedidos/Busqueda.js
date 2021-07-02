import React from "react";

const Busqueda = ({ search, setSearch }) => {
    const handleChange = (e) => {
        if (e.target.name !== "desde" || e.target.name !== "hasta") {
            setSearch({ ...search, [e.target.name]: e.target.value });
        } else {
            setSearch({ ...search, [e.target.name]: [e.target.value] });
        }
    };

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <input
                        name="text"
                        value={search.text}
                        onChange={handleChange}
                        className="col-md-12 form-control searchPed ajustes"
                        placeholder="Buscar pedido..."
                    />
                </div>
            </div>
            <div>
                <div className="row">
                    <div className="col-md-6">
                        <p className="boder-right mb-1">Desde:</p>
                        <input
                            name="desde"
                            type="date"
                            placeholder="Desde"
                            onChange={handleChange}
                            value={search.desde}
                            className="form-control searchPed"
                        />
                        <p
                            className="boder-right mb-1"
                            style={{ marginTop: -28, marginLeft: "50%" }}
                        >
                            Hasta:
                        </p>
                        <input
                            name="hasta"
                            type="date"
                            placeholder="Hasta"
                            onChange={handleChange}
                            value={search.hasta}
                            className="form-control searchPed"
                        />
                    </div>
                    <div className="col-md-3">
                        <p className="boder-right mb-1">Estado:</p>
                        <select
                            onChange={handleChange}
                            value={search.estado}
                            name="estado"
                            className="select labelsm"
                        >
                            <option value="TODOS" selected>
                                TODOS
                            </option>
                            <option value="confirmado">Confirmado</option>
                            <option value="pendiente">Pendiente</option>
                        </select>
                    </div>
                    <div className="col-md-3">
                        <p className="boder-right mb-1">Métodos de pago:</p>
                        <select
                            onChange={handleChange}
                            value={search.pago}
                            name="pago"
                            className="select labelsm"
                        >
                            <option value="TODOS" selected>
                                TODOS
                            </option>
                            <option value="efectivo">Efectivo</option>
                            <option value="tarjeta credito">
                                Tarjeta de credito
                            </option>
                            <option value="tarjeta debito">
                                Tarjeta de Debito
                            </option>
                            <option value="cuenta corriente">
                                Cuenta Corriente
                            </option>
                        </select>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Busqueda;
