import 'bootstrap/dist/css/bootstrap.css';

function Button(props) {
    return(
        <button type="button" className="btn btn-custom" disabled onClick={props.onClick}>{props.children}</button>
)}

export default Button;