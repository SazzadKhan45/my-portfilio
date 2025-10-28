import { createBrowserRouter } from "react-router";
import ErrorPage from "../ErrorPage/ErrorPage";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/portfolio",
        element: <h2>Portfolio</h2>,
      },
      {
        path: "/hire-me",
        element: <h2>About</h2>,
      },
      {
        path: "/contactUs",
        element: <h2>About</h2>,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);

export default router;
