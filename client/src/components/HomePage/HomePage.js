import HomePageProduct from './HomePageProduct';
import useFetch from '../../useFetch';
import Loading from '../Loading/Loading';
import NavBar from '../NavBar/NavBar';
import { Navigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AdminContext } from '../../AdminContext';

const HomePage = () => {
  const link = '/api/products/list/';
  const { data: products, error, isPending } = useFetch(link);
  const { admin } = useContext(AdminContext);
  const [searchResults, setSearchResults] = useState([]);
  const [isSearch, setisSearch] = useState(false);

  if (admin === 'true') {
    // return <Navigate to='/admin'  />
  }

    if (admin === "true" ){
        // return <Navigate to='/admin'  />
    }
    return (
    <div>
    <NavBar/>
    <div className="all">    
        <div className="HomeGrid">
            {error && <div> {error} </div>} 
            {isPending && <Loading/>}
            {products && products.map(product => <HomePageProduct key={product._id} product={product}/>)}
        </div>  
    </div>
    </div>
    )
}
  const handleSearchResults = (results) => {
    setisSearch(true);
    setSearchResults(results);
  };


export default HomePage