import { useEffect, useState } from 'react';
import Loader from './Loader';
import axios from 'axios';

const RandomGif = () => {
  const [gif, setGif] = useState('');
  const [loading, setLoading] = useState(false);
  
  const Api_key = import.meta.env.VITE_API_KEY;
  // Cleaned up the double slash and template string
  const url = `https://api.klipy.com/api/v1/${Api_key}/gifs/trending`;



  const fetchData = async () => {
    try {
      setLoading(true);

      const pageNo = Math.floor(Math.random() * 20);

      const response = await axios.get(url, {
        params: {
          customer_id: 'ch1',
          page: pageNo,
          per_page: 50,
          random: true
        }
      });

      let result = Object.values(response.data?.data?.data || {});
      

      let indx = Math.floor(Math.random() * result.length);

      const resultUrl = response.data?.data?.data?.[indx]?.file?.hd?.gif?.url;
      setGif(resultUrl);
    } catch (error) {
      console.error("Fetch Error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const clickHandler = () => {
    fetchData();
  };



    return (
      <div className='bg-[teal] border-4 border-[#410200] w-1/2 flex flex-col gap-y-10  items-center rounded-2xl shadow-[10px_10px_0px_0px_#410200]'>
          
        <h1 className='text-[1.5rem] uppercase font-extrabold tracking-wider text-[#FFD700] py-5 drop-shadow-2xl'>
          Random gif
        </h1>
        <div className='mx-5 px-5 w-[90%] flex justify-center'>
          {loading ? <Loader/> :  <img src={gif} alt="gif" className='h-[300px] ' /> }
            
        </div>

        <button className="bg-[#FFDB58] hover:bg-[#EAB308] active:translate-y-1 active:shadow-none transition-all my-8 py-2 px-10 rounded-lg border-4 border-[#410200] font-bold text-[1.2rem] text-[#410200] shadow-[4px_4px_0px_0px_#410200]"
        onClick={clickHandler}>
          GENERATE
        </button>

      </div>
  )
}

export default RandomGif;
