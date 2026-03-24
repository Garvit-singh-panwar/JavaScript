import React from 'react'

const Card = ({title,author , category,date,content ,tags}) => {
  return (
    <div className='py-4 px-2 flex flex-col gap-2'>
        <h2 className='font-bold text-[1.25rem] font-mono'>{title}</h2>
        <p className='italic text-[#777]'>
            By <span>{` ${author} `}</span> on <span>{` ${category} `}</span> 
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
                            <span className='underline text-[#117] cursor-pointer'>{` #${tag} `}</span>
                            &nbsp; &nbsp;
                        </React.Fragment>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Card;
