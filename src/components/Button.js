
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';

function Button(props) {
    return(
        <button type="button" class="btn btn-custom">{props.children}</button>
)}

export default Button;
