import useFetch from "../../useFetch";
import Loading from "../Loading/Loading";

const ProductInCart = ({product_id , quantity , totalPrice , setTotalPrice}) => {

    const link = `/api/products/list/${product_id}`;
    const {data:product , error , isPending} = useFetch(link);
    
    return ( 
    <div className="product2">
        {error && <div> {error} </div>} 
        {isPending && <Loading />}
        {product && <>
        
                <img src={product.image}/>
                <div className="product2-info">
                    <h3 className="product2-name">{product.name}</h3>
                    <h4 className="product2-price">{product.price}</h4>
                    <span className="product2-quantity">Quantity: </span>{quantity}
                    <p className="product2-remove">
                        <i className="fa fa-trash" aria-hidden="true"></i>
                        <span className="remove">Remove</span>
                    </p>
                </div>
            </>
        }
    </div>
);
};

export default ProductInCart;