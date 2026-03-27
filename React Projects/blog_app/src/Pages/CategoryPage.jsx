import Blogs from '../components/Blogs'
import { useNavigate } from 'react-router-dom'

const CategoryPage = () => {

    const navigate = useNavigate();

  return (
    <>
    <button className='bg-[#77e] py-2 mt-2 mb-2 px-7 rounded-md font-bold text-[#fff]' onClick={()=>{navigate(-1)}}>Back</button>
    <Blogs/>
    </>
  )
}

export default CategoryPage
