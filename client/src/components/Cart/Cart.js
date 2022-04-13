import './Cart.css'
import ProductInCart from "./ProductInCart";
const Cart = () => {
    return ( 
    <div className="container2">
        <div className="cart">
            <div className="productsincart">
                <ProductInCart/>
                <ProductInCart/>
            </div>
            <div className="cart-total">
                <p>
                    <span>Total Price</span>
                    <span>₹ 3,000</span>
                </p>
                <p>
                    <span>Number of Items</span>
                    <span>2</span>
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