  import { createRoot } from 'react-dom/client';
  import './index.css';
  import App from './App.jsx';
  import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router";
  import { blogLoader } from './loader/blogLoader.js';
  import Loader from './components/Loader.jsx';
import Home from './Pages/Home.jsx';
import TagsPage from './Pages/TagsPage.jsx';
import CategoryPage from './Pages/CategoryPage.jsx';
import BlogsPage, { fetchRelatedBlogs } from './Pages/BlogsPage.jsx';

  let router = createBrowserRouter([
    {
      path: '/',
      Component: App,
      HydrateFallback: Loader,
      children:[
        {
          index: true,
          element: <Home/>,
          loader: blogLoader,
          id: "home-data",
        },
        {
          path: '/tags/:tag',
          Component: TagsPage,
          loader: blogLoader,
          id: "tag-data"
        },
        {
          path: '/categories/:category',
          Component: CategoryPage,
          loader: blogLoader,
          id: "category-data"
        },
        {
          path: '/blogs/:blog_id',
          Component: BlogsPage,
          loader: fetchRelatedBlogs,
          id: "blog-data"
        }
      ]
    },
  ]);

  createRoot(document.getElementById('root')).render(
      <RouterProvider router={router} />
  )
