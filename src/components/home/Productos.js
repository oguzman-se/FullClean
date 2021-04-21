import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Product from './Product'
import {useState} from 'react'
import {useHome} from '../../context/home-context'

function Productos(){
    const {products, onAdd} = useHome();
    const [searchTerm, setSearchTerm] = useState("");

    return(
    <div className="container">
        <div className="row group-vh-2">
            <div className="col-md-12">
                <input className="form-control search"  type="text"
                placeholder="Buscar" aria-label="Search"
                onChange={(event) => {
                    setSearchTerm(event.target.value);
                }}
                />
            </div>
            
        </div>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 productos">   
            <div className="col-md-3">
            {
                        // eslint-disable-next-line
                        products.filter((product)=> {
                            if (searchTerm === "") {
                                return product
                            } else if (product.name.toLowerCase().includes(searchTerm.toLowerCase())){
                                
                                if (product.name.length < 15) {
                                    return (
                                        <button type="button" className="btn btn-secundario" onClick={()=>onAdd(product)}>
                                        {product.name}
                                        </button>
                                    )
                                }else {
                                    return(
                                        <button type="button" className="btn btn-secundario" onClick={()=>onAdd(product)} >
                                            {product.name.slice(0, 27) + "..."}
                                            <span className="tooltext">{product.name}</span>
                                        </button>
                                    )
                                };
                            }
                        })
                        .map((product) => (
                            
                                <Product
                                    
                                    key={product.id}
                                    product={product}
                                    onAdd={onAdd}
                                    >
                                </Product>
                            
                        ))
                        }
            </div>
        </div>
    </div>
    )
}

export default Productos;