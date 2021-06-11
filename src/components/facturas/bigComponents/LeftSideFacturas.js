import React, {useState} from 'react'
import SearchFacturas from '../SearchFacturas'
import TableFacturas from '../TableFacturas'

function LeftSideFacturas() {
    //BUSCADOR DE PEDIDOS
    const [search, setSearch] = useState({
        text: ""
    });

    const filtroBuscador = (item) => {
        console.log("tenemos esta factura", item);
        const validText = (it) => {
            let validator = false;
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
            
            return validator;
        };
        if (
            validText(item)
        )
            return item;
    };
    return (
        <div>
            <SearchFacturas
                search={search}
                setSearch={setSearch}
                filtroBuscador={filtroBuscador}
            />
            <TableFacturas filtroBuscador={filtroBuscador}/>
        </div>
    )
}

export default LeftSideFacturas



