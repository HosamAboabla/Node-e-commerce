import React from 'react'
import './EditableProductStyle.css'
import ProductsTable from './ProductsTable';
import useFetch from "../../useFetch";
import Loading from "../Loading/Loading";


const EditableProducts = () => {
    const link = '/api/products/list/'  ;
    const {data : products , error , isPending} = useFetch(link);

    return (
        <div class='product-display'>
            {error && <div> {error} </div>} 
            {isPending && <Loading/>}
            {products && <ProductsTable products={products}/>}
        </div>
    )
}

export default EditableProducts