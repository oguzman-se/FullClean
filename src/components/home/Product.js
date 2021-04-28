import React, {useState} from 'react'
import ModalDetalleProducto from './modals/ModalDetalleProducto'
function Product(props){
    const [showDetalleProd, setShowDetalleProd] = useState(false);
    const {product, onAdd,} = props;
    if (product.nombre.length < 20) {
        return (
            <div>
                <button type="button" className="btn boton-secundario"
                onClick={()=>setShowDetalleProd(true)}
                >
                {product.nombre}
                </button>
                <ModalDetalleProducto
                    showDetalleProd={showDetalleProd}
                    setShowDetalleProd={setShowDetalleProd}
                    product={product}
                    onAdd={onAdd}
                />
            </div>
        )
    }else { 
        return(
            <div>
                <button type="button" className="btn boton-secundario" 
                onClick={()=>setShowDetalleProd(true)}
                >
                {product.nombre.slice(0, 25) + "..."}
                <span className="tooltext">{product.nombre}</span>
                </button>
                <ModalDetalleProducto
                    showDetalleProd={showDetalleProd}
                    setShowDetalleProd={setShowDetalleProd}
                    product={product}
                    onAdd={onAdd}
                />
            </div>
        )
    }
}

export default Product;