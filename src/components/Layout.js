import Header from './Header'
import Button from './Button'
import '../App.css'

import 'bootstrap/dist/css/bootstrap.css'
function Layout(props) {
  
    return (
      <div>
        <Header/>
        <div class="size-button">
          <Button class="sub-button">
            Nueva Compra
          </Button>
          <Button class="sub-button">
            + Producto
          </Button>  
          </div><div>      
          <Button class="sub-button">
            Nota de Credito
          </Button>
          <Button class="sub-button">
            + Categoria
          </Button>
        </div>
        <br></br>
        {props.children}
      

      </div>
    );
    
  }
export default Layout