import './NavBarStyle.css'
const NavBar = ({cart}) => {
  let totalQuantity = 0;
  cart.map( item =>  (totalQuantity += item.quantity) )               


  return (
    <div className="topnav">
        <a  className="name" href="/">LOGO</a>
        <div  className='Form'>
            <input  type="text" placeholder="Search.." name="search" />
            <button  ><i className="fa fa-search"></i></button>
        </div>
        <div className='cartIcon'>
          <span>{totalQuantity}</span>
          <a href="/cart"><i className="fa fa-shopping-cart"></i></a>
        </div>
    </div>
    
  )
}

export default NavBar