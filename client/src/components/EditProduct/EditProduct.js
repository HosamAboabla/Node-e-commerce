import React, { useContext } from 'react'
import { useParams } from "react-router-dom";
import useFetch from "../../useFetch";
import Loading from "../Loading/Loading";
import EditProductForm from './EditProductForm';
import  { Navigate } from 'react-router-dom';
import { AdminContext } from '../../AdminContext';
import AdminNavBar from '../NavBar/AdminNavBar';
import AdminDashboard from '../AdminDashboard/AdminDashboard';


const EditProduct = () => {
    const {id} = useParams();
    const link = `/api/products/list/${id}`;
    const {data:product , error , isPending} = useFetch(link);
    const{admin} = useContext(AdminContext);

    if (admin === "false"){
        return <Navigate to='/'/>
    }
    return ( 
        <div>
            <AdminNavBar/>
            <AdminDashboard/>
            <div>
                {error && <div> {error} </div>} 
                {isPending && <Loading/>}
                {product && <EditProductForm product={product}/>}
            </div>
        </div>    
    )
}

export default EditProduct;