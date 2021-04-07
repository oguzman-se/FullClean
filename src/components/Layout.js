import Header from './Header'
import Button from './Button'
import '../App.css'
import React, {useState} from 'react';
import {Modal, TextField} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme)=>({
  modal:{
    position: 'absolute',
    width: 400,
    backgroundColor: 'white',
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2,4,3),
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  textfield:{
    width: '100%'
  }
}))

function Layout(props) {
  const styles = useStyles();

  const [modal, setModal] = useState(true);

  const abrirCerrarModal =()=>{
    setModal(!modal);
    console.log("Hola")
  }

  const body=(
    <div className={styles.modal}>
      <div align="center">
        <h2>Formulario</h2>
      </div>
      <TextField label="Nombre" className={styles.textfield} />
      <br/>
      <TextField label="Apellido" className={styles.textfield} />
      <br/>
      <TextField label="Email" className={styles.textfield} />
      <br /> <br/>
      <div align="right">
      <Button color="primary">Enviar</Button>
      <Button onClick={()=>abrirCerrarModal()}>Cancelar</Button>
      </div>
    </div>
  )
    return (
      <div>
        <Header/>
        <div class="size-button">
          <Button class="sub-button">
            Nueva Compra
          </Button>
          <Button class="sub-button" onClick={()=>abrirCerrarModal()}>
            + Producto
          </Button>  
          </div><div>      
          <Button class="sub-button">
            Nota de Credito
          </Button>
          <Button class="sub-button">
            + Categoria
          </Button>
        </div>
        <br></br>
        {props.children}
        <Modal
        open={modal}
        onClose={abrirCerrarModal}>
          {body}
        </Modal>
      

      </div>
    );
    
  }
export default Layout