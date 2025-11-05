import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../Hook/useAuth';
import useAxiosSecure from '../../../Hook/useAxiosSecure';

const MyPercel = () => {
    const axiosSecure = useAxiosSecure();
    const { users } = useAuth();
    const { data: percels = [] } = useQuery({
        queryKey: ['Mypercels', users.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/percels?email=${users.email}`)
            return res.data;
        }
    })

    return (
        <div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full table-zebra">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Type</th>
                            <th>Created At</th>
                            <th>Cost</th>
                            <th>Payment</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {percels.map((parcel, idx) => (
                            <tr key={parcel._id}>
                                <th>{idx + 1}</th>
                                <td>{parcel.parcelType || "Document"}</td>
                                <td>{new Date(parcel.createdAt).toLocaleString()}</td>
                                <td>${parcel.totalCost || 0}</td>
                                <td>
                                    {parcel.payment_status}

                                    {/* ? (
                                        <span className="badge badge-success">Paid</span>
                                    ) : (
                                        <span className="badge badge-warning">Unpaid</span>
                                    )} */}

                                </td>
                                <td className="flex gap-2">
                                    <button
                                        className="btn btn-xs btn-error"
                                        onClick={() => handleDelete(parcel._id)}
                                    >
                                        Delete
                                    </button>
                                    <button
                                        className="btn btn-xs btn-primary"
                                        onClick={() => handlePay(parcel._id)}
                                        disabled={parcel.paid}
                                    >
                                        Pay
                                    </button>
                                    <button className="btn btn-xs btn-secondary">Add</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyPercel;