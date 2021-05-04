import React from 'react'
import {Modal} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import {useHome} from '../../../context/home-context'
import clienteAxios from '../../../config/clienteAxios'

function ModalCargarCliente(props) {
  const {setProducts} = useHome();
  const {showDetalleProd, setShowDetalleProd, currentProducto,
     setCurrentProducto, destacar} = props;
  const handleClose = () => setShowDetalleProd(false);  
  const handleChange = e=> {
    const {name, value} = e.target;
    setCurrentProducto((prevState)=>({
      ...prevState,
      [name]: value
    }))
    console.log(currentProducto);
  }

  const actualizar = async (producto) => {
    await clienteAxios.put(`/productos/${producto.id}`, {
      nombre: currentProducto.nombre,
      costo: currentProducto.costo,
      precio: currentProducto.precio,
      destacado: currentProducto.destacado
    })
    .then((res) =>{
      console.log(res.data)
      setShowDetalleProd(false)
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
    <>
      <Modal
        show={showDetalleProd}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title id="modal-tittle">Detalle producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form>
        <div>
          <label for="exampleInputEmail1">ID del Producto</label>
          <input type="text" className="form-control custom-input" 
          value={currentProducto.id}
          onChange={handleChange} disabled
          />
        </div>
        <div>
          <label for="exampleInputEmail1">Nombre del Producto</label>
          <input type="text" className="form-control custom-input" 
          name="nombre" value={currentProducto.nombre}
          onChange={handleChange}
          />
        </div>
        <div>
          <label for="exampleInputEmail1">Costo del Producto</label>
          <input type="text" className="form-control custom-input" 
          name="costo" value={currentProducto.costo}
          onChange={handleChange}
          />
        </div>
        <div>
          <label for="exampleInputEmail1">Precio del Producto</label>
          <input type="text" className="form-control custom-input" 
          name="precio" value={currentProducto.precio}
          onChange={handleChange}
          />
        </div>
        <div>
          <label for="exampleInputEmail1">Agregar BarCode</label>
          <input type="text" className="form-control custom-input" 
          name="barcode" 
          />
        </div>
        </form>
        </Modal.Body>
        <Modal.Footer>
          <button className="modal-button-create"
          onClick={()=> actualizar(currentProducto)}
          >Actualizar Producto</button>
          <button className="modal-button-cancel" onClick={handleClose}>
            Cancelar
          </button>
          
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalCargarCliente;
