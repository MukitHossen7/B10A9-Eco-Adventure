import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home";
import UpdateProfile from "../Pages/UpdateProfile";
import MyProfile from "./../Pages/MyProfile";
import Details from "../Pages/Details";
import LoginPage from "../Pages/Authentication/LoginPage";
import RegistrationPage from "./../Pages/Authentication/RegistrationPage";
import PrivateRoutes from "./PrivateRoutes";
import AllAdventure from "../Pages/AllAdventure";
import ForgetPassword from "../Pages/ForgetPassword";
import ErrorPage from "./../Pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "updateProfile",
        element: (
          <PrivateRoutes>
            <UpdateProfile></UpdateProfile>
          </PrivateRoutes>
        ),
      },
      {
        path: "myProfile",
        element: (
          <PrivateRoutes>
            {" "}
            <MyProfile></MyProfile>
          </PrivateRoutes>
        ),
      },
      {
        path: "details/:id",
        element: (
          <PrivateRoutes>
            <Details></Details>
          </PrivateRoutes>
        ),
        loader: async ({ params }) => {
          const response = await fetch("/adventuredata.json");
          const data = await response.json();
          const detailsData = data.find(
            (item) => item.id === parseInt(params.id)
          );
          return { detailsData };
        },
      },
      {
        path: "login",
        element: <LoginPage></LoginPage>,
      },
      {
        path: "register",
        element: <RegistrationPage></RegistrationPage>,
      },
      {
        path: "adventure",
        element: <AllAdventure></AllAdventure>,
      },
      {
        path: "forget",
        element: <ForgetPassword></ForgetPassword>,
      },
    ],
  },
]);

export default router;
