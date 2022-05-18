import TableRow from "./TableRow";

const OrderTable = ({products}) => {
    console.log(products);
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
            {products.map(item => <TableRow item={item}/> )}
        </table>
        </div>
    );
}

export default OrderTable;