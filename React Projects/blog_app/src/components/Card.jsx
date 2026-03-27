import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ id,title,author , category,date,content ,tags}) => {
  return (
    <div className='py-4 px-2 flex flex-col gap-2'>
        <Link to={`/blogs/${id}`}>
            <h2 className='font-bold text-[1.25rem] font-mono underline text-[#88f]'>{title}</h2>
        </Link>
        
        <p className='italic text-[#777]'>
            By <span>{` ${author} `}</span> on{" "} 
            <Link to={`/categories/${category.replaceAll(" ", "-")}`}>
                <span className='text-[1.2rem] font-bold underline text-[#66d]'>{` ${category} `}</span> 
            </Link> 
        </p>
        <p className='[word-spacing:8px]'>
            Posted on <span>{date}</span>
        </p>
        <p className='[word-spacing:4px] font-serif'>
            {content}
        </p>
        <div>
            {
                tags.map((tag , index)=>{
                    return( 
                        <React.Fragment key={index}> 
                            <Link  to={`/tags/${tag.replaceAll(" ","-")}`}>
                                <span className='underline text-[#117] cursor-pointer'>{` #${tag} `}</span>
                            </Link>
                            &nbsp; &nbsp; &nbsp;
                        </React.Fragment>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Card;
