import Blogs from '../components/Blogs'
import {  useNavigate } from 'react-router-dom'

const TagsPage = () => {
  const navigate = useNavigate();
  return (
    <>
    <button className='bg-[#77e] py-2 mt-2 px-7 mb-2 rounded-md font-bold text-[#fff]' onClick={()=>{navigate(-1)}}>Back</button>
    <Blogs/>
    </>
  )
}

export default TagsPage
