import React from 'react'
function Table(props){
    const {cartItems, onRemove} = props;
    return(
        <div className="tabla">
        <table className="table">
        <thead className="thead-dark">
            <tr>
                <th  scope="col">Codigo</th>
                <th scope="col">Producto</th>
                <th scope="col">Cantidad</th>
                <th scope="col">price Un.</th>
                <th scope="col">Total</th>
                <th scope="col"></th>
            </tr>
        </thead>
        <tbody>
            <div>
                {cartItems.lenght === 0 && <div></div>}
            </div>
            {cartItems.map((item)=>(
                <tr key={item.id}>
                    <td>0001</td>
                    <td className="name">{item.name}</td>
                    <td>{item.qty}</td>
                    <td>${item.price.toFixed(2)}</td>
                    <td>${(item.qty * item.price).toFixed(2)}</td>
                    <td>
                        <button className="btn-cross" onClick={()=>onRemove(item)}>X</button>
                    </td>
                </tr>
            ))}
        </tbody>            
        </table>
    </div>
        
    )
}

export default Table;
