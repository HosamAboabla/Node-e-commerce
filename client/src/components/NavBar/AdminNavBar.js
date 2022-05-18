import './NavBarStyle.css'
import {UserContext} from '../../UserContext'
import { useContext } from 'react';
import { AdminContext } from '../../AdminContext';

const AdminNavBar = () => {
    const {setUser}= useContext(UserContext);
    const {setAdmin}= useContext(AdminContext);
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
        <div className='cartIcon'>
            <a onClick={logout} className='nav-text' href='#'>Log out</a>
        </div>
    </div>
    
    )
}

export default AdminNavBar