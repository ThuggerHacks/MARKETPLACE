import './style/style.css';

const Button = (props) => {

    return (
        <button id={props.id} className="btn" type="submit">{props.text}</button>
    );
}

export default Button;