import "./HomePageStyle.css";

const HomePageProduct = ({product}) => {
    return (
        <div className='container'>
            <img src={product.image} />
            <h4>{product.name}</h4>
            <hr></hr>
            <div>
                <a href={`http://localhost:3000/products/${product.id}`}>View</a>
                <a>Add to Cart</a>
                <h3>{product.price}$</h3>
            </div>
            
        </div>
    ) ;
}

export default HomePageProduct;