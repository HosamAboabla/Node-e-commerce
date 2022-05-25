import './orders.css'
import OrdersTable from "./OrdersTable";
import { Navigate } from 'react-router-dom';
import { useEffect, useState,useContext } from "react";
import useFetch from "../../useFetch";
import NavBar from "../NavBar/NavBar";
import { AdminContext } from '../../AdminContext';

const Orders = () => {
    //fetch request from the data base for all apis
    //put orders in a table (order_id , status , view button )


    const [orders,setOrders] = useState([])
    const link = `/api/orders/user`;
    const {data:returned_orders , error , isPending} = useFetch(link);
    useEffect(()=>{
        if(returned_orders){
            setOrders(returned_orders)
            
        }
    },[returned_orders])
    console.log(orders)

    const {admin} = useContext(AdminContext);

    if (admin === "true" ){
        return <Navigate to='/admin'  />
    }
    return ( 
        <div>
            <NavBar/>
            <div className='checkout-all'>
                {error && <div> {error} </div>} 
                {isPending && <></>}
                {orders && <OrdersTable orders={orders}/>}
            </div>

        </div>
    );
}

export default Orders;