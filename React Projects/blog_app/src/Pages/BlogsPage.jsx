import axios from 'axios';
import Card from '../components/Card';
import { useNavigation, useRouteLoaderData , useNavigate } from 'react-router-dom';


export async function fetchRelatedBlogs({params}) {
    const newBaseUrl = "https://codehelp-apis.vercel.app/api/";
    let url = `${newBaseUrl}get-blog`;
    try {
        const result = await axios.get(url , {
            params: {
                blogId: `${params.blog_id}`,
            }
        });
        return result.data;
    } catch (err) {
        console.log(err);
    }
}

const BlogsPage = () => {

    const navigate = useNavigate();
    const navigation = useNavigation();
    const loading = navigation.state === "loading" && !navigation.formData;
    const data= useRouteLoaderData('blog-data');
    const { blog, relatedBlogs = [] } = data || {};

  return (
    <>
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : blog ? (
        <div>
            <button className='bg-[#77e] py-2 mt-2 px-7 rounded-md font-bold text-[#fff]' onClick={()=>{navigate(-1)}}>Back</button>
          <h2 className='text-[2rem] font-extrabold px-7 py-7'>Blog</h2>
          <Card {...blog} />
          <h2 className='text-[2rem] font-extrabold px-7 py-7'>Related Blogs</h2>
          {relatedBlogs.length > 0 ? (
            relatedBlogs.map((post) => (
              <div key={post.id}>
                <Card {...post} /> {/* Capitalized 'C' */}
              </div>
            ))
          ) : (
            <p>No related blogs available.</p>
          )}
        </div>
      ) : (
        <p>No Blog Found</p>
      )}
    </div>
    </>
  )
}

export default BlogsPage
