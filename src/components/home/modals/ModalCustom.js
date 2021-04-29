import React, {useState, useEffect} from 'react'
import {Modal} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import {useHome} from '../../../context/home-context'
import clienteAxios from '../../../config/clienteAxios'

function ModalCustom() {
  const {setShow, show} = useHome();
  const {products, setProducts} = useHome();
  const handleClose = () => setShow(false);
  const [productos, setProductos] = useState({
    id: "",
    nombre: "",
    costo: "",
    precio: "",
    categoria_id: "",
    destacado: ""
  })
  
  const submit = async () => {
    await clienteAxios.post('/productos', {
      nombre: productos.nombre,
      costo: productos.costo,
      precio: productos.precio,
      categoria_id: "0",
      destacado: "0"
    })
    .then((res) =>{
      console.log(res.data)
      const getProd = async () => {
        await clienteAxios
        .get('/productos')
        .then((r) => {
          setProducts(r.data)
          setProductos(r.data)
          console.log("setProducts",products)
          console.log("setProductos",productos)
        })
        .catch((r) => {
          console.log("error get", r);
          console.log(products)
        });
      };
      getProd();
    })
    .catch((err) => {
      console.log("error post", err);
    });
    
  }
  function handle(e){
      const newProducto = {...productos}
      newProducto[e.target.id] = e.target.value
      setProductos(newProducto)
  }
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title id="modal-tittle">Nuevo Producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <form>
        <div>
          <label for="exampleInputEmail1">Nombre del Producto</label>
          <input type="text" className="form-control custom-input" 
          placeholder="Nombre" aria-label="Username"
          onChange={(e) => handle(e)} id="nombre" value={productos.nombre}
          />
        </div>
        <div>
          <label for="exampleInputEmail1">Costo del Producto</label>
          <input type="text" className="form-control custom-input" 
          placeholder="Costo"
          onChange={(e) => handle(e)} id="costo" value={productos.costo}
          />
        </div>
        <div>
          <label for="exampleInputEmail1">Precio del Producto</label>
          <input type="text" className="form-control custom-input" 
          placeholder="Precio"
          onChange={(e) => handle(e)} id="precio" value={productos.precio}
          />
        </div>
        
        </form>
        </Modal.Body>
        <Modal.Footer>
          <button className="modal-button-create"
          onClick={(e)=> submit(e)}
          >Crear Producto</button>
          <button className="modal-button-cancel" onClick={handleClose}>
            Cancelar
          </button>
          
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalCustom;
