import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../Hook/useAuth';
import useAxiosSecure from '../../../Hook/useAxiosSecure';
import Swal from 'sweetalert2';
import { Link, useNavigate } from 'react-router';

const MyPercel = () => {
    const navigate = useNavigate();
    const axiosSecure = useAxiosSecure();
    const { users } = useAuth();
    const { data: percels = [], refetch } = useQuery({
        queryKey: ['Mypercels', users.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/percels?email=${users.email}`)
            return res.data;
        }
    });

    const handlePay = () => {
        navigate('/dashboard/payment')
    }

    // Delete handler with SweetAlert
    const handleDelete = async (id) => {
        const result = await Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Yes, delete it!",
        });

        if (result.isConfirmed) {
            try {
                await axiosSecure.delete(`/percels/${id}`);
                refetch();
            } catch (error) {
                toast.error("Failed to delete parcel");
                console.log(error);
            }
        }
    };

    return (
        <div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full table-zebra">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Title</th>
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
                                <td>{parcel.title}</td>
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
                                    <Link to={`/dashboard/payment/${parcel._id}`}> <button
                                        className="btn btn-xs btn-primary"
                                        onClick={() => handlePay(parcel._id)}
                                        disabled={parcel.paid}
                                    >
                                        Pay
                                    </button></Link>
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