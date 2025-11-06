import React, { use } from 'react';
import useAuth from '../../Hook/useAuth';
import useAxiosSecure from '../../Hook/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const PaymentHistory = () => {
    const { users } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { isPending, data: history = [] } = useQuery({
        queryKey: ['PaymentHistory', users.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/HistoryCollection?email=${users.email}`)
            return res.data
        }
    });

    if (isPending) return <p>...Loading</p>
    return (
        <div className="max-w-4xl mx-auto mt-10">
            <h2 className="text-2xl font-bold mb-4">Your Payment History</h2>

            {history.length === 0 ? (
                <p>No payments found</p>
            ) : (
                <div className="overflow-x-auto">
                    <table className="table table-zebra w-full">
                        <thead>
                            <tr>
                                <th>Parcel ID</th>
                                <th>Amount</th>
                                <th>Transaction ID</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {history.map((item) => (
                                <tr key={item._id}>
                                    <td>{item.parcelId}</td>
                                    <td>${item.amount}</td>
                                    <td>{item.transactionId}</td>
                                    <td>{new Date(item.date).toLocaleString()}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>

    );
};

export default PaymentHistory;