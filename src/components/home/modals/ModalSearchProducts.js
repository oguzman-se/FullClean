import React from 'react'
import {Modal} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import {useHome} from '../../../context/home-context';

function ModalSearchProducts() {
  const {showTable, setShowTable} = useHome();
  const handleClose = () => setShowTable(false);
  const {prod, onAdd, term, setTerm} = useHome();

  function searchingTerm(term){
    return function(x){
      return x.nombre.toLowerCase().includes(term) || !term; 
    }
  }

  return (
    <div>
      <Modal
        show={showTable}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          
          <div className="">
            <Modal.Title>Buscar Productos</Modal.Title>            
          </div>
        </Modal.Header>
        <Modal.Body >
          {prod && (
              <input className="col-md-12 form-control modal-search"  type="text"
              placeholder="Buscar" aria-label="Search"
              onChange={e => setTerm(e.target.value)}
              />
            )}
          <div className="modal-table">
          <table className="table">
            <thead className="thead-dark">
                <tr >
                    <th  scope="col">Codigo</th>
                    <th scope="col">Producto</th>
                    <th scope="col">price Un.</th>
                </tr>
            </thead>
            <tbody>

                {prod.filter(searchingTerm(term)).map((item)=>(
                    <tr key={item.id} onClick={()=> onAdd(item)} className="trhover">
                        <td>{item.id}</td>
                        <td className="name">{item.nombre}</td>
                        <td>${item.precio.toFixed(2)}</td>
                    </tr>
                ))}
            </tbody>            
            </table>
          </div>
          
        </Modal.Body>
        <Modal.Footer>
          <button className="modal-button-cancel" onClick={handleClose}>
            Cerrar
          </button>
          
        </Modal.Footer>
      </Modal>
    </div>
      
    
  );
}

export default ModalSearchProducts;
