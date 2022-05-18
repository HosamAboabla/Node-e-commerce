import {  useEffect, useState } from "react";
import useFetch from "../../useFetch";

const TableRow = ({item}) => {
    //we have here product_id , quantity
    const[product,setProduct] = useState(null);
    const link = `/api/products/list/${item.product_id}`;
    const {data:returned_product , error , isPending} = useFetch(link);
    //setOrder([...order,new_item]);
    useEffect(()=>{
        if (returned_product){
            setProduct(returned_product)
        }

    },[returned_product])
    console.log(product)


    return ( 
    <tr>
        {error && <div> {error} </div>} 
        {isPending && <div> </div>}
        {product &&
            <>
                <td><img src={product.image} height="100"></img></td>
                <td>{product.name}</td>
                <td>{item.productPrice}$</td>
                <td>{item.quantity}</td>
                <td>{item.quantity*item.productPrice}$</td>
            </>
            }
    </tr>
    );
}
 
export default TableRow;