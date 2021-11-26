import './style/style.css';

const Input = (props) => {
    return (
        <input type={props.type} name={props.name} id={props.id} className="input" placeholder={props.placeholder} onChange={props.change}/>
    );
}

export default Input;