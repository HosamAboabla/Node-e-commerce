import {Routes, Route} from 'react-router-dom' //react router
import Product from './components/ProductPage/Product';
import HomePage from './components/HomePage/HomePage';
import Cart from './components/Cart/Cart';
import AddProductForm from './components/AddProduct/AddProductForm'
import EditProduct from './components/EditProduct/EditProduct'
import EditableProducts from './components/EditableProducts/EditableProducts';
import React , {useState , useEffect} from 'react'
import LogIn from './components/LogIn/Login';
import AdminPage from './components/AdminDashboard/AdminPage';
import SignUp from './components/SignUp/SignUp';
import {UserContext} from './UserContext';
import {CartContext} from './CartContext';
import {AdminContext} from './AdminContext';
import CheckOut from './components/CheckOut/CheckOut';
import Orders from './components/Orders/Orders';
import OrderPage from './components/OrderPage/OrderPage';


function App() {
  const [user , setUser ] = useState();
  const [admin , setAdmin ] = useState();
  const [cart , setCart] = useState([]);

  useEffect(()=>{
    //check if user is logged in 
    const abortContr = new AbortController(); 
    console.log(`user ${user}`)
    fetch('/api/auth/verifyUser',{signal : abortContr.signal}).then((res2)=>{
      if (res2.ok){
        setUser("true");
      }
      else{
        setUser("false");
      }
    }).catch(err =>{
      setUser("false");  
      })

    return () => abortContr.abort();
  },[])


  useEffect(()=>{
    //check if user is admin
    const abortContr = new AbortController(); 
    fetch('/api/auth/verifyAdmin',{signal : abortContr.signal}).then((res2)=>{
      if (res2.ok){
        setAdmin("true");
      }
      else{
        setAdmin("false");
      }
    }).catch(err =>{
      setAdmin("false");  
      })

    return () => abortContr.abort();}
  ,[])

  useEffect(()=>{
    if (user == false){
      return
    }
    else{
      if (user == "true")
    {
        //get cart from data base
        fetch('/api/carts/user').then((res)=>{
          if (res.ok){
            return res.json()
          } 
        }).then((returncart)=>{
          console.log('getting cart from data base');
          console.log(cart);
          if (returncart.cartItems == cart ){
            console.log(`not update cart`)
            return
          }else{
          setCart(returncart.cartItems);}
          console.log(cart);
        })
    }
    else if (user == "false")
    { 
        //get cart from local storage
        if(localStorage.getItem('cart') === null)
        {
            localStorage.setItem('cart' , JSON.stringify([]));
        }
        else
        {
            let cartlocal = JSON.parse(localStorage.getItem('cart')) ;
            console.log(`local storage cart ${cartlocal}`)
            setCart([...cartlocal]);
        } 
  }
    }
    
  }
  ,[user])


  //save cart changees
    useEffect( () => {
      //handle change in cart 
      if (user == false){
        return
      }
      else{
        if (user == "true"){
        //if user logged in
        console.log(cart);
        fetch('/api/carts/update',
            {
                method:'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({cartItems:cart})
            }).then((res)=>console .log(res))
    }
    else if(user == "false"){
      localStorage.setItem('cart' , JSON.stringify(cart)) 
    }
      }
      
    }, [cart])


  return (
    <div className="App">
      <AdminContext.Provider value={{admin,setAdmin}}>
      <CartContext.Provider value={{cart,setCart}}>
      <UserContext.Provider value={{user,setUser}}>
        <Routes>
          <Route path="/" element={ <HomePage/>}/>
          <Route path="/products" element={<HomePage/>}/>
          <Route path="/products/:id" element={<Product/>}/>
          <Route path="/cart" element={<Cart />}/> 
          <Route path="/checkout" element={<CheckOut />}/> 
          <Route path="/orders" element={<Orders />}/> 
          <Route path="/orders/:id" element={<OrderPage/>}/> 
          <Route path="/admin" element={<AdminPage/>}/>
          <Route path="/admin/addproduct" element={<AddProductForm/>}/>
          <Route path="/admin/EditProducts" element={<EditableProducts/>}/> 
          <Route path="/admin/EditProducts/:id" element={<EditProduct/>}/> 
          <Route path="/login" element={<LogIn/>}/> 
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/*" element={<><h2>ERROR 404 not found</h2></>}/>
        </Routes>
      </UserContext.Provider>
      </CartContext.Provider>
      </AdminContext.Provider>
    </div>
  );
}
export default App;
