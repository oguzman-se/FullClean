import Button  from '../home/Button'

function LabelBottomSM(){

    return(
        <div className="container group-vh-5">
            <div className="row ">
                <div className="col-md-6">
                    <label className="labelsm">Metodo de Pago:</label>
                </div>
                <div className="col-3 ajuste">
                    <Button>Confirmar</Button>           
                </div>
                <div className="col-3 ajuste">
                    <Button>Remito</Button>
                </div>
            </div>
            <div className="row ">
                <div className="col-md-6" >
                <select className="select labelsm">
                    <option selected>Efectivo</option>
                    <option value="1">Tarjeta de credito</option>
                    <option value="2">Tarjeta de Debito</option>
                    <option value="3">Rapipago</option>
                </select>
                </div>
                <div className="col-3 ajuste">
                    <Button>Pendiente</Button>
                </div>
                <div className="col-3 ajuste">
                    <Button>Ticket</Button>
                </div>
            </div>
        </div>
    )
}

export default LabelBottomSM;
