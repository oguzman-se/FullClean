import { Link } from "react-router-dom";

function Menu() {
    return(
<nav class="nav">
  <Link class="nav-link active" to="/" >Home</Link>
  <Link class="nav-link active" to="/pedidos" >Pedidos</Link>
  <Link class="nav-link active" to="/clientes" >Clientes</Link>
  <Link class="nav-link active" to="/facturas" >Facturas</Link>
</nav>
)}

export default Menu;