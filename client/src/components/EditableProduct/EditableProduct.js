import React from 'react'
import './EditableProductStyle.css'

const EditableProduct = () => {
  return (
    <div class='product-display'>
        <table class='product-display-table' >
            <thead>
                <tr>
                    <th>Product Image</th>
                    <th>Product Name</th>
                    <th>Product Price</th>
                    <th>Action</th>
                </tr> 
            </thead>

            <tr>
                <td><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjFDhQOorpTVrB-yDLq10ccJw1AEx1FhZgsQ&usqp=CAU' height="100"></img></td>
                <td>shoes</td>
                <td>99$</td>
                <td>
                    <a href='' class="btn" > <i class='fa fa-edit'></i> Edit </a>
                    <a href='' class="btn" > <i class='fa fa-trash'></i> Remove </a>    
                </td>
            </tr>

        

        </table>

    </div>
  )
}

export default EditableProduct