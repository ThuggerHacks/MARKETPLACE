import Input from '../components/Input';
import Title from '../components/title';
import Button from '../components/button';
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import endpoint from '../Util/util';

import './style/style.css';

const Signin = () => {

    const [username, setUsername ] = useState();
    const [lastname, setLastname ] = useState();
    const [email, setEmail ] = useState();
    const [password, setPassword ] = useState();

    const register = () => {
        
        const go = {
            firstName:username,
            lastName:lastname,
            email:email,
            password:password
        }
        
        axios.post(endpoint+"client/create",go).then(resp => {
            if(resp.data.index===0){
                alert("This email is being used with another user");
            }else {
                alert("signed in")
                document.querySelector("form").reset();
            }
          
        }).catch(error => {
            console.log(error.errors);
        })
    }

    return (
        <form className="container" onSubmit={event =>{
            event.preventDefault();
             register();
        }
           
        }>
        

            <Title title="Signin"/>
            <Input type="text" name="username" id="username" placeholder="Your username"  change={event =>{
                setUsername(event.target.value)
            }}/>

            <Input type="text" name="lastname" id="lastname" placeholder="Your lastname"  change={event =>{
                setLastname(event.target.value)
            }}/>

            <Input type="email" name="email" id="email" placeholder="email"  change={event =>{
                setEmail(event.target.value)
            }}/>

            <Input type="password" name="password" id="password" placeholder="Your password" change={event =>{
                setPassword(event.target.value)
            }}/>

            <Button id="btn" text="Signin" />
            <div className="link">
                <span className="span">Already have an account? </span>
                <Link to="/login">Login</Link>
            </div>

        </form>
            
    );
}

export default Signin;