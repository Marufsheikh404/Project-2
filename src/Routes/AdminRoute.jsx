import useAuth from '../Hook/useAuth';
import { Navigate } from 'react-router';
import useUserRole from '../Hook/useUserRole';

const AdminRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const { role, roleLoading } = useUserRole();

    if (loading || roleLoading) {
        return (
            <div className='flex items-center justify-center min-h-screen'>
                <span className="loading loading-ring loading-xl"></span>
            </div>
        );
    }

    if (!user || role !== 'admin') {
        return <Navigate state={{ from: location.pathname }} to="/forbidden"></Navigate>
    }

    return children;
};

export default AdminRoute;