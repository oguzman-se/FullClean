import Button  from '../home/Button'

function LabelBottomSM(){

    return(
        <div class="container-fluid">
            <div class="row padding-label">
                <div class="col-md-6">
                    <label class="label">Metodo de Pago:</label>
                </div>
                <div class="col-md-3">
                    <Button>Confirmar</Button>
                </div>
                <div class="col-md-3">
                    <Button>Remito</Button>
                </div>
            </div>
            <div class="row padding-label">
                <div class="col-md-6">
                <select class="custom-select">
                    <option selected>Efectivo</option>
                    <option value="1">Tarjeta de credito</option>
                    <option value="2">Tarjeta de Debito</option>
                    <option value="3">Rapipago</option>
                </select>
                </div>
                <div class="col-md-3">
                    <Button>Pendiente</Button>
                </div>
                <div class="col-md-3">
                    <Button>Ticket</Button>
                </div>
            </div>
        </div>
    )
}

export default LabelBottomSM;
