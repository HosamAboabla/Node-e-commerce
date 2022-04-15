import './NavBarStyle.css'
const NavBar = () => {
  return (

    <div className="topnav">
        <a className="active" href="/">E-commerce</a>
        <a href="/cart">Cart</a>
        <form action="action_page.php">
            <input type="text" placeholder="Search.." name="search" />
            <button type="submit"><i className="fa fa-search"></i></button>
        </form>
    </div>
  )
}

export default NavBar