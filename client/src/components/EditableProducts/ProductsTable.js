const ProductsTable = ({products}) => {
    
    return ( 
        <div>
            <table class='product-display-table' >
            <thead>
                <tr>
                    <th>Product Image</th>
                    <th>Product Name</th>
                    <th>Product Price</th>
                    <th> </th>
                </tr> 
            </thead>

            {products.map(product => <tr>
                <td><img src={product.image} height="100"></img></td>
                <td>{product.name}</td>
                <td>{product.price}$</td>
                <td>
                    <a href={`/admin/editproducts/${product._id}`} className="btn" ><i class='fa fa-edit'></i> Edit</a>
                </td>
            </tr>)}
        </table>
        </div>
    );
}

export default ProductsTable;