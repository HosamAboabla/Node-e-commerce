import TableRow from "./TableRow";
import { TotalpriceContext,TotalquantityContext } from "./OrderContext";
import { useContext,memo } from "react";

const ProductsTable = ({cart}) => {
    const{totalprice} = useContext(TotalpriceContext);
    const{totalquantity} = useContext(TotalquantityContext);
    return ( 
        <div className="product-display">
            <table class='product-display-table' >
            <thead>
                <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                </tr> 
            </thead>
            {cart.map(item =><TableRow item={item}/>)}
            <tfoot>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>{totalquantity}</td>
                    <td>{totalprice}$</td>
                </tr> 
            </tfoot>
        </table>
        </div>
    );
}

export default memo(ProductsTable);