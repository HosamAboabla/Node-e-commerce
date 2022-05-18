import React from 'react'
import './EditableProductStyle.css'
import ProductsTable from './ProductsTable';
import useFetch from "../../useFetch";
import Loading from "../Loading/Loading";
import AdminNavBar from '../NavBar/AdminNavBar';
import AdminDashboard from '../AdminDashboard/AdminDashboard';


const EditableProducts = () => {
    const link = '/api/products/list/'  ;
    const {data : products , error , isPending} = useFetch(link);

    return (
    <div>
        <AdminNavBar/>
        <AdminDashboard/>
        <div className='product-display'>
            {error && <div> {error} </div>} 
            {isPending && <Loading/>}
            {products && <ProductsTable products={products}/>}
        </div> 
    </div>
    )
}

export default EditableProducts