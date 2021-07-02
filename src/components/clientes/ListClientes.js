import React, { useState } from "react";
import TableFacturaIdClientes from "./TableFacturaIdClientes";
import { useHome } from "../../context/home-context";
import Busqueda from "../pedidos/Busqueda";
import TablePedidosIdClientes from "./TablePedidosIdClientes";

function ListClientes(props) {
    const { facturasXcliente, pedidosOrFactura } = useHome();
    const { search, setSearch, filtroBuscador } = props;
    const [searchFact, setSearchFact] = useState("");
    const handleChange = (e) => {
        setSearchFact(e.target.value);
    };

    //esto deberia estar a mismo nivel que el otro filtro AJUSTAR
    const filtroFacturas = (item) => {
        if (searchFact.length > 0) {
            if (item.num_factura.toLowerCase().includes(searchFact)) {
                return item;
            } else if (item.id.toString().includes(searchFact)) {
                return item;
            }
        } else {
            return item;
        }
    };

    return (
        <div>
            {pedidosOrFactura ? (
                <Busqueda search={search} setSearch={setSearch} />
            ) : (
                <input
                    name="text"
                    value={searchFact}
                    onChange={handleChange}
                    className="col-md-12 form-control searchFact ajustes"
                    placeholder="Buscar factura por id..."
                />
            )}
            {pedidosOrFactura ? (
                <TablePedidosIdClientes
                    facturasXcliente={facturasXcliente}
                    filtroBuscador={filtroBuscador}
                />
            ) : (
                <TableFacturaIdClientes
                    facturasXcliente={facturasXcliente}
                    filtroBuscador={filtroFacturas}
                />
            )}
        </div>
    );
}

export default ListClientes;
