import { Link } from "react-router-dom";
import '../../src/App.css';
import 'bootstrap/dist/css/bootstrap.css';
function Header() {
    return(
<nav class="nav">
  <Link class="nav-link active" to="/" >FULL CLEAN</Link>
  <Link class="nav-link active" >|</Link>
  <Link class="nav-link active" to="/pedidos" >Pedidos</Link>
  <Link class="nav-link active" to="/clientes" >Clientes</Link>
  <Link class="nav-link active" to="/facturas" >Facturas</Link>
</nav>
)}

export default Header;