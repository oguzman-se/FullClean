import Button  from '../home/Button'

function LabelBottomSM(){

    return(
        <div className="container-fluid">
            <div className="row padding-label">
                <div className="col-md-5">
                    <label className="label">Metodo de Pago:</label>
                </div>
                <div className="col-md-3 group-button-1">
                    <Button>Confirmar</Button>
                </div>
                <div className="col-md-3">
                    <Button>Remito</Button>
                </div>
            </div>
            <div className="row padding-label">
                <div className="col-md-5">
                <select className="select">
                    <option selected>Efectivo</option>
                    <option value="1">Tarjeta de credito</option>
                    <option value="2">Tarjeta de Debito</option>
                    <option value="3">Rapipago</option>
                </select>
                </div>
                <div className="col-md-3 group-button-1">
                    <Button>Pendiente</Button>
                </div>
                <div className="col-md-3">
                    <Button>Ticket</Button>
                </div>
            </div>
        </div>
    )
}

export default LabelBottomSM;
