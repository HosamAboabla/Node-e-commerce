import "./product.css"

const ProductView = ({product , cart , setCart}) => {

    const addCartItem = () => {
        let exists = false;
        cart.map(item => {
            if(item.product_id == product._id)
            {
                item.quantity +=1;
                exists = true;
            }
        })
        if(exists == false)
        {
            setCart([...cart , {product_id : product._id , quantity : 1, price : product.price}]);
        }
        else{
            setCart([...cart]);
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
                <button onClick={addCartItem}>Add To Cart</button>
                <div className="description">
                    <p>{product.description}</p>
                </div>
            </div> 
        </div>
    );
}

export default ProductView;