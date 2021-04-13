import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';

function Search(){

    return(
        <div>
        <nav className="navbar row">
            <input className="col-md-12 form-control search"  type="search" placeholder="Buscar" aria-label="Search"/>
        </nav>
      </div>
    )
}

export default Search;