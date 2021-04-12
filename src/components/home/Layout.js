import Header from './Header'

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