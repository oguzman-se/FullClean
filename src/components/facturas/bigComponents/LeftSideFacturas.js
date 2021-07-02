import React, { useState } from "react";
import SearchFacturas from "../SearchFacturas";
import TableFacturas from "../TableFacturas";

function LeftSideFacturas() {
    //BUSCADOR DE PEDIDOS
    const [search, setSearch] = useState({
        text: "",
        fact: ["pendiente"],
    });

    const filtroBuscador = (item) => {
        const validText = (it) => {
            let validator = false;
            if (search.text !== "") {
                if (
                    it.id
                        .toString()
                        .includes(search.text.toString().toLowerCase())
                ) {
                    validator = true;
                } else if (
                    it.num_factura
                        ?.toString()
                        .includes(search.text.toString().toLowerCase())
                ) {
                    validator = true;
                }
            } else {
                validator = true;
            }

            return validator;
        };

        const validFact = (it) => {
            let validator = false;
            if (search.fact[0].length > 0) {
                if (
                    (it.estado === "pendiente" || it.estado === null) &&
                    search.fact[0] === "pendiente"
                ) {
                    validator = true;
                } else if (
                    it.estado === "facturado" &&
                    search.fact[0] === "facturado"
                ) {
                    validator = true;
                }
            } else {
                validator = true;
            }

            return validator;
        };

        //console.log("tenemos este search", search, " y este item", item);
        if (validText(item) && validFact(item)) return item;
    };
    return (
        <div>
            <SearchFacturas
                search={search}
                setSearch={setSearch}
                filtroBuscador={filtroBuscador}
            />
            <TableFacturas filtroBuscador={filtroBuscador} />
        </div>
    );
}

export default LeftSideFacturas;
