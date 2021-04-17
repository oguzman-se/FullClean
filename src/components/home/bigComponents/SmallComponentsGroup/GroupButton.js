import React from 'react'
import ModalCustom from '../../ModalCustom'
import Button from '../../Button'

import {useHome} from '../../../../context/home-context';

function GroupButton(){
    const {setShow} = useHome();
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
              <ModalCustom/>
        </div>
    )
}
export default GroupButton;














