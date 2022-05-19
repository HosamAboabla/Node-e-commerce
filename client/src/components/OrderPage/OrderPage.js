import './orderPage.css'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../useFetch";
import NavBar from "../NavBar/NavBar";
import OrderTable from "./OrderTable";
import Loading from '../Loading/Loading';

const OrderPage = () => {
    const {id} = useParams();
    const link = `/api/orders/user/${id}`;
    const[order,setOrder] = useState(null);
    const[date,setDate] = useState(null);
    const {data:returned_order , error , isPending} = useFetch(link);
    useEffect(()=>{
        if(returned_order){
            setOrder(returned_order);
            const date1 = new Date(returned_order.createdAt);
            setDate(date1.toLocaleDateString())
        }
    },[returned_order])
    console.log(order);

    return (
    <div>
        <NavBar/>   
        <div className='checkout-all'>
            {error && <div> {error} </div>} 
            {isPending && <Loading/>}
            {order && 
                <table className="orderpagetable">
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>{order._id}</th>
                    </tr>
                </thead>
                <tr>
                    <td>Products</td>
                    <td><OrderTable products={order.products} /></td>
                </tr>  
                <tr>
                    <td>Total price</td>
                    <td>{order.total}$</td>
                </tr>  
                <tr>
                    <td>Address</td>
                    <td>{`${order.address.street}, ${order.address.city} , ${order.address.country}`}</td>
                </tr>  
                <tr>
                    <td>Status</td>
                    <td>{order.status}</td>
                </tr>  
                <tr>
                    <td>Date</td>
                    <td>{date}</td>
                    {/* <td>{order.createdAt.toLocaleString()}</td> */}
                </tr>      
            </table>
            }
        </div>
    </div>
        
    );
}

export default OrderPage;