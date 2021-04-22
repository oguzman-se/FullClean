import React from 'react'

function CargarClientes() {
    return (
        <div>
            <div>
          <label for="exampleInputEmail1">Titulo</label>
          <input type="text" className="form-control" 
          placeholder="Username" aria-label="Username"/>
        </div>
        <div>
          <label for="exampleInputEmail1">Descripcion</label>
          <input type="text" className="form-control" 
          placeholder="Descripcion"/>
        </div>
        <div>
          <label for="exampleInputEmail1">Categoria Padre</label>
          <input type="text" className="form-control" 
          placeholder="Categoria Padre"/>
        </div>
        <div>
          <label for="exampleInputEmail1">Imagen</label>
          <div className="custom-file">
            
            <input type="file" className="custom-file-input" id="customFile"/>
            <label className="custom-file-label" for="customFile">Choose file</label>
          </div>
        </div>
        </div>
    )
}

export default CargarClientes
