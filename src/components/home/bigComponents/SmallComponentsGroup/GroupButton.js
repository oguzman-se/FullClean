import React from 'react'
import ModalCustom from '../../ModalCustom'
import ModalSearchProducts from '../../ModalSearchProducts'
import Button from '../../Button'

import {useHome} from '../../../../context/home-context';

function GroupButton(){
    const {setShow, setShowTable} = useHome();
    
    return(
        <div className="group-vh-1">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-3 ajuste">
                    <Button>Nueva Compra</Button>             
                    </div>
                    <div className="col-3 ajuste">
                    <Button onClick={()=>setShow(true)}>
                            + Producto
                    </Button> 
                    </div>
                </div>
                <div className="row">
                    <div className="col-3 ajuste">
                    <Button>Nota de Credito</Button>     
                    </div>
                    <div className="col-3 ajuste">        
                        <Button >
                                + Categoria
                        </Button>
                    </div>
                    <div className="col-2 ajuste"></div>
                    <div className="col-4 ajuste">
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














