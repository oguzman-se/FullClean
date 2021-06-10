import React, { useState } from "react";
import clienteAxios from "../../config/clienteAxios";
import { useHome } from "../../context/home-context";
import Pendiente from "./Pedidos";
import { usePedidos } from "../../context/pedidos-context";
function ListPedidos(props) {
    const {
        products,
        cartPedidos,
        setCartPedidos,
        Allclientes,
        setLabelPedido,
        setEnable,
        pendiente,
    } = useHome();
    const { setCurrentPedido, setHelpCurrentPedido } = usePedidos();
    const [showPendiente, setShowPendiente] = useState(false);
    const { setShowPedidosPendientes, showPedidosPendientes } = props;
    const onSubmit = async (id) => {
        await clienteAxios
            .get(`/pedidodetalles/pedido/${id}`)
            .then((res) => {
                let arr = res.data;
                let ArrayFinal = [];
                arr.map((item) => {
                    let dataProduct = products.filter(
                        (p) => p.id === item.producto_id
                    );
                    if (dataProduct[0]) {
                        let productoIdeal = {
                            id: dataProduct[0].id,
                            nombre: dataProduct[0].nombre,
                            precio: item.precio,
                            qty: item.cantidad,
                        };
                        ArrayFinal.push(productoIdeal);
                    }
                    return "";
                });
                setCartPedidos(ArrayFinal);
                setEnable(true);
            })
            .catch((e) => {
                console.log(e);
            });
    };
    const masterSubmit = async (pedido) => {
        if (cartPedidos.length > 0 && pendiente === false) {
            setShowPendiente(true);
            setHelpCurrentPedido(pedido);
        } else {
            setCurrentPedido(pedido);
            let currentCliente;
            if (pedido.cliente_id !== 0) {
                currentCliente = Allclientes.filter(
                    (c) => c.id === pedido.cliente_id
                );
            } else {
                currentCliente = [
                    {
                        id: 0,
                        cliente: "Consumidor Final",
                    },
                ];
            }
            setLabelPedido(currentCliente[0]);
            onSubmit(pedido.id);
            if (showPedidosPendientes === true) {
                setShowPedidosPendientes(false);
            }
        }
    };

    //BUSCADOR DE PEDIDOS
    const [search, setSearch] = useState({
        text: "",
        estado: "TODOS",
        pago: "TODOS",
        desde: [],
        hasta: [],
    });

    const filtroBuscador = (item) => {
        let validator = false;
        let validatorEstado = false;
        let validatorPago = false;
        let validatorDia = false;

        if (item.tipo_pedido === "venta") {
            if (search.text !== "") {
                if (
                    item.id
                        .toString()
                        .includes(search.text.toString().toLowerCase())
                ) {
                    validator = true;
                }
            } else {
                validator = true;
            }
        }

        //validación por estado
        if (search.estado === "TODOS") {
            validatorEstado = true;
        } else if (
            search.estado === "confirmado" &&
            item.estado === "confirmado"
        ) {
            validatorEstado = true;
        } else if (
            search.estado === "pendiente" &&
            item.estado === "pendiente"
        ) {
            validatorEstado = true;
        } else {
            validatorEstado = false;
        }

        //validación por método de pago
        if (search.pago === "TODOS") {
            validatorPago = true;
        } else if (
            search.pago === "efectivo" &&
            item.metodo_pago === "efectivo"
        ) {
            validatorPago = true;
        } else if (
            search.pago === "tarjeta credito" &&
            item.metodo_pago === "tarjeta credito"
        ) {
            validatorPago = true;
        } else if (
            search.pago === "tarjeta debito" &&
            item.metodo_pago === "tarjeta debito"
        ) {
            validatorPago = true;
        } else if (
            search.pago === "cuenta corriente" &&
            item.metodo_pago === "cuenta corriente"
        ) {
            validatorPago = true;
        } else {
            validatorPago = false;
        }

        //validación por fecha
        if (search.desde.length > 0 && search.hasta.length > 0) {
            let fromPedido = item.fechayhora.substring(0, 10);
            let desdeFilter = search.desde;
            let hastaFilter = search.hasta;

            if (desdeFilter === hastaFilter) {
                if (fromPedido !== desdeFilter) {
                    validatorDia = false;
                } else {
                    validatorDia = true;
                }
            } else {
                console.log(fromPedido, desdeFilter, hastaFilter);
                if (fromPedido >= desdeFilter && fromPedido <= hastaFilter) {
                    validatorDia = true;
                } else {
                    validatorDia = false;
                }
            }
        } else {
            validatorDia = true;
        }

        if (validator && validatorPago && validatorEstado && validatorDia)
            return item;
    };

    return (
        <Pendiente
            search={search}
            setSearch={setSearch}
            filtroBuscador={filtroBuscador}
            masterSubmit={masterSubmit}
            showPendiente={showPendiente}
            setShowPendiente={setShowPendiente}
            onSubmit={onSubmit}
            showPedidosPendientes={showPedidosPendientes}
            setShowPedidosPendientes={setShowPedidosPendientes}
        />
    );
}

export default ListPedidos;
