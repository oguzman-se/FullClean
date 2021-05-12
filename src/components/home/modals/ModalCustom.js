import React from 'react'
import {Modal} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import {useHome} from '../../../context/home-context'
import clienteAxios from '../../../config/clienteAxios'

function ModalCustom() {
  const {setShow, show} = useHome();
  const {products, setProducts} = useHome();
  const handleClose = () => setShow(false);
  const {currentProducto, setCurrentProducto, AllCategorias} = useHome();
  
  const submit = async () => {
    console.log(currentProducto)
    await clienteAxios.post('/productos', {
      nombre: currentProducto.nombre,
      costo: currentProducto.costo,
      precio: currentProducto.precio,
      categoria_id: currentProducto.category_id,
      destacado: false
    })
    .then((res) =>{
      console.log(res.data)
      const getProd = async () => {
        await clienteAxios
        .get('/productos')
        .then((r) => {
          setProducts(r.data)
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
      let newProducto = {...currentProducto}
      newProducto[e.target.name] = e.target.value
      setCurrentProducto(newProducto)
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
          onChange={(e) => handle(e)} name="nombre" value={currentProducto.nombre}
          />
        </div>
        <div>
          <label for="exampleInputEmail1">Costo del Producto</label>
          <input type="text" className="form-control custom-input" 
          placeholder="Costo"
          onChange={(e) => handle(e)} name="costo" value={currentProducto.costo}
          />
        </div>
        <div>
          <label for="exampleInputEmail1">Precio del Producto</label>
          <input type="text" className="form-control custom-input" 
          placeholder="Precio"
          onChange={(e) => handle(e)} name="precio" value={currentProducto.precio}
          />
        </div>
        <div>
          <label for="exampleInputEmail1">Categoria</label>
          <select class="form-select form-control custom-input" aria-label="Default select example"
          onChange={(e) => handle(e)} name="category_id">
            {AllCategorias.map((category) => (
              <option value={category.id}>{category.nombre}</option>
            ))}
            
          </select>
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
