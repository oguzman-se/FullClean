import React, {useState, useEffect} from 'react'
import {useHome} from '../../context/home-context'
function TableItem(props) {
    const {onRemove, onRemoveItem, onAdd, totalPrice, setTotalPrice} = useHome();
    const { item} = props;
    const [precio, setPrecio] = useState(item.precio.toFixed(2));
    const handleChange = (e)=>{
        setPrecio(e.target.value)
        setTotalPrice(e.target.value * item.qty)
    }
    useEffect(() => {
      setTotalPrice(totalPrice + item.precio)
      }, [])
    return (
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
                        type="number"
                        name="precio"
                        onChange={handleChange}
                        value={precio}/>
                    </td>
                    <td>${(item.qty * precio).toFixed(2)}</td>
                    <td>
                        <button className="btn-cross" onClick={()=>onRemoveItem(item)}>X</button>
                    </td>
        </tr>
    )
}

export default TableItem
