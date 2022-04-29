import React from 'react'
import './AddProductFormStyle.css'

const AddProductForm = () => {
  return (
    <div class="admin-product-form-container">
        <form action="" method="post">
            <h3>Add A New Product</h3>
            <div>
                <label>Name :</label>
                <input type="text" placeholder='Enter Product Name' name='product_name' class="box"/>
            </div>
            <div>
                <label>Discription :</label>
                <input type="text" placeholder='Enter Product Discription' name='product_discription' class="box"/>
            </div>
            <div>
                <label>Price :</label>
                <input type="number" placeholder='Enter Product Price' name='product_price' class="box"/>
            </div>
            <div>
                <label>Quantity :</label>
                <input type="number" placeholder='Enter Product Quantity' name='product_quantity' class="box"/>
            </div>
            <div>
                <label>Image Link :</label>
                <input type="url" name="product_image"  placeholder='Enter Product image' class="box"/>
            </div> 
            <input type="submit" name="add_product" class="btn" value="Add Product"/>

        </form>
    </div>
  )
}

export default AddProductForm