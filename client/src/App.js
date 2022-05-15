import NavBar from './components/NavBar/NavBar';
import { Routes, Route} from 'react-router-dom' //react router
import Product from './components/ProductPage/Product';
import HomePage from './components/HomePage/HomePage';
import Cart from './components/Cart/Cart';
import AddProductForm from './components/AddProduct/AddProductForm'
import EditProduct from './components/EditProduct/EditProduct'
import EditableProducts from './components/EditableProducts/EditableProducts';
import React , {useState , useEffect } from 'react'
import LogIn from './components/LogIn/Login';
import AdminDashboard from './components/AdminDashboard/AdminDashboard';
import AdminPage from './components/AdminDashboard/AdminPage';
import SignUp from './components/SignUp/SignUp';

function App() {

  const [cart , setCart ] = useState([]);

  const saveLocalCartItems = () => {
      localStorage.setItem('cart' , JSON.stringify(cart)) 
    }
  
  const getLocalCartItems = () => {
  if(localStorage.getItem('cart') === null){
      localStorage.setItem('cart' , JSON.stringify([]));
  }else{
      let cart = JSON.parse(localStorage.getItem('cart')) ;
      setCart([...cart]);
  } 
  }
  
  useEffect(() => {
    getLocalCartItems();
  } , [])
  
  useEffect(() => {
    saveLocalCartItems();
  } , [cart])

  return (
    
    <div className="App">
      
      <Routes>
        <Route path="/" element={<><NavBar cart = {cart}/> <HomePage cart = {cart} setCart = {setCart} /></>}/>
        <Route path="/products" element={<><NavBar cart = {cart}/><HomePage cart = {cart} setCart = {setCart} /></>}/>
        <Route path="/products/:id" element={<><NavBar cart = {cart}/><Product cart = {cart} setCart = {setCart}/></>}/>
        <Route path="/cart" element={<><NavBar cart = {cart}/><Cart cart = {cart} setCart = {setCart} /></>}/> 
        <Route path="/admin" element={<AdminPage/>}/>
        <Route path="/admin/addproduct" element={<><AdminDashboard/><AddProductForm/></>}/>
        <Route path="/admin/EditProducts" element={<><AdminDashboard/><EditableProducts/></>}/> 
        <Route path="/admin/EditProducts/:id" element={<><AdminDashboard/><EditProduct/></>}/> 
        <Route path="/login" element={<LogIn/>}/> 
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/*" element={<><h2>ERROR 404 not found</h2></>}/>
      </Routes>
    </div>
  );
}

export default App;
