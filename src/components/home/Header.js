import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
function Header() {
    return(
<nav className="nav">
  <Link className="nav-link active" to="/" >FULL CLEAN</Link>
  <Link className="nav-link active" >|</Link>
  <Link className="nav-link active" to="/pedidos" >Pedidos</Link>
  <Link className="nav-link active" to="/clientes" >Clientes</Link>
  <Link className="nav-link active" to="/facturas" >Facturas</Link>
</nav>
)}

export default Header;