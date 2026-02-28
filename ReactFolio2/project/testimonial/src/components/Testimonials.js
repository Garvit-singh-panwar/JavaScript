import { useState } from "react";
import Card from "./Card";

function Testimonials(props){

    const reviews = props.reviews;
    const [review,setReview] = useState(reviews[0]);



    
    return(
        <div className="flex flex-col w-[85vw] md:w-[700px] bg-white justify-center items-center mt-10 p-10 transition-all duration-700 hover:shadow-xl rounded-md">
            <Card review = {review} setReview={setReview} reviews={reviews} />

            
            <div className="flex items-center justify-center gap-3 text-3xl mt-5 text-violet-400 font-bold">
                <button className="cursor-pointer"
                    onClick={
                    ()=>{ 
                            let currentIndex = reviews.indexOf(review);

                            let newIndex = (currentIndex - 1 + reviews.length) % reviews.length;
                            console.log(newIndex);
                            setReview(reviews[newIndex]);

                        }
                      } >{`<`}</button>

                <button className="cursor-pointer"
                    onClick={
                    ()=>{ 
                            let currentIndex = reviews.indexOf(review);

                            let newIndex = (currentIndex + 1) % reviews.length;
                            console.log(newIndex);
                            setReview(reviews[newIndex]);

                        }
                      }  >{`>`}</button>
            </div>

            <div>
                <button className="bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg"
                 onClick={()=>{
                    let index = Math.floor(Math.random()*reviews.length);
                    console.log(index);
                    setReview(reviews[index]);
                }}>
                    Surprise Me
                </button>
            </div>
        </div>
    )
}

export default Testimonials;