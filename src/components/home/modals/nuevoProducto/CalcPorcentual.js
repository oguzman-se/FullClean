import React from "react";

const CalcPorcentual = ({
    currentProducto,
    setCurrentProducto,
    ultModifCost,
    ultModifPrec,
}) => {
    function handle(e) {
        if (e.target.name === "margen") {
            if (e.target.value > -1) {
                if (currentProducto.costo && currentProducto.costo > 0) {
                    setCurrentProducto({
                        ...currentProducto,
                        [e.target.name]: e.target.value,
                        precio:
                            currentProducto.costo * (1 + e.target.value / 100),
                    });
                } else {
                    setCurrentProducto({
                        ...currentProducto,
                        [e.target.name]: e.target.value,
                        precio: e.target.value,
                    });
                }
            } else {
                setCurrentProducto({
                    ...currentProducto,
                    [e.target.name]: 0,
                    precio: 0,
                });
            }
        } else if (e.target.name === "costo") {
            if (e.target.value > -1) {
                if (currentProducto.margen && currentProducto.margen > 0) {
                    setCurrentProducto({
                        ...currentProducto,
                        [e.target.name]: e.target.value,
                        //precio:
                            //e.target.value * (1 + currentProducto.margen / 100),
                    });
                } else {
                    setCurrentProducto({
                        ...currentProducto,
                        [e.target.name]: e.target.value,
                        //precio: e.target.value,
                    });
                }
            } else {
                setCurrentProducto({
                    ...currentProducto,
                    [e.target.name]: 0,
                    //precio: 0,
                });
            }
        } else if (e.target.name === "precio") {
            if (e.target.value > -1) {
                if (currentProducto.costo && currentProducto.costo > 0) {
                    setCurrentProducto({
                        ...currentProducto,
                        [e.target.name]: e.target.value,
                        margen:
                            (e.target.value / currentProducto.costo - 1) * 100,
                    });
                } else {
                    setCurrentProducto({
                        ...currentProducto,
                        [e.target.name]: e.target.value,
                        margen: 0,
                        costo: 0,
                    });
                }
            } else {
                setCurrentProducto({
                    ...currentProducto,
                    [e.target.name]: 0,
                    margen: 0,
                    costo: 0,
                });
            }
        } else {
            let newProducto = { ...currentProducto };
            newProducto[e.target.name] = e.target.value;
            setCurrentProducto(newProducto);
        }
    }

    return (
        <>
            <div>
                <label for="exampleInputEmail1">Costo del Producto</label>
                {ultModifCost ? ultModifCost : ""}
                <label for="exampleInputEmail1" className=" costoMargen">
                    Margen porcentual del Producto
                </label>
                <input
                    type="number"
                    className="form-control custom-input costoMargen"
                    placeholder="Margen"
                    onChange={(e) => handle(e)}
                    name="margen"
                    value={currentProducto.margen}
                />
                <input
                    type="number"
                    className="form-control custom-input costoMargen"
                    placeholder="Costo"
                    onChange={(e) => handle(e)}
                    name="costo"
                    value={currentProducto.costo}
                />
            </div>
            <div>
                <label for="exampleInputEmail1">Precio del Producto</label>
                {ultModifPrec ? ultModifPrec : ""}
                <input
                    type="number"
                    className="form-control custom-input"
                    placeholder="Precio"
                    onChange={(e) => handle(e)}
                    name="precio"
                    value={currentProducto.precio}
                />
            </div>
        </>
    );
};

export default CalcPorcentual;
