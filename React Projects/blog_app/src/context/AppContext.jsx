import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl.jsx";
import axios from "axios";

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null);

    
    async function fetchBlogPosts(pageNumber = 1) {
        setLoading(true);
        // Using template literals to handle pagination in the URL
        let url = baseUrl; 
        
        try {
            const result = await axios.get(url,
                {
                    params:{
                        page: pageNumber
                    }
                }
            );
            const data = result.data; 

            console.log(data);

            if (!data.posts) throw new Error("No posts found");

            setPage(data.page);
            setPosts(data.posts);
            setTotalPages(data.totalPages);
        } catch (error) {
            console.error("Error in fetching data:", error);
            setPage(1);
            setPosts([]);
            setTotalPages(null);
        } finally {
            setLoading(false);
        }
    }

    function handlePageChange(newPage) {
        setPage(newPage);
        fetchBlogPosts(newPage);
    }

    // Include the functions in the value so components can use them
    const value = {
        posts,
        loading,
        page,
        totalPages,
        fetchBlogPosts,
        handlePageChange
    };

    return (
        <AppContext value={value}>
            {children}
        </AppContext>
    );
}
