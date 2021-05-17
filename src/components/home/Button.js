import 'bootstrap/dist/css/bootstrap.css';

function Button(props) {
    return(
        <button type="button" className="btn btn-custom" onClick={props.onClick} disabled={props.disabled}>{props.children}</button>
)}

export default Button;