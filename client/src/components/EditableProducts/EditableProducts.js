import React,{useContext} from 'react'
import { Navigate } from 'react-router-dom';
import './EditableProductStyle.css'
import ProductsTable from './ProductsTable';
import useFetch from "../../useFetch";
import Loading from "../Loading/Loading";
import AdminNavBar from '../NavBar/AdminNavBar';
import AdminDashboard from '../AdminDashboard/AdminDashboard';
import { AdminContext } from '../../AdminContext';



const EditableProducts = () => {
    const link = '/api/products/list/'  ;
    const {data : products , error , isPending} = useFetch(link);
    const {admin} = useContext(AdminContext);

    if (admin === "false"){
        return <Navigate to='/'/>
    }

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