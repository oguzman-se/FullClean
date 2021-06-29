import React from "react";
import Cabecera from "./recibo/Cabecera";
import ClienteInfo from "./recibo/ClienteInfo";
import ClienteIVA from "./recibo/ClienteIVA";
import ListadoRecibo from "./recibo/ListadoRecibo";

export class ComponentToPrint extends React.PureComponent {
    render() {
        const { cartItems, cliente } = this.props;

        return (
            <div className="container-fluid bordes printRemito">
                <div className="row bb">
                    <Cabecera type="RECIBO" />
                </div>
                <div className="row">
                    <ClienteInfo cliente={cliente} />
                </div>
                <ClienteIVA cliente={cliente} />
                <ListadoRecibo cartItems={cartItems} />
            </div>
        );
    }
}
