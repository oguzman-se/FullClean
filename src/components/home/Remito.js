import React from "react";
import Cabecera from "./recibo/Cabecera";
import ClienteInfo from "./recibo/ClienteInfo";
import ListadoRemito from "./recibo/ListadoRemito";

export class ComponentToPrint extends React.PureComponent {
    render() {
        const { cartItems, cliente } = this.props;

        return (
            <div className="container-fluid bordes printRemito">
                <div className="row bb">
                    <Cabecera type="REMITO"/>
                </div>
                <div className="row">
                    <ClienteInfo cliente={cliente} />
                </div>
                <ListadoRemito cartItems={cartItems}/>
            </div>
        );
    }
}
