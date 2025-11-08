
import { Navigate, useLocation } from 'react-router';
import useAuth from '../../Hook/useAuth';

const PrivateRoute = ({ children }) => {
    const { users, loading } = useAuth();
    const location = useLocation();


    if (loading) {
        return <span className="loading loading-spinner loading-xl"></span>
    }

    if (!users) {
        return <Navigate state={{ from: location.pathname }} to="/login"></Navigate>
    }

    return children;
};

export default PrivateRoute;