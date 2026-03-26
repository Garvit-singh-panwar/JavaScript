import axios from "axios";
import { baseUrl } from "../baseUrl";

export const blogLoader = async ({ request }) => {
    const url = new URL(request.url);
    const page = url.searchParams.get("page") || 1;

    try {
        const response = await axios.get(baseUrl, { params: { page } });
        // Instead of calling setPosts(data), we just return it!
        return response.data; 
    } catch (error) {
        throw new Error("Could not fetch blog posts");
    }
};