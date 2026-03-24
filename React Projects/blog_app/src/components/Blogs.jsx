import React from 'react'
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Loader from './Loader';
import Card from './Card';

const Blogs = () => {

    const {loading, posts } = useContext(AppContext);
  return (
    <div className='w-[100%] flex items-center flex-wrap h-[100%] min-h-[80vh] '>

    {loading ? <Loader/> : <>
        { posts.length === 0 ? 
            <p className='mx-auto text-[1.5rem] font-bold flex items-center' > <span className='text-[3rem] text-[#777]'>404 </span>  &nbsp;post not found ...</p> 
        : 
            posts.map((blog)=>{
                    return(
                        < Card  {...blog} key={blog.id}/>
                    );
            })}
        </>
      } 
    </div>
  )
}

export default Blogs;
