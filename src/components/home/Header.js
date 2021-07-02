import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

import { useOffline } from "../../context/offline-context";

function Header() {
    let { isDisconnected } = useOffline();
    return (
        <nav className="nav col-md-12">
            <Link className="nav-link active" to="/">
                <div style={{ zIndex: 99999, position: "relative" }}>
                    FULL CLEAN
                </div>
            </Link>
            <label className="nav-link2 active">|</label>
            <Link className="nav-link active" to="/pedidos">
                <div style={{ zIndex: 99999, position: "relative" }}>
                    Pedidos
                </div>
            </Link>
            <Link className="nav-link active" to="/clientes">
                <div style={{ zIndex: 99999, position: "relative" }}>
                    Clientes
                </div>
            </Link>
            <Link className="nav-link active" to="/facturas">
                <div style={{ zIndex: 99999, position: "relative" }}>
                    Facturas
                </div>
            </Link>
            <Link className="nav-link active" to="/alertas">
                <div style={{ zIndex: 99999, position: "relative" }}>
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
