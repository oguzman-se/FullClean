import React from 'react'
import TableFacturaIdClientes from './TableFacturaIdClientes'
import {usePedidos} from '../../context/pedidos-context'
import {useHome} from '../../context/home-context'
import Busqueda from '../pedidos/Busqueda';

function ListClientes(props) {
    const {facturasXcliente, Allclientes} = useHome();
    const {search,setSearch,filtroBuscador} = props;
    const handleChange = (e) => {
        setSearch({ ...search, [e.target.name]: [e.target.value] });
    };
    return (
    <div>
        {facturasXcliente && facturasXcliente[0]?.estado
        ? <Busqueda search={search} setSearch={setSearch} />
        : <input name="text" value={search.text} onChange={handleChange}
            className="col-md-12 form-control  ajustes" placeholder="Buscar factura por id..."/>}
        <TableFacturaIdClientes
            facturasXcliente={facturasXcliente}
            Allclientes={Allclientes}
            filtroBuscador={filtroBuscador}
        />
    </div>
    )
}

export default ListClientes
