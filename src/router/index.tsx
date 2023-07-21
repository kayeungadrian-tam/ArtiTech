import { useRoutes } from "react-router-dom";

// import { Landing } from '@/features/misc';
// import { useAuth } from '@/lib/auth';

// import { protectedRoutes } from './protected';
// import { publicRoutes } from "./public";
import BlogPost from "../views/blog/blog";
import LandingPage from "../views/landing/landingPage";
import BlogList from "../views/blogList";

export const AppRoutes = () => {
  //   const auth = useAuth();

  const commonRoutes = [
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      // path: "/",
      // element: <App />,
    },
    {
      path: "/blogs",
      element: <BlogList />,
    },
    {
      path: "/blog/:id",
      element: <BlogPost />,
    },
  ];

  //   const routes = auth.user ? protectedRoutes : publicRoutes;

  const element = useRoutes([
    // ...routes,
    ...commonRoutes,
  ]);

  return <>{element}</>;
};
