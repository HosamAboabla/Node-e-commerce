import "./HomePageStyle.css";
import  { useContext  } from 'react';
import {CartContext} from '../../CartContext'

const HomePageProduct = ({product }) => {
    const {cart,setCart}= useContext(CartContext);
    const addCartItem = (event) => {
        event.preventDefault();
        let exists = false;
        let max_achievef = false;
        
        cart.map(item => {
            if(item.product_id == product._id)
            {   exists = true;
                if(product.quantity <= item.quantity){
                    max_achievef = true;
                    return
                }else{
                    item.quantity +=1;
                    exists = true;
                }
                
            }
        })
        if(exists == false)
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

    const handleAddNoQuantity = (event) => {
        event.preventDefault();
    }

    return (
        
        <div className='container'>
            <div className="ImageContainer">
                <img src={product.image} />
            </div>
            <h4>{product.name}</h4>
            <div className="ProductCartFooter">
                <div className="ProductCartButtons">
                    <a className="view" href={`/products/${product._id}`}>View</a>
                    {product.quantity>0?
                    <a className="add" onClick={addCartItem}>Add to Cart</a>:
                    <a className="add-no" onClick={handleAddNoQuantity}>Add to Cart</a>}
                </div>
                <h3>{product.price}LE</h3>
            </div>
            <i id ={`addedHome${product._id}`}className="fa fa-check addedHome" aria-hidden="true"></i>
        </div>
    ) ;
}

export default HomePageProduct;
