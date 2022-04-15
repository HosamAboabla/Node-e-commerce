import HomePageProduct from "./HomePageProduct";
import useFetch from "../../useFetch";
import Loading from "../Loading/Loading";

import "./HomePageStyle.css";

const HomePage = ({cart , setCart }) => {
    const link = '/api/products/list/'  ;
    const {data : products , error , isPending} = useFetch(link);
    console.log("products" , products);
    return (
        <div>
            {error && <div> {error} </div>} 
            {isPending && <Loading/>}
            {products && products.map(product => <HomePageProduct key={product._id} product={product} cart = {cart} setCart={setCart}/>)}
        </div>  
    )
}


export default HomePage