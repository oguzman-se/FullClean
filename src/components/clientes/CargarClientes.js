import React from 'react'

function CargarClientes() {
    return (
        <div>
          <div>
            <label className="labelCharge">Cargar Nuevo Cliente</label>
          </div>
          <div>
            
            <input type="text" className="form-control searchCargCli" 
            placeholder="Username" aria-label="Username"/>
            
            <input type="text" className="form-control searchCargCli" 
            placeholder="Descripcion"/>
            
            <input type="text" className="form-control searchCargCli" 
            placeholder="Categoria Padre"/>
            
            <div className="custom-file">
              <input type="file" className="custom-file-input" />
              <label className="custom-file-label" >Choose file</label>
            </div>
          </div>
        
        </div>
    )
}

export default CargarClientes
