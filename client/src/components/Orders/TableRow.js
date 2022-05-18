const TableRow = ({order}) => {
    console.log(`order${order}`);
    return ( 
    <tr>
        <td>{order._id}</td>
        <td>{order.status}</td>
        <td>
        <a href={`/orders/${order._id}`} className="btn" >View</a>
        </td>
    </tr>
    );
}
 
export default TableRow;