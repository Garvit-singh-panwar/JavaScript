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
          id: "blog-data",
        },
      ]
    },
  ]);

  createRoot(document.getElementById('root')).render(
      <RouterProvider router={router} />
  )
