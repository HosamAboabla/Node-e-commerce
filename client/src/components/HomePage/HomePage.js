import HomePageProduct from "./HomePageProduct";
import useFetch from "../../useFetch";
import Loading from "../Loading/Loading";
import NavBar from "../NavBar/NavBar";
import  { Navigate } from 'react-router-dom';
import { useState, useEffect, useRef} from 'react';

import "./HomePageStyle.css";
import { useContext } from "react";
import { AdminContext } from "../../AdminContext";
import ReactPaginate from 'react-paginate';

const HomePage = () => {
    const [currentPage, setCurrentPage] = useState(() => {
        // Retrieve the current page from localStorage
        const storedPage = localStorage.getItem('currentPage');
        return storedPage ? parseInt(storedPage) : 1;
      });
    
      // Update the current page in localStorage whenever it changes
      useEffect(() => {
        localStorage.setItem('currentPage', currentPage.toString());
      }, [currentPage]);


    const link = `/api/products/list?page=${currentPage + 1}`;
    const { data, error, isPending } = useFetch(link);

    const {admin} = useContext(AdminContext)


    const handlePageChange = (selectedPage) => {
        setCurrentPage(selectedPage.selected);
        // Scroll to the top of the page
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const reactPaginatorRef = useRef(null); // Define reactPaginatorRef using useRef

    useEffect(() => {
        // Manually set the initial selected page in the React Paginator component
        const selected = currentPage;
        // Use a ref to access the React Paginator component instance
        if (reactPaginatorRef.current) {
          reactPaginatorRef.current.state.selected = selected;
          reactPaginatorRef.current.forceUpdate();
        }
      }, [currentPage]);

    if (admin === "true" ){
        // return <Navigate to='/admin'  />
    }
    return (
        <div>
        <NavBar />
        <div className="all">
          <div className="HomeGrid">
            {error && <div>{error}</div>}
            {isPending && <Loading />}
            {data && data.products.map((product) => (
              <HomePageProduct key={product._id} product={product} />
            ))}
          </div>

          <ReactPaginate
            previousLabel={'Previous'}
            nextLabel={'Next'}
            pageCount={data && parseInt(data.totalPages)}
            onPageChange={handlePageChange}
            containerClassName={'pagination'}
            activeClassName={'active'}
            ref={reactPaginatorRef} 
          />

        </div>


      </div>
    );
}


export default HomePage