import React, {useState} from 'react'
import {Modal, ModalFooter} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import {useHome} from '../../../context/home-context'
import clienteAxios from '../../../config/clienteAxios'

function ModalCargarCliente(props) {
  const [productoscodigo, setProductoscodigo] = useState({
    id: "",
    codigo:"",
    producto_id: ""
  })
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
  const handleChangeBarcode = e=> {
    const {name, value} = e.target;
    setProductoscodigo({...productoscodigo, [name]:value})
    console.log(productoscodigo);
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

  const submit = async () => {
    await clienteAxios.post('/productoscodigo', {
      codigo: productoscodigo.codigo,
      producto_id: currentProducto.id
    })
    .then((res) =>{
      console.log("respuesta",res.data)
      const getCod = async () => {
        await clienteAxios
        .get('/productoscodigo')
        .then((r) => {
          console.log("GET",r.data)
        })
        .catch((r) => {
          console.log("error get", r);
          console.log(productoscodigo)
        });
      };
      getCod();
    })
    .catch((err) => {
      console.log("error post", err);
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
        <ModalFooter>
          <button className="modal-button-create"
          onClick={()=> actualizar(currentProducto)}
          >Actualizar Producto</button>
          <button className="modal-button-cancel" onClick={handleClose}>
            Cancelar
          </button>
        </ModalFooter>
        
        <div>
          <label for="exampleInputEmail1">Agregar BarCode</label>
          <input type="text" className="form-control custom-input" 
          name="codigo" onChange={handleChangeBarcode}
          value={productoscodigo.codigo}
          />
        </div>
        </form>
        </Modal.Body>
        <Modal.Footer>
          <button className="modal-button-create"
          onClick={submit}
          >Agregar Barcode</button>          
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalCargarCliente;
