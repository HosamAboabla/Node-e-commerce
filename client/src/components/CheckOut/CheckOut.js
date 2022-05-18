import { useContext, useState  } from "react";
import ProductsTable from "./ProductsTable";
import { CartContext } from "../../CartContext";
import { OrderContext,TotalpriceContext,TotalquantityContext } from "./OrderContext";
import Postmethod from "../../Postmethod";
import NavBar from "../NavBar/NavBar";
import Putmethod from "../../Putmethod";
const CheckOut = () => {
    //1-get cart from cart state
    //2-get products info from data base after getting data from cart 
    //3-save order_data_base array (id - quantity - price)
    //4-save order_front_end array (image - name - price - quantity(from cart) - total(quantity*price))
    //5-render table of order_front_end array and address input
    //6- after user enters data send post request with order_data_base array and address
    const [street,setStreet] = useState('');
    const [city,setCity] = useState('');
    const [country,setCountry] = useState('Egypt');

    const [order,setOrder] = useState([]);
    const [totalprice,setTotalprice] = useState(0);
    const [totalquantity,setTotalquantity] = useState(0);

    const [message , setMessage] = useState(null);
    const [error ,setError] = useState(false);
    const [ordered ,setOrdered] = useState(false);

    const{cart,setCart} = useContext(CartContext);

    //const cartMemo = useMemo(() => cart, [cart]);

    console.log(cart)

    const handleSubmit = async(event)=>{
        event.preventDefault();
        const address = {street:street, city:city  , country:country }
        const link = '/api/orders/create';
        let {err, mess} = await Postmethod(link,{products:order,total:totalprice,address:address});
        setMessage(mess);
        if (err){
            setError(true)
        }
        else{
            //minus quantity from product
            //loop in cart 
            //for each product call api to minus the quantity
            cart.map(async (item)=>{
                const link = `http://localhost:5000/api/products/dec/${item.product_id}` 
                const {err , mess } = await Putmethod(link,{quantity : item.quantity});
            })
            setCart([]);
            setTotalprice(0);
            setTotalquantity(0);
            setOrdered(true);
        }

    }

    return (
        <div>
            <NavBar/>
            <div className="checkout-all">
                <TotalpriceContext.Provider value={{totalprice,setTotalprice}}>
                <TotalquantityContext.Provider value={{totalquantity,setTotalquantity}}>
                <OrderContext.Provider value={{order,setOrder}}>
                    <ProductsTable cart={cart}/>
                </OrderContext.Provider>
                </TotalquantityContext.Provider>
                </TotalpriceContext.Provider>
                <div className="admin-product-form-container">
                    <form onSubmit={handleSubmit}>
                        <h3>Address of Delivery</h3>
                        <div>
                            <label>Street</label>
                            <textarea 
                            placeholder='Street' 
                            className="box"
                            rows='6'
                            value={street}
                            onChange={(e) => setStreet(e.target.value)}
                            required>
                            </textarea>
                        </div>
                        <div>
                            <label>City</label>
                            <input
                            type="text" 
                            placeholder='City' 
                            className="box" 
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            required/>
                        </div>
                        
                        <div>
                            <label>Country</label>
                            <input 
                            type="text" 
                            placeholder='Country' 
                            className="box"
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                            required/>
                        </div>
                        {error && <div><span style={{color:"red",fontSize:"15px"}}>{message}</span></div>}
                        {ordered && <div><span style={{color:"green",fontSize:"15px"}}>Order has been submitted</span></div>}
                        <input type="submit" class="btn"/>
                    </form>
                </div>
            </div>
        </div>
        
    );
}

export default CheckOut;