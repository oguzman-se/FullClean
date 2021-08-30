import React, { useState, useEffect } from "react";
import { useHome } from "../../context/home-context";
import Tooltip from "../Tooltip";
function TableItem(props) {
    const {
        onRemove,
        onRemoveItem,
        onAdd,
        totalPrice,
        setTotalPrice,
        cartItems,
        setCartItems,
        setQty,
        barcodeRef,
    } = useHome();
    const { item } = props;
    const [precio, setPrecio] = useState(item.precio);
    const [total, setTotal] = useState(0);

    const handleTotalCart = (item, price) => {
        let PrecioTotal = 0;
        let QtyTotal = 0;
        if (!item) {
            cartItems.map((it) => {
                PrecioTotal = PrecioTotal + it.precio * it.qty;
                QtyTotal = QtyTotal + it.qty;
                return "";
            });
        } else {
            let toCart = cartItems.map((it) => {
                if (it.id === item.id) {
                    it.precio = price;
                    PrecioTotal = PrecioTotal + price * it.qty;
                    QtyTotal = QtyTotal + it.qty;
                } else {
                    PrecioTotal = PrecioTotal + it.precio * it.qty;
                    QtyTotal = QtyTotal + it.qty;
                }
                return it;
            });
            setCartItems(toCart);
        }
        setTotalPrice(PrecioTotal);
        setQty(QtyTotal);
    };

    const handleChange = (e) => {
        setPrecio(e.target.value);
        setTotal((item.qty * e.target.value).toFixed(2));
        handleTotalCart(item, e.target.value);
    };

    useEffect(() => {
        handleTotalCart();
        //console.log("vuleveee", cartItems);
        setTotal((item.qty * item.precio).toFixed(2));
        setPrecio(item.precio);
    }, [item]);

    return (
        <tr key={item.id}>
            <td>{item.id}</td>
            <td className="name">
                <Tooltip max={25} text={item.nombre} />
            </td>
            <td>
                <button
                    className="btn-minus"
                    onClick={() => {
                        onRemove(item);
                        setTimeout(() => barcodeRef.current.focus(), 400);
                    }}
                >
                    -
                </button>
                {item.qty}
                <button
                    className="btn-plus"
                    onClick={() => {
                        onAdd(item, precio);
                        setTimeout(() => barcodeRef.current.focus(), 400);
                    }}
                >
                    +
                </button>
            </td>
            <td>
                <input
                    type="number"
                    name="precio"
                    onChange={handleChange}
                    value={precio}
                />
            </td>
            <td>${total}</td>
            <td>
                <button
                    className="btn-cross"
                    onClick={() => onRemoveItem(item)}
                >
                    X
                </button>
            </td>
        </tr>
    );
}

export default TableItem;
