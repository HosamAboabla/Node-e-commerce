import './SignUp.css'
import  { useState,useContext  } from 'react';
import Postmethod from '../../Postmethod';
import  { Navigate } from 'react-router-dom'
import {UserContext} from '../../UserContext'
import {CartContext} from '../../CartContext'
import Putmethod from '../../Putmethod';


const SignUp = () => {
    const [userName ,setUsername] = useState("");
    const [firstName , setFirstname] = useState('');
    const [lastName , setLastname] = useState('');
    const [email , setEmail] = useState("")
    const [phone ,setPhone] = useState("");
    const [password ,setPassword] = useState("");
    
    const [confirm ,setConfirm] = useState("");
    const [equal ,setEqual] = useState(true);

    const [message , setMessage] = useState(null);
    const [error ,setError] = useState(false);
    
    const {user,setUser}= useContext(UserContext);
    const {cart,setCart}= useContext(CartContext);


    const handleSubmit = async (event) => {
        event.preventDefault();
        if (password !== confirm){
            setEqual(false)
            return
        }
        else{
            setEqual(true)
        }
        setError(false);
        setMessage(null);
        let {err, mess} = await Postmethod('/api/auth/register',{userName,email,firstName,lastName,phone,password})
        setMessage(mess);
        if (err){
            setError(true);
        }
        else{
            let response1 = await fetch('/api/auth/verifyUser');
            console.log(response1);
            if (response1.ok){
                setUser("true");
            }
            else{
                setUser("false");
            }           
            //put all cart items in the user cart in data base and delet local storage
            let{err,mess} = await Putmethod('/api/carts/update',{cartItems:cart})
            console.log(err);
            console.log(mess);
            
        }        

        }
    if (user === "true"){
        return <Navigate to='/'  />
    }
    return ( 
    <div className='signup-body'>    
        <div className="signup-container">
            <div className="signup-title">Registration</div>
            <div className="signup-content">
            <form className='signup-form' onSubmit={handleSubmit}>
                <div className="user-details">
                <div className="input-box">
                    <span className="signup-details">UserName</span>
                    <input 
                    onChange={(e) => setUsername(e.target.value)}
                    type="text" 
                    placeholder="Enter your first name" 
                    value={userName}
                    required />
                </div>
                <div className="input-box">
                    <span className="signup-details">first Name</span>
                    <input 
                    onChange={(e) => setFirstname(e.target.value)}
                    type="text" 
                    placeholder="Enter your first name" 
                    value={firstName}
                    required />
                </div>
                <div className="input-box">
                    <span className="signup-details">Last Name</span>
                    <input 
                    onChange={(e) => setLastname(e.target.value)}
                    type="text" 
                    placeholder="Enter your Last name"
                    value={lastName}
                    required />
                </div>
                <div className="input-box">
                    <span className="signup-details">Email</span>
                    <input
                    onChange={(e) => setEmail(e.target.value)}
                    type="email" 
                    placeholder="Enter your email" 
                    value={email}
                    required />
                </div>
                <div className="input-box">
                    <span className="signup-details">Phone Number</span>
                    <input
                    onChange={(e) => setPhone(e.target.value)}
                    type="tel" 
                    placeholder="Enter your number" 
                    value={phone}
                    required />
                </div>
                <div className="input-box">
                    <span className="signup-details">Password</span>
                    <input                    
                    onChange={(e) =>setPassword(e.target.value)}
                    type="password" 
                    placeholder="Enter your password" 
                    value={password}
                    required />
                </div>
                <div className="input-box">
                    <span className="signup-details">Confirm Password</span>
                    <input
                    onChange={(e) => setConfirm(e.target.value)}
                    type="password" 
                    placeholder="Confirm your password" 
                    value={confirm}
                    minLength='8'
                    required />
                </div>
                </div>
                <div>
                    {!equal?
                    <span style={{color:"red",fontSize:"12px"}} >passwords don't match</span>
                    :<></>}
                    {error &&<span style={{color:"red",fontSize:"12px"}} >{message} </span>}
                </div>
                <div className="button">
                <input type="submit" value="Register"/>
                </div>
            </form>
            </div>
        </div>
    </div>
    );
}
export default SignUp;