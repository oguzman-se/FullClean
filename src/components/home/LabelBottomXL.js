import { useHome } from "../../context/home-context";

function LabelBottomXL(props){
    const {totalPrice, qty} = useHome();
    //const {countCartItems} = props;
    return(
        <div className="container-fluid group-vh-4">
            <div className="row ">
                <div className="col-xs-12 col-md-5 labelbottom">
                    <label>{qty} Unidades</label>
                </div>
                <div className="col-xs-12 col-md-3 labelbottom">
                    <label>Total</label>
                </div>
                <div className="col-xs-12 col-md-4 labelbottom">
                    <label>$ {totalPrice.toFixed(2)}</label>
                </div>
            </div>
        </div>
    )
}

export default LabelBottomXL;
