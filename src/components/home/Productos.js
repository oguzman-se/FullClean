import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Product from "./Product";
import { useState } from "react";
import { useHome } from "../../context/home-context";

function Productos() {
    const { products, onAdd } = useHome();
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <div className="container-fluid">
            <div className="row ">
                <div className="col-md-12">
                    <input
                        className="form-control search"
                        type="text"
                        placeholder="Buscar"
                        aria-label="Search"
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
                        products
                            .filter((product) => {
                                if (product.destacado === 1) {
                                    if (searchTerm === "") {
                                        return product;
                                    } else if (
                                        product.nombre
                                            .toLowerCase()
                                            .includes(searchTerm.toLowerCase())
                                    ) {
                                        return product;
                                    }
                                }
                            })
                            .sort((a, b) => {
                                if (
                                    a.nombre.toLowerCase() >
                                    b.nombre.toLowerCase()
                                ) {
                                    return 1;
                                } else {
                                    return -1;
                                }
                            })
                            .map((product, i) => {
                                return (
                                    <div key={i} className="col-md-3 grilla">
                                        <Product
                                            key={product.id}
                                            product={product}
                                            onAdd={onAdd}
                                        ></Product>
                                    </div>
                                );
                            })
                    }
                </div>
            </div>
        </div>
    );
}

export default Productos;
