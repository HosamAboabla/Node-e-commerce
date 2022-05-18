import TableRow from "./TableRow";

const OrdersTable = ({orders}) => {
    console.log(orders);
    return ( 
        <div className="product-display">
            <table class='product-display-table' >
            <thead>
                <tr>
                    <th>Order ID</th>
                    <th>status</th>
                    <th>      </th>
                </tr> 
            </thead>
                {orders.map((order)=>(<TableRow order={order}/>))} 
            </table>
        </div>
    );
}

export default OrdersTable;