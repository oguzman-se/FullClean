import React, {useState} from 'react'
import {Modal, ModalFooter} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import clienteAxios from '../../config/clienteAxios'
import {useHome} from '../../context/home-context'
import { useToasts } from "react-toast-notifications";

function ModalDetalleCliente(props) {
  const { addToast } = useToasts();
  const {Allclientes, setAllClientes} = useHome([]);
  const {showDetalleCliente, setShowDetalleCliente, labelCliente, setLabelCliente} = props;
  const handleClose = ()=> setShowDetalleCliente(false)
  const handleChange = e=> {
    const {name, value} = e.target;
    setLabelCliente({...labelCliente, [name]:value})
    console.log(labelCliente);
  }
  const actualizar = async (cliente) => {
    await clienteAxios.put(`/clientes/${cliente.id}`, {
      nombre: labelCliente.nombre,
      domicilio: labelCliente.domicilio,
      telefono: labelCliente.telefono
    })
    .then((res) =>{
      console.log(res.data)
      setShowDetalleCliente(false)
      const getCliente = async () => {
        await clienteAxios
        .get('/clientes')
        .then((r) => {
          setAllClientes(r.data)
          addToast("Cliente actualizado", {
            appearance: "success",
            autoDismiss: true,
        });
        })
        .catch((r) => {
          console.log("error get", r);
        });
      };
      getCliente();
    })
    .catch((err) => {
      console.log("error put", err);
    });
    
  }
  const eliminar = async (labelCliente) => {
    await clienteAxios.delete(`/clientes/${labelCliente.id}`)
    .then((res) =>{
      console.log(res.data)
      setLabelCliente({})
      handleClose()
      const getCliente = async () => {
        await clienteAxios
        .get('/clientes')
        .then((r) => {
          setAllClientes(r.data)
          addToast("Cliente eliminado", {
            appearance: "success",
            autoDismiss: true,
        });
        })
        .catch((r) => {
          console.log("error get", r);
        });
      };
      getCliente();
    })
    .catch((err) => {
      console.log("error delete", err);
    });
    
  }
  return (
    <>
      <Modal
        show={showDetalleCliente}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title id="modal-tittle">Detalle Cliente</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div>
        <div>
          <label for="exampleInputEmail1">ID</label>
          <input type="text" className="form-control custom-input" 
          value={labelCliente.id}
          onChange={handleChange}  disabled
          />
        </div>
        <div>
          <label for="exampleInputEmail1">Nombre</label>
          <input type="text" className="form-control custom-input" 
          name="nombre"  value={labelCliente.nombre}
          onChange={handleChange} 
          />
        </div>
        <div>
          <label for="exampleInputEmail1">Domicilio</label>
          <input type="text" className="form-control custom-input" 
          name="domicilio"  value={labelCliente.domicilio}
         onChange={handleChange} 
          />
        </div>
        <div>
          <label for="exampleInputEmail1">Telefono</label>
          <input type="number" className="form-control custom-input" 
          name="telefono"  value={labelCliente.telefono}
          onChange={handleChange}
          />
        </div>
        </div>
        </Modal.Body>
        <ModalFooter>
        <button className="modal-button-cancel"
         onClick={()=> eliminar(labelCliente)}
          >Eliminar Cliente</button>
          <button className="modal-button-create"
         onClick={()=> actualizar(labelCliente)}
          >Actualizar Cliente</button>
          <button className="modal-button-cancel"
           onClick={handleClose}
           >
            Cancelar
          </button>
        </ModalFooter>
      </Modal>
    </>
  );
}

export default ModalDetalleCliente;
