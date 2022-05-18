import { useContext, useEffect } from "react";
import { OrderContext,TotalpriceContext,TotalquantityContext } from "./OrderContext";
import useFetch from "../../useFetch";

const TableRow = ({item}) => {
    //we have here product_id , quantity
    const{order,setOrder} = useContext(OrderContext);
    const{totalprice,setTotalprice} = useContext(TotalpriceContext);
    const{totalquantity,setTotalquantity} = useContext(TotalquantityContext);

    const link = `/api/products/list/${item.product_id}`;
    const {data:product , error , isPending} = useFetch(link);
    //setOrder([...order,new_item]);
    useEffect(()=>{
        if (product){
            setOrder([...order,{product_id:item.product_id , quantity:item.quantity , productPrice:product.price}])
            setTotalprice(totalprice+product.price*item.quantity);
            setTotalquantity(totalquantity+item.quantity);
        }

    },[product])

    return ( 
    <tr>
        {error && <div> {error} </div>} 
        {isPending && <div> </div>}
        {product &&
            <>
                <td><img src={product.image} height="100"></img></td>
                <td>{product.name}</td>
                <td>{product.price}$</td>
                <td>{item.quantity}</td>
                <td>{item.quantity*product.price}$</td>
            </>
            }
    </tr>
    );
}
 
export default TableRow;