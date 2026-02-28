import {FaQuoteLeft , FaQuoteRight} from "react-icons/fa"

function Card(props){


    const review = props.review;
    
    

    return(
        <div className="md:relative flex  flex-col ">
            <div className="absolute top-[-7rem] z-[10] mx-auto" >
                <img className="aspect-square rounded-full w-[140px] h-[140px] z-25 " src={review.image}/>
                <div className="absolute rounded-full w-[140px] h-[140px] bg-violet-500 top-[-6px] left-[10px] z-[-10]"></div>
            </div>

            <div className="text-center mt-7">
                <p className="font-bold text-2xl  captialize">{review.name}</p>
            </div>

            <div className="text-center ">
                <p className="text-violet-300 uppercase text-sm">{review.job}</p>
            </div>

            <div className="text-violet-400 mx-auto mt-5">
                <FaQuoteLeft/>
            </div>

            <div className="tex-center mt-4 text-slate-500">
                {review.text}
            </div>

            <div className="text-violet-400 mx-auto mt-5">
                <FaQuoteRight/>
            </div>


        </div>
    )
}

export default Card;