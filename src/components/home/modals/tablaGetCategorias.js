import React from 'react'

function tablaGetCategorias(props) {
    const categoria = props;
    return (
        <div>
            {categoria.nombre}
        </div>
    )
}

export default tablaGetCategorias;
