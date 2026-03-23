import React from 'react'
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';


const Blogs = () => {

    const {loading, posts } = useContext(AppContext);
  return (
    <div>
        {blogs.map((blog)=>{
                return(
                    < Card{...blog}/>
                );
        })}
      
    </div>
  )
}

export default Blogs;
