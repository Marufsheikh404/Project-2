import { useState, useEffect } from 'react';
import axios from 'axios';

const ActiveRiders = () => {
    const [riders, setRiders] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchActiveRiders = async () => {
            try {
                const res = await axios.get('http://localhost:5000/riders/active');
                setRiders(res.data);
            } catch (error) {
                console.error('Failed to fetch active riders:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchActiveRiders();
    }, []);

    if (loading) return <p>Loading...</p>;

    return (
        <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Contact</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {riders.map((rider, index) => (
                        <tr key={rider._id}>
                            <td>{index + 1}</td>
                            <td>{rider.name}</td>
                            <td>{rider.email}</td>
                            <td>{rider.contact}</td>
                            <td className="text-green-500 font-bold">{rider.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ActiveRiders;
