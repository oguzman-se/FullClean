import 'bootstrap/dist/css/bootstrap.css';

function CrossButton(props) {
    return(
        <button type="button" className="btn-cross">{props.children}</button>
)}

export default CrossButton;