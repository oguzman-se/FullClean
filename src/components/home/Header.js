import { Link, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

import { useOffline } from "../../context/offline-context";
import { useEffect, useState } from "react";

function Header() {
    let { isDisconnected } = useOffline();
    let location = useLocation();
    const [inHere, setInHere] = useState("home");

    useEffect(() => {
        let thatHere = location.pathname.substr(1, location.pathname.length);
        if (thatHere.length === 0) setInHere("home");
        else setInHere(thatHere);
    }, [location]);

    return (
        <nav className="nav col-md-12">
            <Link className="nav-link active" to="/">
                <div
                    style={{ zIndex: 99999, position: "relative" }}
                    className={inHere === "home" ? "inHere" : ""}
                >
                    FULL CLEAN
                </div>
            </Link>
            <label className="nav-link2 active">|</label>
            <Link className="nav-link active" to="/pedidos">
                <div
                    style={{ zIndex: 99999, position: "relative" }}
                    className={inHere === "pedidos" ? "inHere" : ""}
                >
                    Pedidos
                </div>
            </Link>
            <Link className="nav-link active" to="/clientes">
                <div
                    style={{ zIndex: 99999, position: "relative" }}
                    className={inHere === "clientes" ? "inHere" : ""}
                >
                    Clientes
                </div>
            </Link>
            <Link className="nav-link active" to="/facturas">
                <div
                    style={{ zIndex: 99999, position: "relative" }}
                    className={inHere === "facturas" ? "inHere" : ""}
                >
                    Facturas
                </div>
            </Link>
            <Link className="nav-link active" to="/alertas">
                <div
                    style={{ zIndex: 99999, position: "relative" }}
                    className={inHere === "alertas" ? "inHere" : ""}
                >
                    Alertas
                </div>
            </Link>
            <div
                style={{
                    width: "100%",
                    textAlign: "right",
                    marginTop: "-30px",
                }}
            >
                {isDisconnected ? (
                    <>
                        <OverlayTrigger
                            placement="bottom"
                            overlay={
                                <Tooltip id="tooltip-disabled">
                                    -No recargue el sitio.
                                    <br />
                                    -No cree clientes/categorías/productos.
                                    <br />
                                    -SOLO HAGA PEDIDOS.
                                </Tooltip>
                            }
                        >
                            <span
                                style={{
                                    fontSize: 13,
                                    zIndex: 10,
                                    position: "relative",
                                    paddingRight: 50,
                                    cursor: "pointer",
                                }}
                                className="d-inline-block"
                            >
                                DESCONECTADO
                            </span>
                        </OverlayTrigger>
                    </>
                ) : (
                    ""
                )}
            </div>
        </nav>
    );
}

export default Header;
