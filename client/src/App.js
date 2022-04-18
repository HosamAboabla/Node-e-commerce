import NavBar from './components/NavBar/NavBar';
import { Routes, Route} from 'react-router-dom' //react router
import Product from './components/ProductPage/Product';
import HomePage from './components/HomePage/HomePage';
import Cart from './components/Cart/Cart';
import React , {useState , useEffect } from 'react'

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
      <NavBar cart = {cart}/>
      <Routes>
        <Route path="/" element={<HomePage cart = {cart} setCart = {setCart} />}/>
        <Route path="/products" element={<HomePage cart = {cart} setCart = {setCart} />}/>
        <Route path="/products/:id" element={<Product cart = {cart} setCart = {setCart}/>}/>
        <Route path="/cart" element={<Cart cart = {cart} setCart = {setCart} />}/> 
        <Route path="/*" element={<><h2>ERROR 404 not found</h2></>}/>
      </Routes>
    </div>
  );
}

export default App;
