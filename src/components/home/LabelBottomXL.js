
function LabelBottomXL(props){
    const {countCartItems, totalPrice} = props;
    return(
        <div className="container-fluid group-vh-4">
            <div className="row ">
                <div className="col-xs-12 col-md-5 labelbottom">
                    <label>{countCartItems} Unidades</label>
                </div>
                <div className="col-xs-12 col-md-4 labelbottom">
                    <label>Total</label>
                </div>
                <div className="col-xs-12 col-md-3 labelbottom">
                    <label>$ {totalPrice}</label>
                </div>
            </div>
        </div>
    )
}

export default LabelBottomXL;
