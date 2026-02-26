import { FcLike , FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";

function Card( props){

    const id = props.course.id;
    const title = props.course.title;
    const description = props.course.description;
    const image = props.course.image;

    const likedCourses = props.likedCourses;
    const setLikedCourses = props.setLikedCourses;

    function clickHandler(){
        if(likedCourses.includes(id)){

            setLikedCourses((prev) => prev.filter((cid) => cid !== id));
            toast.warn("Liked Removed");
        }
        else{

            if(likedCourses.length === 0){
                setLikedCourses([id]);
            }
            else{
                setLikedCourses((prev) => [...prev,id]);
            }  
            toast.success("Liked sucessFully");
        }
    }

    return(
        <div className='bg-bgDark bg-opacity-80 w-[300px] rounded-md overflow-hidden'>
            <div className="relative">
                <img src={image.url} alt={image.alt}></img>
                <div className='rounded-full w-[40px] h-[40px] bg-white absolute right-2 bottom-[-12px] grid place-items-center'>
                    <button onClick={clickHandler}>
                        { likedCourses.includes(id) ? <FcLike/> : <FcLikePlaceholder/> }
                    </button> 
                </div>
            </div>
            <div className='p-4'>
                <p className='text-white text-lg font-semibold leading-6'>{title}</p>
                <p className='mt-2 text-white'>{description.length <= 100 ? description : description.substring(0,100) + "..." }</p>
            </div>
        </div>
    )
}

export default Card;