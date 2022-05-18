import React, { useContext, useState } from 'react'
import Postmethod from '../../Postmethod';
import  { Navigate } from 'react-router-dom'
import './AddProductFormStyle.css'
import { AdminContext } from '../../AdminContext';
import AdminNavBar from '../NavBar/AdminNavBar';
import AdminDashboard from '../AdminDashboard/AdminDashboard';

const AddProductForm = () => {
    const [name , setName] = useState('');
    const [description , setDescription] = useState('');
    const [price , setPrice] = useState('');
    const [quantity , setQuantity] = useState('');
    const [image , setImage] = useState('');
    const [error , setError] = useState(false);
    const [message , setMessage] = useState(true);

    const{admin} = useContext(AdminContext);



    const handleSubmit = async (e) =>{
        e.preventDefault()
        var {err,mess}=await Postmethod(`/api/products/create`,{name,description,price,quantity,image});
        setError(err);
        setMessage(mess);
        if (!err){
            document.getElementById(`createproduct`).className = 'fa fa-check createAnimation createproduct' ; 
            setTimeout(()=>{document.getElementById(`createproduct`).className = 'fa fa-check createproduct' ; 
            setName('');
            setDescription('');
            setPrice('');
            setQuantity('');
            setImage('');
        },600)
        }
    }
    if (admin == "false"){
        return <Navigate to='/'/>
    }

    return (
    <div>
        <AdminNavBar/>
        <AdminDashboard/>
        <div className="admin-product-form-container">
            <i id ='createproduct' className="fa fa-check createproduct" aria-hidden="true"></i>
            <form onSubmit={handleSubmit}>
                
                <h3>Add A New Product</h3>
                <div>
                    <label>Name :</label>
                    <input
                    type="text" 
                    placeholder='Product Name' 
                    className="box" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required/>
                </div>
                <div>
                    <label>Discription :</label>
                    <textarea 
                    placeholder='Product Discription' 
                    className="box"
                    rows='6'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required>

                    </textarea>
                </div>
                <div>
                    <label>Price :</label>
                    <input 
                    type="number" 
                    placeholder='Product Price' 
                    className="box"
                    value={price}
                    min='0'
                    onChange={(e) => setPrice(e.target.value)}
                    required/>
                </div>
                <div>
                    <label>Quantity :</label>
                    <input type="number" 
                    placeholder='Product Quantity' 
                    className="box"
                    value={quantity}
                    min='0'
                    onChange={(e) => setQuantity(e.target.value)}
                    required/>
                </div>
                <div>
                    <label>Image Link :</label>
                    <input 
                    type="url" 
                    placeholder='Product image' 
                    className="box"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    required/>
                </div> 
                {error &&<div><span style={{color:"red",fontSize:"15px"}}>{message}</span></div>} 
                <input type="submit" class="btn"/>
            </form>
        </div>
    </div>
)
}

export default AddProductForm