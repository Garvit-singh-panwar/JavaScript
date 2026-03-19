import React from 'react'

const SearchedGif = () => {
  return (
    <div className='bg-[#FF6B6B] border-4 border-[#410200] w-1/2 flex flex-col items-center rounded-2xl shadow-[10px_10px_0px_0px_#410200] gap-y-10 mt-7 mb-20'>
        
      <h1 className='text-[1.5rem] uppercase font-black text-white py-5 drop-shadow-2xl'>
        Search Gif
      </h1>

      <div>

      </div>

      <div className='w-[100%] flex flex-col items-center mb-5'>

        <input 
          className='w-[85%] py-2 px-4 rounded-lg border-2 border-[#410200] outline-none' 
          placeholder='Search for a gif...'
        />

        <button className="bg-[#FFDB58] uppercase hover:bg-[#EAB308] active:translate-y-1 active:shadow-none transition-all my-2 py-2 px-10 rounded-lg border-4 border-[#410200] font-bold text-[1.2rem] text-[#410200] shadow-[4px_4px_0px_0px_#410200]">
          Search
        </button>

      </div>

      

    </div>
  );
};

export default SearchedGif;
