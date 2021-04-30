import React from 'react'
import {Modal} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import {useHome} from '../../../context/home-context';
import clienteAxios from '../../../config/clienteAxios'


function ModalSearchProducts() {
  const {showDetalleProd, setShowDetalleProd} = useHome();
  const {showTable, setShowTable} = useHome();
  const handleClose = () => setShowTable(false);
  const {prod, onAdd, term, setTerm, products, setProducts} = useHome();
 const {productos, setProductos} = useHome();
  function searchingTerm(term){
    return function(x){
      return x.nombre.toLowerCase().includes(term) || !term; 
    }
  }
  
  const submit = async () => {
    await clienteAxios.put("/productos/" + productos.id, {
      nombre: productos.nombre,
      costo: productos.costo,
      precio: productos.precio,
      categoria_id: 0,
      destacado: true
    })
    .then((res) =>{
      console.log(res.data)
      console.log(productos.id)
    })
    .catch((err) => {
      console.log("error put", err);
    });
    
  }
 

  return (
    <div>
      <Modal
        show={showTable}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          
          <div className="">
            <Modal.Title>Buscar Productos</Modal.Title>            
          </div>
        </Modal.Header>
        <Modal.Body >
          {prod && (
              <input className="col-md-12 form-control modal-search"  type="text"
              placeholder="Buscar" aria-label="Search"
              onChange={e => setTerm(e.target.value)}
              />
            )}
          <div className="modal-table">
          <table className="table">
            <thead className="thead-dark">
                <tr >
                    <th  scope="col">Codigo</th>
                    <th scope="col">Producto</th>
                    <th scope="col">price Un.</th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>

                {prod.filter(searchingTerm(term)).map((item)=>(
                    <tr key={item.id} className="trhover">
                        <td>{item.id}</td>
                        <td className="name">{item.nombre}</td>
                        <td>${item.precio}</td>
                        <td>
                          <button
                          
                          >Editar</button>
                        </td>
                        <td>
                          <button
                          onClick={()=> onAdd(item)}
                          >Agregar</button>
                        </td>
                        <td>
                          <button
                          onClick={(e)=> submit(e)}
                          >Destacar</button>
                        </td>
                    </tr>
                ))}
            </tbody>            
            </table>
          </div>
          
        </Modal.Body>
        <Modal.Footer>
          <button className="modal-button-cancel" onClick={handleClose}>
            Cerrar
          </button>
          
        </Modal.Footer>
      </Modal>
    </div>
      
    
  );
}

export default ModalSearchProducts;
