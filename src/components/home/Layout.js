import Header from './Header'
import '../../App.css'
function Layout(props) {
    return (
    <div>
        <Header/>
        
        {props.children}     

    </div>
    );
    
  }
export default Layout