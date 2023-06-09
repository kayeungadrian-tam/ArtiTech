import { useRoutes } from "react-router-dom";

// import { Landing } from '@/features/misc';
// import { useAuth } from '@/lib/auth';

// import { protectedRoutes } from './protected';
// import { publicRoutes } from "./public";
import BlogPost from "../views/blog/blog";
import LandingPage from "../views/landing/landingPage";

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
      path: "/blog",
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
