
import useAuth from '../../Hook/useAuth';
import { Navigate, useLocation, } from 'react-router';

const PrivateRoute = ({ children }) => {
    const { users, loading } = useAuth();
    const location = useLocation();

    if (loading) {
        return <span className="loading loading-infinity loading-xl"></span>
    }
    if (!users) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children
};

export default PrivateRoute;