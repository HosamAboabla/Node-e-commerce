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
            setCart([...cart , {product_id : product._id , quantity : 1,price : product.price}]);
        }
        else{
            setCart([...cart]);
        }
        document.getElementById(`addedHome${product._id}`).className = 'fa fa-check addedAnimation addedHome' ; 
        setTimeout(()=>{document.getElementById(`addedHome${product._id}`).className = 'fa fa-check addedHome' ; },1000)
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
                    <a className="add" onClick={addCartItem}>Add to Cart</a>
                </div>
                <h3>{product.price}LE</h3>
            </div>
            <i id ={`addedHome${product._id}`}className="fa fa-check addedHome" aria-hidden="true"></i>
        </div>
    ) ;
}

export default HomePageProduct;
