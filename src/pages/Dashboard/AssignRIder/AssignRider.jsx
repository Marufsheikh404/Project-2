import { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hook/useAxiosSecure";


const AssignRider = () => {
    const axiosSecure = useAxiosSecure();
    const [parcels, setParcels] = useState([]);

    useEffect(() => {
        const fetchParcels = async () => {
            try {
                const res = await axiosSecure.get("/percels/assign-rider-list")
                setParcels(res.data);
            } catch (error) {
                console.error("Failed to load parcels:", error);
            }
        };
        fetchParcels();
    }, []);

    return (
        <div className="overflow-x-auto p-6">
            <table className="table table-zebra w-full">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Sender</th>
                        <th>Receiver</th>
                        <th>Cost</th>
                        <th>Payment</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {parcels.map((parcel, index) => (
                        <tr key={parcel._id}>
                            <td>{index + 1}</td>
                            <td>{parcel.sender?.name}</td>
                            <td>{parcel.receiver?.name}</td>
                            <td>{parcel.totalCost}</td>
                            <td className="text-green-600 capitalize">{parcel.
                                payment_status}</td>
                            {/* Capital D is IMPORTANT ↑ */}
                            <td>
                                <button className="btn btn-sm btn-primary">
                                    Assign Rider
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AssignRider;
