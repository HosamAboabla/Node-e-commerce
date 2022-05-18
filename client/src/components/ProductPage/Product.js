import { useParams } from "react-router-dom";
import useFetch from "../../useFetch";
import Loading from "../Loading/Loading";
import ProductView from "./ProductView";
import NavBar from "../NavBar/NavBar";
import  { Navigate } from 'react-router-dom';
import { AdminContext } from "../../AdminContext";
import { useContext } from "react";

const Product = () => {
    const {id} = useParams();
    const link = `/api/products/list/${id}`;
    const {data:product , error , isPending} = useFetch(link);
    const{admin} = useContext(AdminContext);
    if (admin == "true" ){
        return <Navigate to='/admin'  />
    }
    return ( 
    <div>
        <NavBar/>
        <div className="productpage">
            {error && <div> {error} </div>} 
            {isPending && <Loading/>}
            {product && < ProductView product={product} /> }
        </div>
    </div>
        );
}

export default Product;