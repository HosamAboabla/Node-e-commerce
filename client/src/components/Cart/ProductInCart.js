import { useEffect, useState } from "react";
import useFetch from "../../useFetch";
import Loading from "../Loading/Loading";
import  {useContext} from 'react'
import {CartContext} from '../../CartContext'
import {TotalpriceContext} from './TotalpriceContext'

    
const ProductInCart = ({product_id , quantity }) => {
    const {cart,setCart}= useContext(CartContext);
    const{totalprice,setTotalprice} = useContext(TotalpriceContext)

    const link = `/api/products/list/${product_id}`;
    const {data:product , error , isPending} = useFetch(link);
    console.log(product)

    const [quan,setQuan] = useState(quantity);
    useEffect(()=>{
        if (product){
            setTotalprice((totalprice)+product.price*quan);
            if (product.quantity < quantity ){
                cart.map(item => {
                    if(item.product_id == product_id)
                    {   
                        item.quantity = product.quantity;
                        setCart([...cart]);
                        setQuan(item.quantity);
                    }
                })
            }
        }
        
    },[product])

    const removeCartItem = () => {
        setCart(cart.filter(item => item.product_id !== product_id));
        setTotalprice(0);
    }

    const plusOne = () => {
        
        cart.map(item => {
            if(item.product_id == product_id)
            {   
                if (item.quantity >= product.quantity) 
                {   
                    return
                }
                else{
                item.quantity +=1;
                setCart([...cart]);
                setQuan(item.quantity);
                setTotalprice(totalprice+product.price);
            }
            }
        })
        
    }
        
    
    const minusOne = () => {
        cart.map(item => {
            if(item.product_id == product_id)
            {   
                if (item.quantity == 1) 
                {   
                    return
                }else{
                    item.quantity -=1 ;
                    setCart([...cart]);
                    setTotalprice(totalprice-product.price);
                }
                setQuan(item.quantity);
            }
        })
        
        
    }


    
    return ( 
    
        <div className="product2">
        {error && <div> {error} </div>} 
        {isPending && <Loading />}
        {product && <>
                <div className="imgContainerCart">
                    <img src={product.image}/>
                </div>
                <div className="product2-info">
                    <h3 className="product2-name">{product.name}</h3>
                    <h4 className="product2-price">{product.price} LE</h4>
                    
                    <button onClick={minusOne} className="minus quan">-</button>
                    <span className="product2-quantity">{quan}</span>
                    <button onClick={plusOne} className="plus quan">+</button>
                    <span className="totalProductInCart">{product.price*quan} LE</span>
                    <p onClick={removeCartItem} className="product2-remove">
                        <i className="fa fa-trash" aria-hidden="true"></i>
                        <span className="remove">Remove</span>
                    </p>
                    

                </div>
            </>
        }
    </div>
);
};

export default ProductInCart;