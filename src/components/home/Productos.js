import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Product from './Product'
import {useState} from 'react'
import {useHome} from '../../context/home-context'

function Productos(){
    const {products, onAdd} = useHome();
    const [searchTerm, setSearchTerm] = useState("");

    return(
    
        <div className="container-fluid">
        <div className="row ">
            <div className="col-md-12">
                <input className="form-control search"  type="text"
                placeholder="Buscar" aria-label="Search"
                onChange={(event) => {
                    setSearchTerm(event.target.value);
                }}
                />
            </div>
        </div>

        <div className="altura">
        <div className="row productos">   
                
                {
                            // eslint-disable-next-line
                            products.filter((product)=> {
                                if (searchTerm === "") {
                                    return product
                                } else if (product.nombre.toLowerCase().includes(searchTerm.toLowerCase())){
                                    
                                    if (product.nombre.length < 15) {
                                        return (
                                            <button type="button" className="btn btn-secundario" onClick={()=>onAdd(product)}>
                                            {product.nombre}
                                            </button>
                                        )
                                    }else {
                                        return(
                                            <button type="button" className="btn btn-secundario" onClick={()=>onAdd(product)} >
                                                {product.nombre.slice(0, 27) + "..."}
                                                <span className="tooltext">{product.nombre}</span>
                                            </button>
                                        )
                                    };
                                }
                            })
                            .map((product) => (

                                    <div className="col-md-3 grilla">
                                        <Product
                                            key={product.id}
                                            product={product}
                                            onAdd={onAdd}
                                            >
                                        </Product>
                                    </div>
                            ))
                            }
            
            </div>
       </div>
    </div>
    )
}

export default Productos;