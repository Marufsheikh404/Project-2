import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Home from "../pages/Home/Home/Home";
import AuthLayout from "../Layout/AuthLayout";
import Login from "../pages/Authentication/Login/Login";

const Router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children:[
            {
                index: true,
                Component: Home
            }
        ]
    },
    {
        path:'/',
        Component: AuthLayout,
        children:[
            {
                path:'login',
                Component: Login
            }
        ]
    }
])

export default Router;