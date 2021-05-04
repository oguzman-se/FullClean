import React from 'react'
import {useHome} from '../../context/home-context'

function Table(){
    const {cartItems, setCartItems, onRemove, onRemoveItem, onAdd} = useHome();
    const handleChange = e=> {
        const {name, value} = e.target;
        setCartItems((prevState)=>({
          ...prevState,
          [name]: value
        }))
        console.log(cartItems);
      }
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
                    <td>{item.id}</td>
                    <td className="name">{item.nombre}</td>
                    <td>
                        <button className="btn-minus" onClick={()=>onRemove(item)}>-</button>
                        {item.qty}
                        <button className="btn-plus" onClick={()=>onAdd(item)}>+</button>
                    </td>
                    <td>
                        <input 
                        name="precio"
                        onChange={handleChange}
                        value={item.precio.toFixed(2)}/>
                    </td>
                    <td>${(item.qty * item.precio).toFixed(2)}</td>
                    <td>
                        <button className="btn-cross" onClick={()=>onRemoveItem(item)}>X</button>
                    </td>
                </tr>
            ))}
        </tbody>            
        </table>
    </div>
        
    )
}

export default Table;
