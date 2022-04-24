import React from 'react'

const EditProduct = () => {
  return (
    <div class="admin-product-form-container">
        <form action="process.php" method="post">
            <h3>Update The Product</h3>
            <div>
                <label>Name :</label>
                <input type="text" name='product_name' value='iphone'  class="box"/>
            </div>
            <div>
                <label>Discription :</label>
                <input type="text" name='product_discription' value='iph o a c d a sn e'  class="box"/>
            </div>
            <div>
                <label>Price :</label>
                <input type="number"  name='product_price' value="199" class="box"/>
            </div>
            <div>
                <label>Quantity :</label>
                <input type="number" name='product_quantity' value='50' class="box"/>
            </div>
            <div>
                <label>Image :</label>
                <input type="url" name="product_image" value='' class="box"/>
            </div> 
            <input type="submit" class="btn" name="update_product" value="Update Product"/>
            <a href='' class="btn">Go Back</a>

        </form>
    </div>
  )
}

export default EditProduct