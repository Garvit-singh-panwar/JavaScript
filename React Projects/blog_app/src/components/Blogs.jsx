import Loader from './Loader';
import { useRouteLoaderData , useNavigation ,useMatches } from 'react-router-dom';
import Card from './Card';

const Blogs = () => {


  const matches = useMatches();
  const currentRouteData = matches[matches.length-1];
  const ActiveRouteId = currentRouteData?.id;

  const data = useRouteLoaderData(ActiveRouteId);
  const {posts} = data;
  const navigation = useNavigation();
  const loading = navigation.state === "loading" && !navigation.formData  ;

  return (
    <div className='w-[100%] bg-[#fff] flex items-center flex-wrap h-[100%] min-h-[80vh] '>

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
