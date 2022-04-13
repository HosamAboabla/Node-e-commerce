const ProductInCart = () => {
    return ( 
    <div className="product2">
        <img src="https://petapixel.com/assets/uploads/2017/03/product1.jpeg"/>
        <div className="product2-info">
            <h3 className="product2-name">New Bag</h3>
            <h4 className="product2-price">2,000</h4>
            <span className="product2-quantity">Quantity: </span>
            <input  type="number" id="quantity" name="quantity" min="1" max="100" />
            <p className="product2-remove">
                <i className="fa fa-trash" aria-hidden="true"></i>
                <span className="remove">Remove</span>
            </p>
        </div>
    </div>
);
};

export default ProductInCart;