import './Cart.css'
import ProductInCart from "./ProductInCart";
import  {useContext,useState} from 'react'
import {CartContext} from '../../CartContext'
import {TotalpriceContext} from './TotalpriceContext'
import NavBar from '../NavBar/NavBar';
import  { Navigate } from 'react-router-dom';
import { AdminContext } from '../../AdminContext';
import {UserContext} from '../../UserContext'

const Cart = () => {
    const {cart}= useContext(CartContext);
    let totalQuantity = 0;
    const [totalprice ,setTotalprice] = useState(0); 
    const {admin} = useContext(AdminContext);
    const{user} = useContext(UserContext);
    //console.log('stored cart' , cart);
    if (admin == "true" ){
        return <Navigate to='/admin'  />
    }
    return (
    <div>
        <NavBar/>
        <div className="cartAll">
        <div className="container2">
            <div className="cart">
                <div className="productsincart">
                    {
                        cart.map( item =>  (
                            totalQuantity += item.quantity,  
                            <TotalpriceContext.Provider value={{totalprice,setTotalprice}}>                    
                                <ProductInCart key={item.product_id} product_id = {item.product_id} quantity = {item.quantity} />
                            </TotalpriceContext.Provider>
                        ))
                    }
                </div>
                <div className="cart-total">
                    <p>
                        <span >Total Price</span>
                        <span className="totalProduct">{totalprice} LE</span>
                    </p>
                    <p>
                        <span>Number of Items</span>
                        <span>{totalQuantity}</span>
                    </p>
                    <p>
                    </p>
                    {user=="true"?
                    <a href="/checkout">Proceed to Checkout</a>:
                    <a href="/signup">Proceed to Checkout</a>}
                    
                </div>
            </div>
        </div>
    </div>
    </div>
);
}
export default Cart;