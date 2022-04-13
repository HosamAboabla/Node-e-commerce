import "./product.css"

const ProductView = ({product}) => {
    return ( 
        <div className="product">
            <div className="photo">
                <img src={product.image} />
            </div>
            <div className="details">
                <div className="title-price">
                    <h3>{product.name}</h3>
                    <p className="dollars">{product.price} LE</p>
                </div>
                <button>Add To Cart</button>
                <div className="description">
                    <p>{product.description}</p>
                </div>
            </div> 
        </div>
    );
}

export default ProductView;