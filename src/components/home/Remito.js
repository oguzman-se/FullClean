import React from 'react';
import TableItem from './tableItem'
export class ComponentToPrint extends React.PureComponent {
    render() {  
    const { cartItems } = this.props;
      return (
        <div className="container-fluid bordes">
            <div className="row bb">
                <div className="col-6 br">
                    <label className="col-12">Full Clean Express</label>
                    <label className="col-12">VENTA Y DISTRIBUCION DE PRODUCTOS DE LIMPIEZA</label>
                    <label className="col-12">BERUTI 70 - (1870) AVELLANEDA</label>
                    <label className="col-12">Buenos Aires - Cel.: 11 6017 - 4060</label>
                    <label className="col-12">Facebook: FULL CLEAN EXPRESS</label>
                    <label className="col-12">Instagram: @fullcleanexpress</label>
                </div>
                <div className="col-6">
                   
                        <div className="row">
                            <div className="col-3 br bb">x</div>
                            <div className="col-9 bb">RECIBO</div>
                        </div>
                        <div className="row">
                            <div className="col-12">Fecha</div>
                        </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12 bb">Señor/es:............................</div>
            </div>
            <div className="row bb">
                <div className="col-2 br">IVA</div>
                <div className="col-4 br">IVA</div>
                <div className="col-6">IVA</div>
            </div>
            <div className="row bb">
                <div className="col-6 br">IVA</div>
                <div className="col-6 br">IVA</div>
            </div>
            <div className="tabla table6">
            <table class="table">
            <thead class="thead-dark">
                <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
                </tr>
            </thead>
            <tbody>
            {cartItems.map((c)=>(
                <tr>
                <th scope="row">{c.id}</th>
                <td></td>
                <td>Otto</td>
                <td>@mdo</td>
                </tr>
            ))}
            </tbody>
            </table>
            </div>
            <div className="row bt">
                <div className="col-9 br">Total</div>
                <div className="col-3">$3500</div>
            </div>
        </div>
      );
}
}