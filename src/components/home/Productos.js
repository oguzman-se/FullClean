import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Product from './Product'
import {useState} from 'react'

function Productos(props){
    const {products, onAdd} = props;
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
                                return product;
                            }
                        })
                        .map((product) => (
                            
                                <Product
                                    className="col-3 "
                                    key={product.id}
                                    product={product}
                                    onAdd={onAdd}>
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