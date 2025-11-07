import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import axiosPublic from "../../../Hook/useAxiosPublic";
import useAxiosSecure from "../../../Hook/useAxiosSecure";

const PendingRiders = () => {
    const axios = axiosPublic;
    const axiosSecure = useAxiosSecure();
    const [riders, setRiders] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch pending riders
    const fetchPendingRiders = async () => {
        try {
            const res = await axios.get("/riders/pending");
            setRiders(res.data);
        } catch (error) {
            console.error("Failed to fetch pending riders:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPendingRiders();
    }, []);

    // Handle Approve or Reject
    const handleAction = async (riderId, newStatus, email) => {
        try {
            await axios.patch(`/riders/pending/${riderId}`, { status: newStatus, email: email });
            Swal.fire({
                icon: "success",
                title: `Rider ${newStatus}`,
                showConfirmButton: false,
                timer: 1500,
            });
            fetchPendingRiders(); // Refetch after update
        } catch (error) {
            console.error("Failed to update rider status:", error);
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
            });
        }
    };

    if (loading) return <p className="text-center mt-10">Loading...</p>;
    if (!riders.length) return <p className="text-center mt-10">No pending riders found.</p>;

    return (
        <div className="overflow-x-auto p-6">
            <table className="table table-zebra w-full">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {riders.map((rider, index) => (
                        <tr key={rider._id}>
                            <th>{index + 1}</th>
                            <td>{rider.name}</td>
                            <td>{rider.email}</td>
                            <td>{rider.phone}</td>
                            <td>
                                <span
                                    className={`badge ${rider.status === "pending"
                                        ? "badge-warning"
                                        : rider.status === "approved"
                                            ? "badge-success"
                                            : "badge-error"
                                        }`}
                                >
                                    {rider.status}
                                </span>
                            </td>
                            <td className="flex gap-2">
                                {rider.status === "pending" && (
                                    <>
                                        <button
                                            className="btn btn-sm btn-success"
                                            onClick={() => handleAction(rider._id, "approved", rider.email)}
                                        >
                                            Accept
                                        </button>
                                        <button
                                            className="btn btn-sm btn-error"
                                            onClick={() => handleAction(rider._id, "rejected", rider.email)}
                                        >
                                            Reject
                                        </button>
                                    </>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PendingRiders;
