import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "@/layouts/MainLayout/MainLayout";
import Home from "@/pages/Home";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={routes} />;
};
export default AppRouter;
