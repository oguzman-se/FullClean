import React from 'react'
import ModalCustom from '../../ModalCustom'
import Button from '../../Button'

function GroupButton(props){
    const {setShow, show} = props;
    return(
        
        <div>
            <div className="container group-vh-1">
                <div className="row ">
                    <div className="col-sm-12 col-md-8">
                        <Button>Nueva Compra</Button>             
                        <Button onClick={()=>setShow(true)}>
                                + Producto
                        </Button> 
                    </div>
                </div>
            </div>
            <div className="container group-vh-1">
                <div className="row">
                    <div className="col-sm-12 col-md-8">
                        <Button>Nota de Credito</Button>             
                        <Button onClick={()=>setShow(true)}>
                                + Categoria
                        </Button> 
                    </div>
                    <div className="col-sm-12 col-md-4">
                        <Button>Buscar Productos</Button>
                    </div>
                </div>
            </div>
              <ModalCustom show={show} setShow={setShow}/>
        </div>
    )
}
export default GroupButton;














