import HomePageProduct from "./HomePageProduct";
import useFetch from "../../useFetch";
import Loading from "../Loading/Loading";
import NavBar from "../NavBar/NavBar";
import  { Navigate } from 'react-router-dom';


import "./HomePageStyle.css";
import { useContext } from "react";
import { AdminContext } from "../../AdminContext";

const HomePage = () => {
    const link = '/api/products/list/'  ;
    const {data : products , error , isPending} = useFetch(link);
    const {admin} = useContext(AdminContext)

    if (admin === "true" ){
        return <Navigate to='/admin'  />
    }
    return (
    <div>
    <NavBar/>
    <div className="all">    
        <div className="HomeGrid">
            {error && <div> {error} </div>} 
            {isPending && <Loading/>}
            {products && products.map(product => <HomePageProduct key={product._id} product={product}/>)}
        </div>  
    </div>
    </div>
    )
}


export default HomePage