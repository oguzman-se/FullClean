import React from 'react'
function Table(props){
    const {cartItems, onRemove} = props;
    const totalPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
    const itemPrice = cartItems.map((item) => (item.price * item.qty))

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
                    <td >{item.name}</td>
                    <td>{item.qty}</td>
                    <td>{item.price}</td>
                    <td>{totalPrice}</td>
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
