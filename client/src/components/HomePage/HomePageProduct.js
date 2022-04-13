import "./HomePageStyle.css";

const HomePageProduct = ({product}) => {
    return (
        <div className='container'>
            <img src={product.image} />
            <h4>{product.name}</h4>
            <hr></hr>
            <a href={`/products/${product._id}`}>View</a>
            <a>Add to Cart</a>
            <h3>{product.price}$</h3>
        </div>
    ) ;
}

export default HomePageProduct;