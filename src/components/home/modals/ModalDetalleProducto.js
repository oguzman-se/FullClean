import React, {useState} from 'react'
import {Modal, ModalFooter} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import {useHome} from '../../../context/home-context'
import clienteAxios from '../../../config/clienteAxios'
import { useToasts } from "react-toast-notifications";
function ModalCargarCliente(props) {
  const { addToast } = useToasts();
  const {AllCodigos, setAllCodigos} = useHome([])
  const [currentcodigo, setCurrentcodigo] = useState(
    {
      id: "",
      codigo:"",
      producto_id: ""
    }
  )
  const {setProducts} = useHome();
  const {showDetalleProd, setShowDetalleProd, currentProducto,
     setCurrentProducto} = props;
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
    setCurrentcodigo({...currentcodigo, [name]:value})
    console.log(currentcodigo);
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
          addToast("Producto actualizado", {
            appearance: "success",
            autoDismiss: true,
        });
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
    const exist = AllCodigos.find(x=> x.codigo === currentcodigo.codigo.toLowerCase())
    if(exist === undefined){
     await clienteAxios.post('/productoscodigo', {
        codigo: currentcodigo.codigo.toLowerCase(),
        producto_id: currentProducto.id
      })
      .then((res) =>{
        console.log("respuesta",res.data)
        const getCod = async () => {
          await clienteAxios
          .get('/productoscodigo')
          .then((r) => {
            setAllCodigos(r.data)
            addToast("Barcode creado", {
              appearance: "success",
              autoDismiss: true,
          });
          })
          .catch((r) => {
            console.log("error get", r);
            console.log(currentcodigo)
          });
        };
        getCod();
      })
      .catch((err) => {
        console.log("error post", err);
      });
    }else{
      addToast("El barcode ya existe", {
        appearance: "error",
        autoDismiss: true,
    });
    }
  }
  const eliminar = async (currentcodigo) => {
    await clienteAxios.delete(`/productoscodigo/${currentcodigo.id}`)
    .then((res) =>{
      console.log(res.data)
      //handleClose()
      const getCod = async () => {
        await clienteAxios
        .get('/productoscodigo')
        .then((r) => {
          setAllCodigos(r.data)
          addToast("Barcode eliminado", {
            appearance: "success",
            autoDismiss: true,
        });
        })
        .catch((r) => {
          console.log("error get", r);
          console.log(currentcodigo)
        });
      };
      getCod();
    })
    .catch((err) => {
      console.log("error delete", err);
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
        <div>
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
          <input type="number" className="form-control custom-input" 
          name="costo" value={currentProducto.costo}
          onChange={handleChange}
          />
        </div>
        <div>
          <label for="exampleInputEmail1">Precio del Producto</label>
          <input type="number" className="form-control custom-input" 
          name="precio" value={currentProducto.precio}
          onChange={handleChange}
          />
        </div>
        <div>
          <label for="exampleInputEmail1">Stock</label>
          <input type="text" className="form-control custom-input" 
          placeholder="Stock" aria-label="Username"
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
          value={currentcodigo.codigo}
          />
          {AllCodigos.map((codigo)=>
            {
              if(codigo.producto_id === currentProducto.id)
              return(
                <div>
                    <ol class="list-group list-group-numbered">
                        <li class="list-group-item d-flex justify-content-between align-items-start">
                            <div class="ms-2 me-auto">
                                <div class="fw-bold">
                                    {codigo.codigo.toUpperCase()}
                                </div>
                            </div>
                            <div>
                                <button
                                    className="boton-modal-buscar2"
                                     onClick={() => eliminar(codigo)}
                                >
                                    <i class="bi bi-x-octagon"></i>
                                </button>
                            </div>
                        </li>
                    </ol>
                </div>
              )
            }
          )}
        </div>
        </div>
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
