import { useState } from "react";
import useFetch from "../../useFetch";
import Loading from "../Loading/Loading";

const ProductInCart = ({product_id , quantity , totalPrice , setTotalPrice , cart , setCart}) => {

    const link = `/api/products/list/${product_id}`;
    const {data:product , error , isPending} = useFetch(link);

    const [quan,setQuan] = useState(quantity);
    const removeCartItem = () => {
        setCart(cart.filter(item => item.product_id !== product_id));
    }

    const plusOne = () => {
        cart.map(item => {
            if(item.product_id == product_id)
            {
                item.quantity +=1;
                setCart([...cart]);
                setQuan(item.quantity);
            }
        })
    }
    const minusOne = () => {
        cart.map(item => {
            if(item.product_id == product_id)
            {
                item.quantity -=1   ;
                if (item.quantity == 0) 
                {   
                    setCart(cart.filter(item => item.product_id !== product_id));
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
                    <span className="product2-quantity">{quan }</span>
                    <button onClick={plusOne} className="plus quan">+</button>
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