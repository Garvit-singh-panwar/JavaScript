import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';

const Pagination = () => {
  const {page,totalPages,fetchBlogPosts,loading} = useContext(AppContext);

const nextHandler = () => {
    if (page < totalPages) {
      fetchBlogPosts(page + 1);
    }
  }

  const prevHandler = () => {
    if (page > 1) {
      fetchBlogPosts(page - 1);
    }
  }


  return (
    
        <footer className='flex w-[90%] mx-auto justify-between py-7 px-6' >
          
          <div className='flex gap-20'>   
          <button 
            disabled={loading}
            onClick={prevHandler} 
            className={`bg-[#77e] py-2 px-7 rounded-md font-bold disabled:opacity-50 disabled:cursor-not-allowed ${page === 1 ? 'hidden' : ''} `} 
          >
            Previous
          </button>
          <button 
            disabled={loading} 
            onClick={nextHandler}
            className={`bg-[#77e] py-2 px-7 rounded-md font-bold disabled:opacity-50 disabled:cursor-not-allowed ${page === totalPages ? 'hidden' : ''} `}
          > 
            Next 
          </button>
          </div>


          <p className='text-[1rem] text-[#000] font-bold'>Page no <span className='text-[#4a4]'>{page}</span> out of <span className='text-[#4a4]'>{ totalPages }</span></p>


          
        </footer>
    
  )
}

export default Pagination;
