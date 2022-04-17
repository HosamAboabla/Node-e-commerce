import './NavBarStyle.css'
const NavBar = () => {
  return (
    <div className="topnav">
        <a  className="name" href="/">LOGO</a>
        <div  className='Form'>
            <input  type="text" placeholder="Search.." name="search" />
            <button  ><i className="fa fa-search"></i></button>
        </div>
        <a  href="/cart"><i className="fa fa-shopping-cart"></i></a>
    </div>
    
  )
}

export default NavBar