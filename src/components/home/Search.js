import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';

function Search(){

    return(
        <div>
        <nav class="navbar row">
            <input class="col-md-12 form-control search"  type="search" placeholder="Buscar" aria-label="Search"/>
        </nav>
      </div>
    )
}

export default Search;