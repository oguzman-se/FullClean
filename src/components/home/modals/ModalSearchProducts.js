import React, {useState} from 'react'
import {Modal} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import {useHome} from '../../../context/home-context';
import clienteAxios from '../../../config/clienteAxios'
import ModaleDetalleProducto from './ModalDetalleProducto'

function ModalSearchProducts() {
  const [showDetalleProd, setShowDetalleProd] = useState(false);
  const {showTable, setShowTable} = useHome();
  const handleClose = () => setShowTable(false);
  const [currentProducto, setCurrentProducto] = useState({})
  const {products, onAdd, term, setTerm, setProducts} = useHome();
  function searchingTerm(term){
    return function(x){
      return x.nombre.toLowerCase().includes(term) || !term; 
    }
  }
  
  const destacar = async (producto, destacado) => {
    await clienteAxios.put(`/productos/${producto.id}`, {
      destacado: destacado
    })
    .then((res) =>{
      console.log(res.data)
      const getProduct = async () => {
        await clienteAxios
        .get('/productos')
        .then((r) => {
          setProducts(r.data)
        })
        .catch((r) => {
          console.log("error get", r);
        });
      };
      getProduct();
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
          {products && (
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
                    <th scope="col">Costo</th>
                    <th scope="col">Precio</th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>

                {products.filter(searchingTerm(term)).map((product)=>(
                    <tr key={product.id} className="trhover">
                        <td>{product.id}</td>
                        <td className="name">{product.nombre}</td>
                        <td>${product.precio}</td>
                        <td>${product.costo}</td>
                        <td>
                          <button
                          className="boton-modal-buscar"
                          onClick={()=>{
                            setCurrentProducto(product)
                            setShowDetalleProd(true)
                          
                          }}
                          >Editar</button>
                          
                        </td>
                        <td>
                          <button
                          className="boton-modal-buscar"
                          onClick={()=> onAdd(product)}
                          >Agregar</button>
                        </td>
                        <td>
                        {product.destacado === 1 ?
                          <button
                          className="boton-modal-buscar"
                          onClick={()=> destacar(product, false)}
                          >No Destacar
                          </button> : 
                          <button
                          className="boton-modal-buscar"
                          onClick={()=> destacar(product, true)}
                          >Destacar
                          </button>}
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
      <ModaleDetalleProducto
        showDetalleProd={showDetalleProd}
        setShowDetalleProd={setShowDetalleProd}
        currentProducto={currentProducto}
        setCurrentProducto={setCurrentProducto}
        destacar={destacar}
      />
    </div>
      
    
  );
}

export default ModalSearchProducts;
