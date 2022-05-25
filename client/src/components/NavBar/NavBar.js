import './NavBarStyle.css'
import {UserContext} from '../../UserContext'
import { useContext } from 'react';
import {CartContext} from '../../CartContext'
import { AdminContext } from '../../AdminContext';



const NavBar = () => {
              
  const {user,setUser}= useContext(UserContext);
  const {cart}= useContext(CartContext);
  const {setAdmin}= useContext(AdminContext);
  
  let totalQuantity = 0;
  if (cart){
    cart.map( item =>  (totalQuantity += item.quantity) ) 
  }  
  const logout=async (event)=>{
    event.preventDefault();
    //request to server to delete token
    let res = await fetch('/api/auth/logout')
    if (res.ok){
      setAdmin("false");
      setUser("false");
    } 
  }

  return (
    <div className="topnav">
        <a  className="name" href="/">E-comm</a>
        <div  className='Form'>
            <input  type="text" placeholder="Search.." name="search" />
            <button  ><i className="fa fa-search"></i></button>
        </div>
        <div className='cartIcon'>
          {(user === "true")?
          <>
          <a onClick={logout} className='nav-text' href='#'>Log out</a>
          <a href='/orders'className='nav-text'>Orders</a>
          </>
          :<a className='nav-text' href='/login'>Log In</a>}
          
          {totalQuantity?<span>{totalQuantity}</span>:<></>}
          <a href="/cart"><i className="fa fa-shopping-cart"></i></a>
        </div>
    </div>
    
  )
}

export default NavBar