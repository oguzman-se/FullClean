import React from 'react'
import ModalCustom from '../../ModalCustom'
import ModalSearchProducts from '../../ModalSearchProducts'
import Button from '../../Button'

import {useHome} from '../../../../context/home-context';

function GroupButton(){
    const {setShow, setShowTable} = useHome();
    
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
                        <Button >
                                + Categoria
                        </Button> 
                    </div>
                    <div className="col-sm-12 col-md-4">
                        <Button onClick={()=>setShowTable(true)}>Buscar Productos</Button>
                    </div>
                </div>
            </div>
              <ModalCustom/>
              <ModalSearchProducts/>
        </div>
    )
}
export default GroupButton;














