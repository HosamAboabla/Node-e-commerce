import React from 'react'
import { useParams } from "react-router-dom";
import useFetch from "../../useFetch";
import Loading from "../Loading/Loading";
import EditProductForm from './EditProductForm';

const EditProduct = () => {
    const {id} = useParams();
    const link = `/api/products/list/${id}`;
    const {data:product , error , isPending} = useFetch(link);

    
    return ( 
        <div>
            {error && <div> {error} </div>} 
            {isPending && <Loading/>}
            {product && <EditProductForm product={product}/>}
        </div>
    )
}

export default EditProduct;