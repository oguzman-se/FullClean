import React, {useState} from 'react'
import {useHome} from '../../context/home-context'
import ModalCargarCliente from './modals/ModalCargarCliente';

function Label(){
    const {labelCliente, onRemoveAll} = useHome([]);
    const [showCargarCliente, setShowCargarCliente] = useState(false);
    if (!labelCliente.nombre) {
    return(
        <div className="container-fluid">
            <div className="row combo-label">
                
                <div className="col-md-8 label">
                <label>Cliente: Consumidor Final</label>
                </div>
                <div className="col-md-4 ajuste-label">
                    <button className="btn btn-label"
                    onClick={()=>setShowCargarCliente(true)}
                    >Cargar Cliente</button>
                </div>
                <div className="col-md-8 label">
                    <label >Domicilio: {labelCliente.domicilio}</label>
                </div>
                <div className="col-md-4 ajuste-label">
                    <button className="btn btn-label"
                    onClick={onRemoveAll}
                    >Vaciar Compra</button>
                </div>
                
            </div>
            <ModalCargarCliente
                showCargarCliente={showCargarCliente}
                setShowCargarCliente={setShowCargarCliente}
            />
        </div>
    )
}else{
    return(
        <div className="container-fluid">
            <div className="row combo-label">
                
                <div className="col-md-8 label">
                <label>Cliente: {labelCliente.id} - {labelCliente.nombre}</label>
                </div>
                <div className="col-md-4 ajuste-label">
                    <button className="btn btn-label"
                    onClick={()=>setShowCargarCliente(true)}
                    >Cargar Cliente</button>
                </div>
                <div className="col-md-8 label">
                    <label >Domicilio: {labelCliente.domicilio}</label>
                </div>
                <div className="col-md-4 ajuste-label">
                    <button className="btn btn-label"
                    onClick={onRemoveAll}
                    >Vaciar Compra</button>
                </div>
                
            </div>
            <ModalCargarCliente
                showCargarCliente={showCargarCliente}
                setShowCargarCliente={setShowCargarCliente}
            />
        </div>
    )
}
}

export default Label;
