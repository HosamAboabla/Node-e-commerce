import './Cart.css'
import ProductInCart from "./ProductInCart";
import React , {useState , useEffect } from 'react'

const Cart = ({cart , setCart}) => {
    let totalQuantity = 0;
    const [totalPrice , setTotalPrice] = useState(0);
    console.log('stored cart' , cart);
    
    return ( 
    <div className="container2">
        <div className="cart">
            <div className="productsincart">
                {
                    cart.map( item =>  (
                        totalQuantity += item.quantity,                  
                        <ProductInCart key={item.product_id} product_id = {item.product_id} quantity = {item.quantity} totalPrice={totalPrice} setTotalPrice={setTotalPrice} />
                    ))
                }
            </div>
            <div className="cart-total">
                <p>
                    <span>Total Price</span>
                    <span>{totalPrice}</span>
                </p>
                <p>
                    <span>Number of Items</span>
                    <span>{totalQuantity}</span>
                </p>
                <p>
                </p>
                <a href="#">Proceed to Checkout</a>
            </div>
        </div>
    </div>
);
}
export default Cart;