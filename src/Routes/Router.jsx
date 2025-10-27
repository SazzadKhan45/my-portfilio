import { createBrowserRouter } from "react-router";
import ErrorPage from "../ErrorPage/ErrorPage";
import HomeLayout from "../Layouts/HomeLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <ErrorPage />,
  },
]);

export default router;
