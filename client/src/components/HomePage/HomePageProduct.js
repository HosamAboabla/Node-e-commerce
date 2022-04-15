import "./HomePageStyle.css";

const HomePageProduct = ({product , cart , setCart}) => {

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
            setCart([...cart , {product_id : product._id , quantity : 1}]);
        }
        else{
            setCart([...cart]);
        }
    }
    return (
        <div className='container'>
            <img src={product.image} />
            <h4>{product.name}</h4>
            <hr></hr>
            <div>
                <a href={`/products/${product._id}`}>View</a>
                <a onClick={addCartItem}>Add to Cart</a>
                <h3>{product.price}$</h3>
            </div>
        </div>
    ) ;
}

export default HomePageProduct;
