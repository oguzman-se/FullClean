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
      console.log("error post", err);
    });
    
  }
  function handle(e){
      const newCategoria = {...categorias}
      newCategoria[e.target.id] = e.target.value
      setCategoria(newCategoria)
      console.log(newCategoria)
  }
  

  const actualizar = async (categorias) => {
    await clienteAxios.put(`/categorias/${categorias.id}`, {
      nombre: categorias.nombre
    })
    .then((res) =>{
      console.log(res.data)
      handleClose()
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
  function handle(e){
    const newCategoria = {...categorias}
    newCategoria[e.target.id] = e.target.value
    setCategoria(newCategoria)
    console.log(newCategoria)
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
          <Modal.Title id="modal-tittle">Crear Categoria</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form >
          <label for="exampleInputEmail1">Crear Categoria</label>
          {editar === false ?
            <input type="text" className="form-control custom-input" 
            placeholder="" aria-label="Username"
            onChange={(e) => handle(e)} id="nombre" value={categorias.nombre} 
            name="nombre"
            />: 
            <input type="text" className="form-control custom-input" 
            placeholder="" aria-label="Username"
            onChange={(e) => handle(e)} id="nombre" value={currentCategoria.nombre} 
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
                    onClick={()=> {
                      setCurrentCategoria(category)
                      setEditar(true)}}
                    >Editar</button>
                    <button
                     onClick={()=> eliminar(category)}
                    >Eliminar</button>
                    <span class="badge bg-primary rounded-pill">ID: {category.id}</span>
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
          onClick={()=> actualizar(categorias)}
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
