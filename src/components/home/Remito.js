import React from 'react';
import TableItem from './tableItem'
import {useHome} from '../../context/home-context'
export class ComponentToPrint extends React.PureComponent {
    render() {  
      return (
        <div className="container-fluid bordes">
            <div className="row bb">
                <div className="col-6 br">Full Clean Express</div>
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
                <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                </tr>
                <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                </tr>
                <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
                </tr>
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