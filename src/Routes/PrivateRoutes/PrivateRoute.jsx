import React from 'react';
import useAuth from '../../Hook/useAuth';
import { replace, useLocation, useNavigate } from 'react-router';

const PrivateRoute = ({children}) => {
    const {users,loading} = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    if(loading){
        return <span className="loading loading-infinity loading-xl"></span>
    }
    if(!users){
       return navigate('/login' ,{state:{from: location}, replace:true})
    }

    return children
};

export default PrivateRoute;