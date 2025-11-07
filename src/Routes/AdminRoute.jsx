import { Navigate } from "react-router";
import useAuth from "../Hook/useAuth";
import useUserRole from "../Hook/useUserRole";

const AdminRoute = ({ children }) => {
    const { users, loading } = useAuth();
    const { role, Loading } = useUserRole();

    if (loading || Loading) {
        return <p>....loading</p>
    }

    if (!users || role !== "admin") {
        <Navigate state={{ from: location.pathname }} to={'/forbidden'}></Navigate>
    }
    return children;
};

export default AdminRoute;