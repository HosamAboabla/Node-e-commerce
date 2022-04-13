import './NavBarStyle.css'
const NavBar = () => {
  return (

    <div className="topnav">
        <a className="active" href="#home">E-commerce</a>
        <a href="#contact">Cart</a>
        <form action="action_page.php">
            <input type="text" placeholder="Search.." name="search" />
            <button type="submit"><i className="fa fa-search"></i></button>
        </form>
    </div>
  )
}

export default NavBar