import React, { useState, useEffect, useRef } from "react";
import clienteAxios from "../config/clienteAxios";
const HomeContext = React.createContext();

export function HomeProvider(props) {
    //estado o valor total
    // ESTE ESTADO ES PARA LOS ITEMS DEL CARRITO, LOS PRODUCTOS.
    const [cartItems, setCartItems] = useState([]);
    // ESTE ESTADO ES PARA LOS ITEMS DEL CARRITO, LOS PRODUCTOS.
    const [cartPedidos, setCartPedidos] = useState([]);
    //DISABLED BOTONES
    const [enable, setEnable] = useState(false);
    //SIRVE PARA EL BOTON DE NUEVA COMPRA, PARA SABER CUANDO MOSTRAR EL MODAL
    const [pendiente, setPendiente] = useState(false);
    //ESTE ESTADO SIRVE PARA ABRIR Y CERRAR EL MODL DE "+PRODUCTOS"
    const [show, setShow] = useState(false);
    //ESTADO DEL CURRENT PRODUCTO CUANDO SE CREA
    const [currentProducto, setCurrentProducto] = useState({});
    //MODAL DE CREAR UN NUEVO CLIENTE
    const [showNuevoCliente, setShowNuevoCliente] = useState(false);
    //ESTE ESTADO SIRVE PARA ABRIR Y CERRAR EL MODAL DE "BUSCAR PRODUCTOS"
    const [showTable, setShowTable] = useState(false);

    //ESRE ESTADO SIRVE PARA ABRIR Y CERRAR EL MODAL DE "+ CATEGORIA"
    const [showCategoria, setShowCategoria] = useState(false);

    //ESTE ES EL REF DEL INPUT DE BARCODE
    const barcodeRef = useRef(null);

    //ESRE ESTADO SIRVE PARA ABRIR Y CERRAR EL MODAL DE "+ CATEGORIA"
    const [showNotaCredito, setShowNotaCredito] = useState(false);

    //API

    //PRODUCTOS API
    const [products, setProducts] = useState([]);
    useEffect(() => {
        obtenerDatos();
    }, []);
    const obtenerDatos = async () => {
        await clienteAxios.get("/productos").then((res) => {
            setProducts(res.data);
        });
    };

    //FACTURAS ID API
    const [facturasXcliente, setFacturaXcliente] = useState([]);
    const obtenerFacturasXcliente = async (params) => {
        await clienteAxios
            .get(`/facturas/cliente/${params ? params : labelCliente.id}`)
            .then((res) => {
                setFacturaXcliente(res.data);
            });
    };

    //PEDIDO ID API
    const [pedidosXcliente, setPedidoXcliente] = useState([]);
    const obtPedidoXcliente = async (params) => {
        await clienteAxios
            .get(`/pedidos/cliente/${params ? params : labelCliente.id}`)
            .then((res) => {
                setFacturaXcliente(res.data);
                //console.log("pedidosXcliente", pedidosXcliente);
            });
    };

    const [pedidosOrFactura, setPedidosOrFactura] = useState(true); //si es TRUE muestra pedidos del cliente, si es FALSE, muestra facturas
    const [arrGenerateFact, setArrGenerateFact] = useState([]); //este array es para contar los pedidos checkeados (en la pantalla de clientes) y habilitar un boton para generar una factura, se tiene que setear en 0 cada vez que elegimos un cliente en la pantalla de clientes.
    const [deudaXCliente, setDeudaXCliente] = useState(0); //DEUDA por cliente vista en la pantalla de CLIENTES

    function roundDeuda(num, decimales = 2) {
        var signo = num >= 0 ? 1 : -1;
        num = num * signo;
        if (decimales === 0)
            //con 0 decimales
            return signo * Math.round(num);
        // round(x * 10 ^ decimales)
        num = num.toString().split("e");
        num = Math.round(
            +(num[0] + "e" + (num[1] ? +num[1] + decimales : decimales))
        );
        // x * 10 ^ (-decimales)
        num = num.toString().split("e");
        return (
            signo * (num[0] + "e" + (num[1] ? +num[1] - decimales : -decimales))
        );
    }

    const getDeudaXcliente = async (params) => {
        await clienteAxios
            .get(`/clientes/deuda/${params ? params : labelCliente.id}`)
            .then((res) => {
                setDeudaXCliente(roundDeuda(res.data.deuda));
            })
            .catch((err) =>
                console.log("Error trayendo la deuda del cliente", err)
            );
    };

    //PRODUCTOS CODIGO API
    const [AllCodigos, setAllCodigos] = useState([]);
    useEffect(() => {
        obtenerCodigo();
    }, []);
    const obtenerCodigo = async () => {
        await clienteAxios.get("/productoscodigo").then((res) => {
            setAllCodigos(res.data);
        });
    };
    const [currentcodigo, setCurrentcodigo] = useState({
        id: "",
        codigo: "",
        producto_id: "",
    });
    //CATEGORIAS API
    const [AllCategorias, SetAllCategorias] = useState([]);

    useEffect(
        () => {
            obtenerCategorias();
        },
        // eslint-disable-next-line
        []
    );

    const obtenerCategorias = async () => {
        await clienteAxios.get("/categorias").then((res) => {
            SetAllCategorias(res.data);
            console.log("AllCategorias", AllCategorias);
        });
    };

    //CLIENTES API
    const [Allclientes, setAllClientes] = useState([]);

    useEffect(
        () => {
            obtenerClientes();
        },
        // eslint-disable-next-line
        []
    );

    const obtenerClientes = async () => {
        await clienteAxios.get("/clientes").then((res) => {
            setAllClientes(res.data);
        });
    };

    //USEEFFECT Y USESTATE DEL MODAL DE BUSCAR PRODUCTOS,
    // SE USA PARA MOSTRAR LOS PRODUCTOS Y PARA SU BUSCADOR
    const [term, setTerm] = useState("");

    //FUNCION PARA AGREGAR PRODUCTOS AL CARRITO
    const onAdd = (product) => {
        const exist = cartItems.find((x) => x.id === product.id);
        if (exist) {
            setCartItems(
                cartItems.map((x) =>
                    x.id === product.id
                        ? { ...exist, qty: exist.qty + 1, precio: exist.precio }
                        : x
                )
            );
        } else {
            setCartItems([...cartItems, { ...product, qty: 1 }]);
        }
    };

    //FUNCION PARA QUITAR PRODUCTOS DEL CARRITO
    const onRemove = (product) => {
        console.log("QUE ELIMINAMOS", product);
        const exist = cartItems.find((x) => x.id === product.id);
        if (exist.qty === 1) {
            let PrecioTotal = 0;
            let QtyTotal = 0;
            //setCartItems(
            //cartItems
            //.filter((x) => x.id !== product.id)
            //.map((it) => {
            //PrecioTotal = PrecioTotal + it.precio * it.qty;
            //QtyTotal = QtyTotal + it.qty;
            //return it;
            //})
            //);

            let newCarro = [...cartItems];

            let prueba = cartItems.findIndex((a) => a.id === product.id);
            console.log("Esta es la posicion: ", prueba);
            newCarro.splice(prueba, 1);
            setCartItems(newCarro);

            //setTotalPrice(PrecioTotal);
            //setQty(QtyTotal);
        } else {
            setCartItems(
                cartItems.map((x) =>
                    x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
                )
            );
        }
    };
    const onRemoveItem = (product) => {
        console.log("QUE ELIMINAMOS", product);
        let PrecioTotal = 0;
        let QtyTotal = 0;
        setCartItems(
            cartItems
                .filter((x) => x.id !== product.id)
                .map((it) => {
                    PrecioTotal = PrecioTotal + it.precio * it.qty;
                    QtyTotal = QtyTotal + it.qty;
                    return it;
                })
        );
        setTotalPrice(PrecioTotal);
        setQty(QtyTotal);
    };
    //VACIA EL CARRITO
    const onRemoveAll = () => {
        setCartItems([]);
    };

    //vaciar el carrito, el cliente, totales, qty, todotodo...
    const vaciarCompra = () => {
        setEnable(false);
        setLabelCliente({});
        setCurrentMetodo({ ...currentMetodo, metodo: "efectivo" });
        setTotalPrice(0);
        setQty(0);
        onRemoveAll();
    };

    let [totalPrice, setTotalPrice] = useState(0); //precio total de todo el carrito
    let [qty, setQty] = useState(0); //qty total de todo el carrito

    //FUNCION PARA AGREGAR CLIENTE
    const [labelCliente, setLabelCliente] = useState([]);
    //FUNCION PARA AGREGAR CLIENTE
    const [labelPedido, setLabelPedido] = useState([]);
    //CLIENTE PEDIDOS
    const [labelPed, setLabelPed] = useState([]);
    //CURRENT METODOOOO
    const [currentMetodo, setCurrentMetodo] = useState({});

    //destacamos un producto
    const destacarProd = async (producto, destacado, setProducto) => {
        await clienteAxios
            .put(`/productos/${producto.id}`, {
                destacado: destacado,
            })
            .then((res) => {
                console.log(res.data);
                const getProduct = async () => {
                    await clienteAxios
                        .get("/productos")
                        .then((r) => {
                            setProducts(r.data);
                            r.data.forEach((p) => {
                                if (p.id === producto.id) setProducto(p);
                            });
                        })
                        .catch((r) => {
                            console.log("error get", r);
                        });
                };
                getProduct();
            })
            .catch((err) => {
                console.log("error put", err);
            });
    };

    //DECLARO QUIEN ES EL CONTEXT
    const value = {
        cartItems,
        setCartItems,
        show,
        setShow,
        products,
        onAdd,
        onRemove,
        totalPrice,
        onRemoveAll,
        showTable,
        setShowTable,
        term,
        setTerm,
        onRemoveItem,
        qty,
        showCategoria,
        setShowCategoria,
        setProducts,
        AllCategorias,
        SetAllCategorias,
        Allclientes,
        setAllClientes,
        labelCliente,
        setLabelCliente,
        currentProducto,
        setCurrentProducto,
        AllCodigos,
        setAllCodigos,
        currentcodigo,
        setCurrentcodigo,
        setTotalPrice,
        enable,
        setEnable,
        pendiente,
        setPendiente,
        showNuevoCliente,
        setShowNuevoCliente,
        currentMetodo,
        setCurrentMetodo,
        labelPed,
        setLabelPed,
        cartPedidos,
        setCartPedidos,
        labelPedido,
        setLabelPedido,
        facturasXcliente,
        setFacturaXcliente,
        obtenerFacturasXcliente,
        pedidosXcliente,
        setPedidoXcliente,
        obtPedidoXcliente,
        barcodeRef,
        obtenerDatos,
        pedidosOrFactura,
        setPedidosOrFactura,
        arrGenerateFact,
        setArrGenerateFact,
        deudaXCliente,
        setDeudaXCliente,
        getDeudaXcliente,
        roundDeuda,
        setQty,
        destacarProd,
        vaciarCompra,
        obtenerClientes,
        showNotaCredito, 
        setShowNotaCredito
    };
    return <HomeContext.Provider value={value} {...props} />;
}
//EXPORTO EL CONTEXT
export function useHome() {
    const context = React.useContext(HomeContext);
    if (!context) {
        throw new Error("Something wrong had happended");
    }
    return context;
}
