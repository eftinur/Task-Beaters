import { createBrowserRouter } from "react-router-dom";
import DetailsCard from "../component/DetailsCard/DetailsCard";
import AddTask from "../pages/Home/AddTask/AddTask";
import Home from "../pages/Home/Home/Home";
import Register from "../pages/Home/Register/Register";
import SignIn from "../pages/Home/SignIn/SignIn";
import UpdateTask from "../pages/Home/UpdateTask/UpdateTask";
import Main from "../pages/layout/Main";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/addtask",
        element: <PrivateRoute><AddTask /></PrivateRoute>,
      },
      {
        path: "/tasks/:id",
        element: <DetailsCard />,
        loader: ({ params }) => {
          return fetch(`https://backend-xi-seven.vercel.app/tasks/${params.id}`);
        },
      },
      {
        path: "/update/:id",
        element: <UpdateTask />,
        loader: ({ params }) => {
          return fetch(`https://backend-xi-seven.vercel.app/tasks/${params.id}`);
        },
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
    ],
  },
]);

export default router;
