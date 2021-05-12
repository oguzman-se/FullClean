import Button  from '../home/Button'
import ButtonDisabled from '../home/ButtonDisabled'
import clienteAxios from '../../config/clienteAxios'
import { useHome } from '../../context/home-context'
import { usePedidos } from '../../context/pedidos-context';

function LabelBottomSM(){
    const {labelCliente, totalPrice, cartItems} = useHome();
    const {pedidos, setPedidos, setArray, bigArray, setBigArray} = usePedidos()
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
    if (!labelCliente.nombre){
        labelCliente.id = 0
    }
    const handleEstado = async (estado) => {
        try {
        let data = {
            cliente_id: labelCliente.id,
            estado: estado,
            valor_total:totalPrice,
            notas: "",
            fechayhora:"",
            metodo_pago:"",
            metodo_envio:""
        }
          let dataArray = [data, ...cartItems]
          setArray(dataArray)
          await clienteAxios.post('/pedidos/array', {arr: dataArray})
          setPedidos(dataArray)
          console.log(dataArray)
          getPedido();
        }
        catch (error) {
                console.log(error)
        }}
    return(
        <div className="container group-vh-5">
            <div className="row ">
                <div className="col-md-6">
                    <label className="labelsm">Metodo de Pago:</label>
                </div>
                <div className="col-3 ajuste">
                    <Button
                    onClick={()=>{handleEstado("confirmado")}}
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
                    onClick={()=>{handleEstado("pendiente")}}
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
