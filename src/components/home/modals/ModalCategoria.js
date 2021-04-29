import React, {useState} from 'react'
import {Modal} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import {useHome} from '../../../context/home-context'
import clienteAxios from '../../../config/clienteAxios'


function ModalCategoria() {
  const {setShowCategoria, showCategoria} = useHome();
  const {AllCategorias, SetAllCategorias} = useHome();
  const handleClose = () => setShowCategoria(false);
  const [categorias, setCategoria] = useState({
    id: "",
    nombre:""
  })

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
            <input type="text" className="form-control custom-input" 
            placeholder="" aria-label="Username"
            onChange={(e) => handle(e)} id="nombre" value={categorias.nombre}
            />
          </form>
          {AllCategorias.map((category) => (
            <div>
                {category.nombre}
            </div>
          ))}
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

export default ModalCategoria;
