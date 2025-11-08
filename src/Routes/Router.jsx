import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Home from "../pages/Home/Home/Home";
import AuthLayout from "../Layout/AuthLayout";
import Login from "../pages/Authentication/Login/Login";
import Register from "../pages/Authentication/Register/Register";
import PercelFrom from "../pages/PercelFrom/PercelFrom";
import DashboardLayout from "../Layout/DashboardLayout";
import PrivateRoute from "./PrivateRoutes/PrivateRoute";
import Payment from "../pages/Dashboard/payment/Payment";
import PaymentHistory from "../pages/PaymentHistory/PaymentHistory";
import BeRider from "../pages/BeRider/BeRider";
import Admin from "../pages/Admin/Admin";
import MyPercel from "../pages/Dashboard/mypercel/MyPercel";
import Coverage from "../pages/Coverage/Coverage";



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
                path: 'rider',
                element: <BeRider></BeRider>
            },
            {
                path: 'map',
                Component: Coverage,
                loader: () => fetch('/public/warehouses.json')
            },
            {
                path: 'percel',
                element: <PrivateRoute><PercelFrom></PercelFrom></PrivateRoute>,
                loader: (() => fetch('/warehouses.json'))
            },
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
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: 'mypercel',
                element: <MyPercel></MyPercel>
            },
            {
                path: 'payment/:id',
                element: <Payment></Payment>
            },
            {
                path: 'history',
                element: <PaymentHistory></PaymentHistory>
            },
            {
                path: 'admin',
                element: <Admin></Admin>
            }
        ]
    }
])

export default Router;