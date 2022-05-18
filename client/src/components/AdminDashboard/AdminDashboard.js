import './admindashboard.css'



const AdminDashboard = () => {
    return ( 
    <div className="admin-dashboard">
        <nav className="admin-nav">
            <div className="admin-list">
                    <a 
                        className="admin-list-button" 
                        href='/admin/addproduct'>
                            <i class='fa fa-plus'> </i><span className='admin-list-text'>Add Product</span>
                    </a>
                    <a  
                        className="admin-list-button" 
                        href='/admin/editproducts'>
                            <i class='fa fa-edit'></i> <span className='admin-list-text'>Edit Products</span>
                    </a>
            </div>
        </nav>
    </div>
    );
}

export default AdminDashboard;