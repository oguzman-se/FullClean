import React from 'react'
import {Modal} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import {useHome} from '../../../context/home-context'
import clienteAxios from '../../../config/clienteAxios'
import { useToasts } from "react-toast-notifications";
import SelectCategoria from '../selectCategoria';

function ModalCustom() {
  const { addToast } = useToasts();
  const {setShow, show} = useHome();
  const {setProducts} = useHome();
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
          handleClose()
          addToast("Producto creado", {
            appearance: "success",
            autoDismiss: true,
        });
        setCurrentProducto("")
        })
        .catch((r) => {
          addToast(r.data, {
            appearance: "error",
            autoDismiss: true,
        });
        });
      };
      getProd();
    })
    .catch((e) => {
      addToast(e.data, {
        appearance: "error",
        autoDismiss: true,
    });
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

        <div>
        <div>
          <label for="exampleInputEmail1">Nombre del Producto</label>
          <input type="text" className="form-control custom-input" 
          placeholder="Nombre" aria-label="Username"
          onChange={(e) => handle(e)} name="nombre" value={currentProducto.nombre}
          />
        </div>
        <div>
          <label for="exampleInputEmail1">Costo del Producto</label>
          <input type="number" className="form-control custom-input" 
          placeholder="Costo"
          onChange={(e) => handle(e)} name="costo" value={currentProducto.costo}
          />
        </div>
        <div>
          <label for="exampleInputEmail1">Precio del Producto</label>
          <input type="number" className="form-control custom-input" 
          placeholder="Precio"
          onChange={(e) => handle(e)} name="precio" value={currentProducto.precio}
          />
        </div>
        <div>
          <label for="exampleInputEmail1">Stock</label>
          <input type="text" className="form-control custom-input" 
          placeholder="Stock" aria-label="Username"
          />
        </div>
        <div>
          <label for="exampleInputEmail1">Categoria</label>
          <SelectCategoria currentProducto={currentProducto} setCurrentProducto={setCurrentProducto} cats={AllCategorias}/>
        </div>
        </div>
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
