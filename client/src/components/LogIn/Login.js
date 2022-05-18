import "./LogIn.css";
import  { useState,useContext  } from 'react';
import Postmethod from "../../Postmethod";
import  { Navigate } from 'react-router-dom'
import {UserContext} from '../../UserContext'
import {AdminContext} from '../../AdminContext'


const LogIn = () => {
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const [message , setMessage] = useState(null)
    const [error ,setError] = useState(false);
    const {user,setUser}= useContext(UserContext);
    const {setAdmin}= useContext(AdminContext);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError(false);
        setMessage(null);
        let {err, mess} = await Postmethod('/api/auth/login',{email,password})
        console.log(err);
        console.log(mess);
        setMessage(mess);
        if (err){
            setError(true)
        }
        else{
            //svae cart to user cart in data base 
            //compare my cart to user cart and update and delete local storage
            //save the result in cart state
            let response1 = await fetch('/api/auth/verifyUser');
            console.log(response1);
            if (response1.ok){
                setUser("true");
            }
            else{
                setUser("false");
            }

            let response2 = await fetch('/api/auth/verifyAdmin');
            console.log(response2);
            if (response2.ok){
                setAdmin("true");
            }
            else{
                setAdmin("false");
            }
        }

        }
    if (user == "true" ){
        return <Navigate to='/'  />
    }
    return ( 
    <div>
        <div className="logo text-center">
            <h1 className="login-logo">Logo</h1>
        </div>
        <div className="wrapper">
            <div className="inner-warpper text-center">
                <h2 className="title">Log in</h2>
                <form onSubmit={handleSubmit} id="LoginFormvalidate">

                    <div className="input-group">
                        <input 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="LoginForm-control"  
                        type="email" placeholder="Email" />
                        <span className="lighting"></span>
                    </div>

                    <div className="input-group">
                        <input 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="LoginForm-control" 
                        type="password" placeholder="Password" />
                        <span className="lighting"></span>
                    </div>

                    <button className="login-button"type="submit" id="login">Login</button>
                    {error && <div><span style={{color:"red",fontSize:"15px"}}>{message}</span></div>}
                </form>
            </div>
            
            <div className="signup-wrapper text-center">
                <a className='create-acount' href="/signup">Don't have an accout? <span className="text-primary">Create One</span></a>
            </div>
        </div>
    </div>
    );
}

export default LogIn;