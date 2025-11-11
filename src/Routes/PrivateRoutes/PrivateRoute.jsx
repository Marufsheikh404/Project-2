
import { Navigate, useLocation } from 'react-router';
import useAuth from '../../Hook/useAuth';

const PrivateRoute = ({ children }) => {
    const { users, loading } = useAuth();
    const location = useLocation();


    if (loading) {
        return (
            <div className='flex items-center justify-center min-h-screen'>
                <span className="loading loading-ring loading-xl"></span>
            </div>
        );
    }

    if (!users) {
        return <Navigate state={{ from: location.pathname }} to="/login"></Navigate>
    }

    return children;
};

export default PrivateRoute;