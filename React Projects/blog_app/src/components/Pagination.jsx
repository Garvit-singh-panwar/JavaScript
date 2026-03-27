import { useNavigate , useNavigation , useRouteLoaderData , useMatches} from "react-router-dom";
const Pagination = () => {

 
  const navigate = useNavigate();
  const navigation = useNavigation();
  const loading = navigation.state === "loading";

  const matches = useMatches();
  const currentRouteInfo = matches[matches.length-1];
  const currentRouteId = currentRouteInfo?.id;
  const data = useRouteLoaderData(currentRouteId); 
  
  if (!data) return null;

  const { page, totalPages } = data;

  const handlePageChange = (newPage) => {
      // This triggers the loader automatically by changing the URL
      navigate(`/?page=${newPage}`);
      
      // Optional: Scroll to top when page changes
  };

  const nextHandler = () => {
    if (page < totalPages) { 
     handlePageChange(page + 1);
    }
  }

  const prevHandler = () => {
    if (page > 1) {
      handlePageChange(page - 1);
    }
  }


  return (
    
        <footer className='sticky bottom-0 flex w-[100%] mx-auto justify-between py-3 px-6  bg-[#333] text-[#fff] items-center' >
          
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


          <p className='text-[1rem] text-[#fff] font-bold'>Page no <span className='text-[#4a4]'>{page}</span> out of <span className='text-[#4a4]'>{ totalPages }</span></p>


          
        </footer>
    
  )
}

export default Pagination;
