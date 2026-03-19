import React from 'react'

  const RandomGif = () => {
    return (
      <div className='bg-[teal] border-4 border-[#410200] w-1/2 flex flex-col gap-y-10  items-center rounded-2xl shadow-[10px_10px_0px_0px_#410200]'>
          
        <h1 className='text-[1.5rem] uppercase font-extrabold tracking-wider text-[#FFD700] py-5 drop-shadow-2xl'>
          Random gif
        </h1>
        <div>

        </div>

        <button className="bg-[#FFDB58] hover:bg-[#EAB308] active:translate-y-1 active:shadow-none transition-all my-8 py-2 px-10 rounded-lg border-4 border-[#410200] font-bold text-[1.2rem] text-[#410200] shadow-[4px_4px_0px_0px_#410200]">
          GENERATE
        </button>

      </div>
  )
}

export default RandomGif;
