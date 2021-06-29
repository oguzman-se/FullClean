import React, { useState } from "react";
import ModalCustom from "../../modals/ModalCustom";
import ModalCategoria from "../../modals/ModalCategoria";
import ModalSearchProducts from "../../modals/ModalSearchProducts";
import Button from "../../Button";
import { useHome } from "../../../../context/home-context";
import { usePedidos } from "../../../../context/pedidos-context";
import ModalNuevaCompra from "../../modals/ModalNuevaCompra";
import ModalPedidosPendientes from "../../modals/ModalPedidosPendientes";
import { useToasts } from "react-toast-notifications";
function GroupButton() {
    const { addToast } = useToasts();
    const {
        setShow,
        setShowTable,
        setShowCategoria,
        cartItems,
        setLabelCliente,
        enable,
        onRemoveAll,
        setEnable,
        pendiente,
        setPendiente,
        setCurrentMetodo,
    } = useHome();
    const {
        showNuevaCompra,
        setShowNuevaCompra,
        setVentaCredito,
    } = usePedidos();
    const [showPedidosPendientes, setShowPedidosPendientes] = useState(false);

    const nuevaCompra = () => {
        console.log(cartItems);
        if (cartItems.length > 0 && enable === false && pendiente === false) {
            setShowNuevaCompra(true);
        } else {
            setLabelCliente({});
            onRemoveAll();
            setEnable(false);
            setPendiente(false);
            setCurrentMetodo("efectivo");
            setVentaCredito("venta");
            addToast("Nueva Venta Seteada", {
                appearance: "success",
                autoDismiss: true,
            });
        }
    };
    return (
        <div className="group-vh-1">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-3 ajuste">
                        <Button onClick={nuevaCompra}>Nueva Venta</Button>
                    </div>
                    <div className="col-3 ajuste">
                        <Button onClick={() => setShow(true)}>
                            Crear Producto
                        </Button>
                    </div>
                    <div className="col-2 ajuste"></div>
                    <div className="col-4 ajuste2">
                        <Button onClick={() => setShowPedidosPendientes(true)}>
                            Pedidos Pendientes
                        </Button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-3 ajuste">
                        <Button
                            onClick={() => {
                                setVentaCredito("notadecredito");
                                addToast("Nota de Credito Seteada", {
                                    appearance: "success",
                                    autoDismiss: true,
                                });
                            }}
                        >
                            Nota de Credito
                        </Button>
                    </div>
                    <div className="col-3 ajuste">
                        <Button onClick={() => setShowCategoria(true)}>
                            Crear Categoria
                        </Button>
                    </div>
                    <div className="col-2 ajuste"></div>
                    <div className="col-4 ajuste2">
                        <Button onClick={() => setShowTable(true)}>
                            Buscar Productos
                        </Button>
                    </div>
                </div>
            </div>

            {/*Modal de creación de producto*/}
            <ModalCustom />
            {/*Modal de busqueda de productos*/}
            <ModalSearchProducts />
            {/*Modal de categorias*/}
            <ModalCategoria />
            {/*Modal de confirmación de nueva compra*/}
            <ModalNuevaCompra
                showNuevaCompra={showNuevaCompra}
                setShowNuevaCompra={setShowNuevaCompra}
                setVentaCredito={setVentaCredito}
            />
            {/*Modal de pedidos pendientes*/}
            <ModalPedidosPendientes
                showPedidosPendientes={showPedidosPendientes}
                setShowPedidosPendientes={setShowPedidosPendientes}
            />
        </div>
    );
}
export default GroupButton;
