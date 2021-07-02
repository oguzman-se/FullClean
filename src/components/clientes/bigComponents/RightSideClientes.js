import React, { useState } from "react";
import TopClientes from "../TopClientes";
import ListClientes from "../ListClientes";

function RightSideClientes() {
    //BUSCADOR DE PEDIDOS

    const [search, setSearch] = useState({
        text: "",
        estado: "TODOS",
        pago: "TODOS",
        desde: [],
        hasta: [],
    });

    const filtroBuscador = (item) => {
        const validText = (it) => {
            let validator = false;
            if (it.tipo_pedido === "venta") {
                if (search.text !== "") {
                    if (
                        it.id
                            .toString()
                            .includes(search.text.toString().toLowerCase())
                    ) {
                        validator = true;
                    }
                } else {
                    validator = true;
                }
            }
            return validator;
        };

        const validEstado = (it) => {
            let validator = false;
            //validación por estado
            if (search.estado === "TODOS") {
                validator = true;
            } else if (
                search.estado === "confirmado" &&
                it.estado !== "confirmado"
            ) {
                validator = false;
            } else if (
                search.estado === "pendiente" &&
                it.estado !== "pendiente"
            ) {
                validator = false;
            } else {
                validator = true;
            }

            return validator;
        };

        const validPay = (it) => {
            let validator = false;
            //validación por método de pago
            if (search.pago === "TODOS") {
                validator = true;
            } else if (
                search.pago === "efectivo" &&
                it.metodo_pago !== "efectivo"
            ) {
                validator = false;
            } else if (
                search.pago === "tarjeta credito" &&
                it.metodo_pago !== "tarjeta credito"
            ) {
                validator = false;
            } else if (
                search.pago === "tarjeta debito" &&
                it.metodo_pago !== "tarjeta debito"
            ) {
                validator = false;
            } else if (
                search.pago === "cuenta corriente" &&
                it.metodo_pago !== "cuenta corriente"
            ) {
                validator = false;
            } else {
                validator = true;
            }

            return validator;
        };

        const validDay = (it) => {
            let validator = false;
            //validación por fecha
            if (search.desde.length > 0 && search.hasta.length > 0) {
                let fromPedido = it.fechayhora.substring(0, 10);
                let desdeFilter = search.desde;
                let hastaFilter = search.hasta;

                if (desdeFilter === hastaFilter) {
                    if (fromPedido !== desdeFilter) {
                        validator = false;
                    } else {
                        validator = true;
                    }
                } else {
                    console.log(fromPedido, desdeFilter, hastaFilter);
                    if (
                        fromPedido >= desdeFilter &&
                        fromPedido <= hastaFilter
                    ) {
                        validator = true;
                    } else {
                        validator = false;
                    }
                }
            } else {
                validator = true;
            }

            return validator;
        };

        if (
            validText(item) &&
            validEstado(item) &&
            validPay(item) &&
            validDay(item)
        )
            return item;
    };
    return (
        <div>
            <TopClientes />
            <ListClientes
                filtroBuscador={filtroBuscador}
                search={search}
                setSearch={setSearch}
            />
        </div>
    );
}

export default RightSideClientes;
