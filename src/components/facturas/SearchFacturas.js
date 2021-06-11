import React, {useState} from 'react'
import ModalCrearFactura from './modales/ModalCrearFactura'

function SearchFacturas(props) {
    const [showFactura, setShowFactura] = useState(false)
    const {search,setSearch,filtroBuscador } = props;
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
                <button className="col-md-3 boton" onClick={()=>setShowFactura(true)}>Crear Factura</button> 
            </div>
        </div>
        <ModalCrearFactura
            showFactura={showFactura}
            setShowFactura={setShowFactura}
        />
        </div>
    )
}

export default SearchFacturas
