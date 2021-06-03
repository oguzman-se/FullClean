import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
function Header() {
    return(
<nav className="nav col-md-12">
  <Link className="nav-link active" to="/" >FULL CLEAN</Link>
  <label className="nav-link2 active" >|</label>
  <Link className="nav-link active" to="/pedidos" >Pedidos</Link>
  <Link className="nav-link active" to="/clientes" >Clientes</Link>
  <Link className="nav-link active" to="/facturas" >Facturas</Link>
  <Link className="nav-link active" to="/alertas" >Alertas</Link>
</nav>
)}

export default Header;