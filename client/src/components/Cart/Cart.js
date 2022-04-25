import './Cart.css'
import ProductInCart from "./ProductInCart";
import React , {useState , useEffect } from 'react'

const Cart = ({cart , setCart}) => {
    let totalQuantity = 0;
    let totalPrice = 0 ; 
    console.log('stored cart' , cart);
    
    return ( 
        <div className="cartAll">
        <div className="container2">
            <div className="cart">
                <div className="productsincart">
                    {
                        cart.map( item =>  (
                            totalQuantity += item.quantity, totalPrice+= (item.quantity) * (item.price) ,                  
                            <ProductInCart key={item.product_id} product_id = {item.product_id} quantity = {item.quantity} price={item.price}  cart={cart} setCart={setCart} />
                        ))
                    }
                </div>
                <div className="cart-total">
                    <p>
                        <span >Total Price</span>
                        <span className="totalProduct">{totalPrice} LE</span>
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
    </div>    
);
}
export default Cart;