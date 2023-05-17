import { useState } from 'react';
import './NavBarStyle.css';
import { UserContext } from '../../UserContext';
import { useContext } from 'react';
import { CartContext } from '../../CartContext';
import { AdminContext } from '../../AdminContext';

const NavBar = ({ onSearchResults, onResetSearch }) => {
  const { user, setUser } = useContext(UserContext);
  const { cart } = useContext(CartContext);
  const { setAdmin } = useContext(AdminContext);
  const [searchQuery, setSearchQuery] = useState('');

  let totalQuantity = 0;
  if (cart) {
    cart.map((item) => (totalQuantity += item.quantity));
  }

  const logout = async (event) => {
    event.preventDefault();
    // Request to server to delete token
    let res = await fetch('/api/auth/logout');
    if (res.ok) {
      setAdmin('false');
      setUser('false');
    }
  };

  const handleSearch = async (event) => {
    event.preventDefault();
    if (searchQuery.trim() !== '') {
      // Make a request to the search API endpoint with the searchQuery value
      try {
        const response = await fetch(`/api/products/search/${searchQuery}`);
        if (response.ok) {
          const products = await response.json();
          onSearchResults(products);
        } else {
          // Handle the case when the search request fails
          console.error('Error fetching search results');
        }
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    }
    else
    {
      onResetSearch();
    }
  };

  return (
    <div className="topnav">
      <a className="name" href="/">
        E-comm
      </a>
      <form className="Form" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search.."
          name="search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit">
          <i className="fa fa-search"></i>
        </button>
      </form>
      <div className="cartIcon">
        {user === 'true' ? (
          <>
            <a onClick={logout} className="nav-text" href="#">
              Log out
            </a>
            <a href="/orders" className="nav-text">
              Orders
            </a>
          </>
        ) : (
          <a className="nav-text" href="/login">
            Log In
          </a>
        )}

        {totalQuantity ? <span>{totalQuantity}</span> : <></>}
        <a href="/cart">
          <i className="fa fa-shopping-cart"></i>
        </a>
      </div>
    </div>
  );
};

export default NavBar;
