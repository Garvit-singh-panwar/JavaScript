import './App.css'
import RandomGif from './components/RandomGif';
import SearchedGif from './components/SearchedGif';

function App() {

  return (
    <>
      <div className='mainbg h-[100%] w-screen flex flex-col items-center '>
        <nav className='h-[30px] w-[90%] flex items-center justify-center bg-[#FFDB58]  rounded-lg py-[1.5rem] px-[1.5rem] mt-5 border-5 border-[#410200]'>
          <h1 className='font-bold text-[1.5rem]  '>Gif Generator </h1>
        </nav>
        <div className='w-[90%]  flex flex-col items-center gap-y-5 mt-10' >
          <RandomGif/>
          <SearchedGif/>
        </div>
      </div>  
    </>
  )
}

export default App
