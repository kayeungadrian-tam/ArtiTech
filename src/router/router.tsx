import {
    createBrowserRouter,
  } from "react-router-dom";
  
import App from "../App";
import BlogPost from "../views/blog";

const router = createBrowserRouter([
{
    path: "/test",
    element: <div>Hello world!</div>,
},
{
    path: "/",
    element: <App />,
},
{
    path: "/blog",
    element: <BlogPost />,
},
]);


export default router;