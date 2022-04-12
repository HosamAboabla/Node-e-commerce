import { useParams } from "react-router-dom";
import useFetch from "../../useFetch";
import ProductView from "./ProductView";

const Product = () => {
    // const {id} = useParams();
    const id = '6253abce00dd1cd9452d3932';
    const link = `http://localhost:5000/api/products/list/${id}`;
    const {data:product , error , isPending} = useFetch(link);
    console.log('product' , product);
    return ( 
        <div>
            {error && <div> {error} </div>} 
            {isPending && <div> loading... </div>}
            {product && < ProductView product={product}/> }
        </div>);
}

export default Product;