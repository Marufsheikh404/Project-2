import { useState, useEffect } from 'react';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';

const useUserRole = () => {
    const { users } = useAuth();
    const axiosSecure = useAxiosSecure();
    const [role, setRole] = useState(null);
    const [Loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRole = async () => {
            if (!users?.email) {
                setRole(null);
                setLoading(false);
                return;
            }
            try {
                // Change the API endpoint
                const res = await axiosSecure.get('/users/role');
                if (res.data.success) {
                    setRole(res.data.role);
                } else {
                    setRole(null);
                }
            } catch (error) {
                console.error('Failed to fetch user role:', error);
                setRole(null);
            } finally {
                setLoading(false);
            }
        };

        fetchRole();
    }, [users?.email, axiosSecure]);

    return { role, Loading };
};

export default useUserRole;
