import "./product.css"
import  { useContext  } from 'react';
import {CartContext} from '../../CartContext'
import { UserContext } from "../../UserContext";

const ProductView = ({product}) => {
    const {cart,setCart}= useContext(CartContext);
    const {User,setUser}=useContext(UserContext)

    const addCartItem = () => {
        var max_achievef = false;
        let exists = false;
        cart.map(item => {
            if(item.product_id === product._id)
            {   exists = true;
                if(product.quantity <= item.quantity){
                    max_achievef = true ;
                    return
                }else{
                    item.quantity +=1;
                    
                }
            }
        })
        if(exists === false)
        {
            setCart([...cart , {product_id : product._id , quantity : 1}]);
        }
        else{
            setCart([...cart]);
        }
        if(!max_achievef){
            document.getElementById(`addedHome${product._id}`).className = 'fa fa-check addedAnimation addedHome' ; 
            setTimeout(()=>{document.getElementById(`addedHome${product._id}`).className = 'fa fa-check addedHome' ; },1000) ; 

        }
        }
    

    return ( 
        <div className="product">
            <div className="photo">
                <img className="image" src={product.image} />
            </div>
            <div className="details">
                <div className="title-price">
                    <h3>{product.name}</h3>
                    <p className="dollars">{product.price} LE</p>
                </div>
                {product.quantity>0?
                <button onClick={addCartItem} className='enabled'>Add To Cart</button>:
                <button className='disabled' disabled>Add To Cart</button>}
                <div className="description">
                    <p>{product.description}</p>
                    {product.quantity>0?
                    <div><span style={{color:"green",fontSize:"15px"}}>In Stock</span></div>:
                    <div><span style={{color:"red",fontSize:"15px"}}>Out of Stock</span></div>}
                </div>
            </div> 
            <i id ={`addedProductPage${product._id}`}className="fa fa-check addedInProductPage" aria-hidden="true"></i>
        </div>
    );
}

export default ProductView;