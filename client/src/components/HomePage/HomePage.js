import HomePageProduct from "./HomePageProduct";
import useFetch from "../../useFetch";

import "./HomePageStyle.css";

const HomePage = () => {
    const link = 'http://localhost:5000/api/products/list/'  ;
    const {data : products , error , isPending} = useFetch(link);
    console.log("products" , products);
    return (
        <div>
            {error && <div> {error} </div>} 
            {isPending && <div> loading... </div>}
            {products && products.map(product => <HomePageProduct product={product}/>)}
        </div>  
    )
}


export default HomePage