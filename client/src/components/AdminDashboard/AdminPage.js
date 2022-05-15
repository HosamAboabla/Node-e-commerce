const AdminPage = () => {
    return ( 
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
    );
}

export default AdminPage;