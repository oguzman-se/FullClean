import React, {useState} from 'react'
import Button  from '../home/Button'
import clienteAxios from '../../config/clienteAxios'
import { useHome } from '../../context/home-context'
import { usePedidos } from '../../context/pedidos-context';
import { useToasts } from "react-toast-notifications";
import ModalConfirmarPedido from './modals/ModalConfirmarPedido';

function LabelBottomSM(){
    const {labelCliente, totalPrice, cartItems, enable, setEnable, setPendiente,
         setShowNuevoCliente, currentMetodo, setCurrentMetodo} = useHome();
    const {pedidos, setPedidos, setArray} = usePedidos()
    const [showModalConfirmar, setShowModalConfirmar] = useState(false);
    const { addToast } = useToasts();
    const getPedido = async () => {
        await clienteAxios
        .get('/pedidos')
        .then((r) => {
            setPedidos(r.data)
            console.log("confirmar",pedidos)
        })
        .catch((r) => {
          console.log("error get", r);
        });
      };
    if (currentMetodo.metodo === "cuenta corriente" && !labelCliente.nombre){
        setShowNuevoCliente(true)
    }
    const handleEstado = async (estado) => {
        try {
        let data = {
            cliente_id: labelCliente.id,
            estado: estado,
            valor_total:totalPrice,
            notas: "",
            fechayhora:"",
            metodo_pago: currentMetodo.metodo,
            metodo_envio:""
        }
          let dataArray = [data, ...cartItems]
          setArray(dataArray)
          if(data.estado === 'confirmado'){
            setEnable(true)
            setShowModalConfirmar(false)
            addToast("Pedido confirmado", {
                appearance: "success",
                autoDismiss: true,
            });
            
          }else{
            
            addToast("Pedido pendiente", {
                appearance: "success",
                autoDismiss: true,
            });
            setPendiente(true)
          }
          
          await clienteAxios.post('/pedidos/array', {arr: dataArray})
          setPedidos(dataArray)
          
          getPedido();
        }
        catch (error) {
                console.log(error)
        }}
    function handle(e){
        let newMetodo = {...currentMetodo}
        newMetodo[e.target.name] = e.target.value
        console.log(newMetodo)
        setCurrentMetodo(newMetodo)
    }
    return(
        <div className="container group-vh-5">
            <div className="row ">
                <div className="col-md-6">
                    <label className="labelsm">Metodo de Pago:</label>
                </div>
                <div className="col-3 ajuste">
                   {cartItems.length > 0
                    ? <Button onClick={()=>{setShowModalConfirmar(true)}}
                    >Confirmar</Button>
                    : <Button
                    disabled
                    >Confirmar</Button>    }          
                </div>
                <div className="col-3 ajuste">
                    {enable === false
                    ? <button type="button" className="btn btn-custom" disabled>Remito</button>
                    : <button type="button" className="btn btn-custom" >Remito</button>}
                </div>
            </div>
            <div className="row ">
                <div className="col-md-6" >
                <select className="select labelsm"
                 onChange={(e) => handle(e)} name="metodo">
                    <option value="efectivo" selected>Efectivo</option>
                    <option value="tarjeta credito">Tarjeta de credito</option>
                    <option value="tarjeta debito">Tarjeta de Debito</option>
                    <option value="cuenta corriente">Cuenta Corriente</option>
                </select>
                </div>
                <div className="col-3 ajuste">
                {cartItems.length > 0
                    ? <Button onClick={()=>{handleEstado("pendiente")}}
                    >Pendiente</Button>
                    : <Button
                    disabled
                    >Pendiente</Button>    }
                </div>
                <div className="col-3 ajuste">
                {enable === false
                ? <button type="button" className="btn btn-custom" disabled>Ticket</button>
                : <button type="button" className="btn btn-custom" >Ticket</button>}
                
                </div>
            </div>
            <ModalConfirmarPedido
                handleEstado={handleEstado}
                showModalConfirmar={showModalConfirmar}
                setShowModalConfirmar={setShowModalConfirmar}
            />
        </div>
    )
}

export default LabelBottomSM;
