import { lazyImport } from "../utils/lazyImport";

const { AuthRoutes } = lazyImport(
  () => import("../features/auth/route.tsx"),
  "AuthRoutes"
);

export const publicRoutes = [
  {
    path: "/auth/*",
    element: <AuthRoutes />,
  },
];
