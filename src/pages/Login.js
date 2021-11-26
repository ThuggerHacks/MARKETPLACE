import Input from '../components/Input';
import Title from '../components/title';
import Button from '../components/button';
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import endpoint from '../Util/util';
import './style/style.css';

const Login = () => {

    window.onload = () => {
        if(sessionStorage.email!==undefined){
            window.open('/home','_self');
        }
    }

    const [email,setEmail] = useState();
    const [password,setPassword] = useState();

    const loginData = () => {
       
        const userData = {
            email:email,
            password:password
        }

        axios.get(endpoint+'login/'+email+'/'+password).then(response => {
            if(response.data === null){
                alert("Invalid information");
            }else{
                sessionStorage.email =email;
                window.open('home','_self');
            }
        }).catch(error => {
            console.log(error);
        })
    }

    return(
        <form className="container" onSubmit={e => {
            e.preventDefault();
            loginData();
        }}>
            <Title title="Login"/>
            <Input type="email" name="email" id="email" placeholder="Your email"  change={event =>{
                setEmail(event.target.value)
            }}/>

            <Input type="password" name="password" id="password" placeholder="Your password"  change={event =>{
                setPassword(event.target.value)
            }}/>
             <Button id="btn" text="Login" />
            <div className="link">
                <span className="span">Don't have an account? </span>
                <Link to="/signin">Signin</Link>
            </div>

        </form>
    );
}

export default Login;