import { useState, useEffect } from 'react';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';

const useUserRole = () => {
    const { users } = useAuth();
    const axiosSecure = useAxiosSecure();
    const [role, setRole] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRole = async () => {
            if (!users?.email) {
                setRole(null);
                setLoading(false);
                return;
            }
            try {
                const res = await axiosSecure.get(`/users/role?email=${users.email}`);
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

    return { role, loading:authLoading };
};

export default useUserRole;
