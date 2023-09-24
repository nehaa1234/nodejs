import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
import logo from './images/vegSeekerwhite.png'
import './style1.css';
import './style.css';
import { useEmail } from './CartContext';


function Login() {

    const history=useNavigate();

    const { email, setEmail } = useEmail(); 
    const [password,setPassword]=useState('')
    const emai=email
    async function submit(e){
        e.preventDefault();

        try{
            
            await axios.post("http://localhost:8000/",{
                email,password
            })
            .then(res=>{
                if(res.data=="exist"){
                    setEmail(email);
                    history("/home",{state:{id:email}})
                    
                }
                else if(res.data=="notexist"){
                    alert("User have not sign up or wrong Password")
                }
            })
            .catch(e=>{
                alert("wrong details")
                console.log(e);
            })

        }
        catch(e){
            console.log(e);

        }

    }


    return (
        <>
           <section id="header">
        <a to="#"><img src={logo} class="img-circle" alt="logo" height="75px"/></a>
        
        
            <large><strong> Welcome to VegSeekers </strong></large> 
            <div>
            </div>
         
       
    </section>
        <div id="login-form-wrap">

            <h1>Login</h1>

            <form action="POST">
                <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email"  />
                <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password"  />
                <input type="submit" onClick={submit} />

            </form>

            <br />
            <p>OR</p>
            <br />

            <Link to="/signup">Signup Page</Link>

        </div>
        </>
    )
}
 
export default Login
 