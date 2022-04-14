import NavBar from './components/NavBar/NavBar';
import { Routes, Route} from 'react-router-dom' //react router
import Product from './components/ProductPage/Product';
import HomePage from './components/HomePage/HomePage';
import Cart from './components/Cart/Cart'

function App() {
  return (
    
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/products" element={<HomePage/>}/>
        <Route path="/products/:id" element={<Product/>}/>
        <Route path="/cart" element={<Cart/>}/> 
        <Route path="/*" element={<><h2>ERROR 404 not found</h2></>}/>
      </Routes>
    </div>
  );
}

export default App;
