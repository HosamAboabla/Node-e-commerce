import  { Navigate } from 'react-router-dom'
import { AdminContext } from '../../AdminContext'
import { useContext } from 'react';
import AdminNavBar from '../NavBar/AdminNavBar';

const AdminPage = () => {
    const {admin} = useContext(AdminContext);

    if (admin == "false"){
        return <Navigate to='/'/>
    }
    return (
    <div> 
        <AdminNavBar/>
        <div className="admin-page-style">
            <a
            className="admin-page-button"
            href="/admin/addproduct"
            >
                <i class='fa fa-plus'> </i><span className='admin-button-text'> Add Product</span>
            </a>
            <a
            className="admin-page-button"
            href="/admin/editproducts"
            >
                <i class='fa fa-edit'></i> <span className='admin-button-text'>Edit Products</span>
            </a>
        </div>
    </div>
    );
}

export default AdminPage;