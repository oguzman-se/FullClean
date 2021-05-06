import Button  from '../home/Button'
import ButtonDisabled from '../home/ButtonDisabled'
import clienteAxios from '../../config/clienteAxios'
import { useHome } from '../../context/home-context'
import { usePedidos } from '../../context/pedidos-context';

function LabelBottomSM(){
    const {labelCliente, totalPrice} = useHome();
    const {pedidos, setPedidos} = usePedidos()
    if (!labelCliente.nombre){
        labelCliente.id = 0
    }
    const estadoConfirmado = async () => {
        await clienteAxios.post('/pedidos', {
            cliente_id: labelCliente.id,
            estado: "confirmado",
            valor_total:totalPrice,
            notas: "",
            fechayhora:"",
            metodo_pago:"",
            metodo_envio:""
        })
        .then((res) =>{
          console.log(res.data)
          setPedidos(res.data)
        })
        .catch((err) => {
          console.log("error post", err);
        });
        
      }
      const estadoPendiente = async () => {
        await clienteAxios.post('/pedidos', {
            cliente_id: labelCliente.id,
            estado: "pendiente",
            valor_total: totalPrice,
            notas: "",
            fechayhora:"",
            metodo_pago:"",
            metodo_envio:""
        })
        .then((res) =>{
            console.log(res.data)
        })
        .catch((err) => {
          console.log("error post", err);
        });
        
      }
    return(
        <div className="container group-vh-5">
            <div className="row ">
                <div className="col-md-6">
                    <label className="labelsm">Metodo de Pago:</label>
                </div>
                <div className="col-3 ajuste">
                    <Button
                    onClick={estadoConfirmado}
                    >Confirmar</Button>           
                </div>
                <div className="col-3 ajuste">
                    <ButtonDisabled>Remito</ButtonDisabled>
                </div>
            </div>
            <div className="row ">
                <div className="col-md-6" >
                <select className="select labelsm">
                    <option selected>Efectivo</option>
                    <option value="1">Tarjeta de credito</option>
                    <option value="2">Tarjeta de Debito</option>
                    <option value="3">Cuenta Corriente</option>
                </select>
                </div>
                <div className="col-3 ajuste">
                    <Button
                    onClick={estadoPendiente}
                    >Pendiente</Button>
                </div>
                <div className="col-3 ajuste">
                    <ButtonDisabled >Ticket</ButtonDisabled>
                </div>
            </div>
        </div>
    )
}

export default LabelBottomSM;
