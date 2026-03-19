import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Loader from './Loader';

const SearchedGif = () => {

  const [gif,setGif] = useState('');
  const [loading , setLoading] = useState(false);
  const [input , setInput] = useState('car');
  const Api_key = import.meta.env.VITE_API_KEY;
  
  
  
  const fetchData = async ()=>{
    const url = `https://api.klipy.com/api/v1/${Api_key}/gifs/search?&q=${input}`;
    setLoading(true);
    try{

      const pageNo = Math.floor(Math.random() * 20);

      let response = await axios(url,
        {
          params:{
            customer_id: 'ch1',
            page: pageNo,
            per_page: 50,
            random: true
          }
        }
      );

      let result = Object.values(response.data?.data?.data || {});
      

      let indx = Math.floor(Math.random() * result.length);

      const resultUrl = response.data?.data?.data?.[indx]?.file?.hd?.gif?.url;
      setGif(resultUrl);
    }
    catch(error){
      console.log(error);
    }
    finally{
      setLoading(false);
    }

  }

  const changeHandler = (event)=>{
    setInput(event.target.value);
  }

  const submitHandler = (event)=>{
    event.preventDefault();
    fetchData();
  }

  useEffect(()=>{
    fetchData();
  },[])


  return (
    <div className='bg-[#FF6B6B] border-4 border-[#410200] w-1/2 flex flex-col items-center rounded-2xl shadow-[10px_10px_0px_0px_#410200] gap-y-10 mt-7 mb-20'>
        
      <h1 className='text-[1.5rem] uppercase font-black text-white py-5 drop-shadow-2xl'>
        Search Gif
      </h1>

      <div className='mx-5 px-5 w-[90%] flex justify-center'>
          {loading ? <Loader/> :  <img src={gif} alt="gif" className='h-[300px] ' /> }
            
      </div>

      <div className='w-[100%] flex flex-col items-center mb-5'>

        <form className='w-[100%] flex flex-col items-center mb-5' 
          onSubmit={submitHandler}
        >
          <input 
            className='w-[85%] py-2 px-4 rounded-lg border-2 border-[#410200] outline-none' 
            placeholder='Search for a gif...'
            onChange={changeHandler}
            value={input}
          />
 
          <button className="bg-[#FFDB58] uppercase hover:bg-[#EAB308] active:translate-y-1 active:shadow-none transition-all my-2 py-2 px-10 rounded-lg border-4 border-[#410200] font-bold text-[1.2rem] text-[#410200] shadow-[4px_4px_0px_0px_#410200]">
            Search
          </button>
        </form>

      </div>

      

    </div>
  );
};

export default SearchedGif;
