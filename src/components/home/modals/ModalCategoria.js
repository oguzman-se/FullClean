import React, {useState} from 'react'
import {Modal} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import {useHome} from '../../../context/home-context'
import clienteAxios from '../../../config/clienteAxios'


function ModalCategoria() {
  const {setShowCategoria, showCategoria} = useHome();
  const {AllCategorias, SetAllCategorias} = useHome();
  const [currentCategoria, setCurrentCategoria] = useState({})
  const handleClose = () => {
    setShowCategoria(false)
    setEditar(false)
  }
  const [categorias, setCategoria] = useState({
    id: "",
    nombre:""
  })
  const [editar, setEditar] = useState(false)

  const submit = async () => {
    await clienteAxios.post('/categorias', {
      nombre: categorias.nombre
    })
    .then((res) =>{
      console.log(res.data)
      setCategoria({
        id: "",
        nombre:""
      })
      const getCats = async () => {
        await clienteAxios
        .get('/categorias')
        .then((r) => {
          SetAllCategorias(r.data)
        })
        .catch((r) => {
          console.log("error get", r);
          console.log(AllCategorias)
        });
      };
      getCats();
    })
    .catch((err) => {
      console.log("error post", err);
    });
    
  }
  

  const actualizar = async () => {
    await clienteAxios.put(`/categorias/${currentCategoria.id}`, {
      nombre: currentCategoria.nombre
    })
    .then((res) =>{
      console.log(res.data)
      const getCats = async () => {
        await clienteAxios
        .get('/categorias')
        .then((r) => {
          SetAllCategorias(r.data)
          setCategoria({
            id: "",
            nombre:""
          })
          setEditar(false)
        })
        .catch((r) => {
          console.log("error get", r);
          console.log(AllCategorias)
        });
      };
      getCats();
    })
    .catch((err) => {
      console.log("error put", err);
    });
    
  }
  const eliminar = async (categorias) => {
    await clienteAxios.delete(`/categorias/${categorias.id}`)
    .then((res) =>{
      console.log(res.data)
      //handleClose()
      const getCats = async () => {
        await clienteAxios
        .get('/categorias')
        .then((r) => {
          SetAllCategorias(r.data)
          setCategoria(r.data)
          console.log("SetAllCategorias",AllCategorias)
          console.log("categorias",categorias)
        })
        .catch((r) => {
          console.log("error get", r);
          console.log(AllCategorias)
        });
      };
      getCats();
    })
    .catch((err) => {
      console.log("error put", err);
    });
    
  }
  function handleCheck(e){
    if(editar === true){
      setCurrentCategoria({...currentCategoria, [e.target.name]:e.target.value})
    }else{
      setCategoria({...categorias, [e.target.name]:e.target.value})
    }
}
  return (
    <>
      <Modal
        show={showCategoria}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>

          <Modal.Title id="modal-tittle">
          {editar === false ?
            "Crear Categoria":
            "Actualizar Categoria"
          }
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form >
          {/*editar === false ?
            <label for="exampleInputEmail1">Crear Categoria</label>:
            <label for="exampleInputEmail1">Actualizar Categoria</label>
          */}
          {editar === false ?
            <input type="text" className="form-control custom-input" 
            placeholder="" aria-label="Username"
            onChange={(e) => handleCheck(e)} value={categorias.nombre} 
            name="nombre"
            />: 
            <input type="text" className="form-control custom-input" 
            placeholder="" aria-label="Username"
            onChange={(e) => handleCheck(e)} value={currentCategoria.nombre} 
            name="nombre"
            />
            }
           
          </form>
          
          {AllCategorias.map((category) => (
            <div>
              <ol class="list-group list-group-numbered">
                <li class="list-group-item d-flex justify-content-between align-items-start">
                
                  <div class="ms-2 me-auto">
                    <div class="fw-bold">{category.nombre}</div>
                  </div>
                  <div>
                    <button
                    className="boton-modal-buscar"
                    onClick={()=> {
                      setCurrentCategoria(category)
                      setEditar(true)}}
                    >Editar</button>
                    <button
                    className="boton-modal-buscar"
                     onClick={()=> eliminar(category)}
                    >Eliminar</button>
                    <span class="badge fondo rounded-pill">ID: {category.id}</span>
                  </div>
                  
                </li>
              </ol>
                
            </div>
          ))}
        </Modal.Body>
        <Modal.Footer>
        {editar === false ?
          <button className="modal-button-create"
          onClick={(e)=> submit(e)}
          >Crear Categoria</button> : 
          <button className="modal-button-create"
          onClick={actualizar}
          >Actualizar</button>}
          
          <button className="modal-button-cancel" onClick={handleClose}>
            Cancelar
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalCategoria;
