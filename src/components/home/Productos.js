import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Product from './Product'
import {useState} from 'react'
import {useHome} from '../../context/home-context'

function Productos(){
    const {products, onAdd} = useHome();
    const [searchTerm, setSearchTerm] = useState("");

    return(
    <div>
        <div className="group-vh-2">
        <input className="col-md-12 form-control search"  type="text"
         placeholder="Buscar" aria-label="Search"
         onChange={(event) => {
             setSearchTerm(event.target.value);
         }}
        />
        </div>
        <div className="row productos">   
            <div className="col-xs-6 col-sm-6 col-md-12 grilla">
                <div className="container-fluid">
                    <div className="row">
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
                                    className="col-3 "
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
        </div>
    </div>
    )
}

export default Productos;