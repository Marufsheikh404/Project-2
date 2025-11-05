import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Home from "../pages/Home/Home/Home";
import AuthLayout from "../Layout/AuthLayout";
import Login from "../pages/Authentication/Login/Login";
import Register from "../pages/Authentication/Register/Register";
import PercelFrom from "../pages/PercelFrom/PercelFrom";
import DashboardLayout from "../Layout/DashboardLayout";
import MyPercel from "../pages/Dashboard/myPercel/MyPercel";
import PrivateRoute from "./PrivateRoutes/PrivateRoute";
import Payment from "../pages/Dashboard/payment/Payment";



const Router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: 'percel',
                element: <PrivateRoute><PercelFrom></PercelFrom></PrivateRoute>,
                loader:(()=>fetch('/warehouses.json'))
            }
        ]
    },
    {
        path: '/',
        Component: AuthLayout,
        children: [
            {
                path: 'login',
                Component: Login
            },
            {
                path: 'register',
                Component: Register
            }
        ]
    },
    {
        path:'/dashboard',
        element:<PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children:[
            {
                path:'mypercel',
                element:<MyPercel/>
            },
            {
                path:'payment/:id',
                element:<Payment></Payment>
            }
        ]
    }
])

export default Router;