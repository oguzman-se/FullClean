import Header from './Header'
import '../../App.css'
function Layout(props) {
    return (
    <div>
        <Header/>
        <br></br>
        {props.children}     

    </div>
    );
    
  }
export default Layout