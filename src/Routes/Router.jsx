import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Home from "../pages/Home/Home/Home";
import AuthLayout from "../Layout/AuthLayout";
import Login from "../pages/Authentication/Login/Login";
import Register from "../pages/Authentication/Register/Register";

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
            },
            {
                path:'register',
                Component: Register
            }
        ]
    }
])

export default Router;