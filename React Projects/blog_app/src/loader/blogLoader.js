import axios from "axios";
import { baseUrl } from "../baseUrl";

export const blogLoader = async ({params, request }) => {

    const url = new URL(request.url);
    const page = url.searchParams.get("page") || 1;

    try {
        
        let queryParams = { page: page};

        if(params.tag){
            queryParams.tag = params.tag.replaceAll("-"," ");
        }
        else if(params.category){
            queryParams.category = params.category.replaceAll("-"," ");
        }

        const response = await axios.get(baseUrl, { params: queryParams });
        // Instead of calling setPosts(data), we just return it!
        return response.data; 
    } catch (error) {
        throw new Error("Could not fetch blog posts");
    }
};