import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";
import useAuth from "../../Hook/useAuth";
import useAxiosSecure from "../../Hook/useAxiosSecure";



const generateTrackingId = () => {
    const timestamp = Date.now().toString(36); // time-based part
    const random = Math.random().toString(36).substring(2, 8); // random 6 chars
    return `PKG-${timestamp}-${random}`.toUpperCase();
};

export default function ParcelForm() {
    const axisSecure = useAxiosSecure();
    const centers = useLoaderData(); // loaderData = JSON
    const { register, handleSubmit, watch, reset } = useForm();
    const [totalCost, setTotalCost] = useState(0);

    const { users } = useAuth(); // user info from hook

    const parcelType = watch("type");
    const weight = parseFloat(watch("weight")) || 0;

    const senderRegion = watch("senderRegion");
    const senderDistrict = watch("senderDistrict");
    const receiverRegion = watch("receiverRegion");
    const receiverDistrict = watch("receiverDistrict");

    // ---------- Helper Functions ----------
    const getDistricts = (region) =>
        [...new Set(centers.filter((c) => c.region === region).map((c) => c.district))];

    const getCoveredAreas = (district) =>
        centers.find((c) => c.district === district)?.covered_area || [];

    const calculateCost = () => {
        if (!parcelType || !senderRegion) return 0;

        const isWithinCity = senderRegion === "Dhaka"; // উদাহরণ: Dhaka within city
        if (parcelType === "document") {
            return isWithinCity ? 60 : 80;
        } else {
            if (weight <= 3) {
                return isWithinCity ? 110 : 150;
            } else {
                const extra = (weight - 3) * 40;
                return isWithinCity ? 110 + extra : 150 + extra + 40;
            }
        }
    };

    // ---------- Auto update total cost ----------
    useEffect(() => {
        setTotalCost(calculateCost());
    }, [parcelType, weight, senderRegion]);

    // ---------- Submit Handler ----------
    const onSubmit = async (data) => {
        // Create parcel object
        const parcelData = {
            userEmail: users?.email || "guest@example.com",
            parcelType: parcelType,
            title: watch("title"),
            weight: weight,
            sender: {
                name: watch("senderName"),
                phone: watch("senderPhone"),
                region: senderRegion,
                district: senderDistrict,
                serviceCenter: watch("senderServiceCenter"),
            },
            receiver: {
                name: watch("receiverName"),
                phone: watch("receiverPhone"),
                region: receiverRegion,
                district: receiverDistrict,
                serviceCenter: watch("receiverServiceCenter"),
            },
            totalCost: totalCost,
            status: "pending",
            payment_status: "unpaid",
            Delivery_status: "not_collected",
            createdAt: new Date().toISOString(),
            trackingId: generateTrackingId()
        };

        // SweetAlert confirm
        const result = await Swal.fire({
            title: "Confirm Parcel Submission",
            html: `<p>Estimated Total Cost: <b>৳ ${totalCost}</b></p>`,
            icon: "info",
            showCancelButton: true,
            confirmButtonText: "Submit",
            cancelButtonText: "Cancel",
        });

        if (result.isConfirmed) {

            axisSecure.post('/percels', parcelData)
                .then(res => {
                    console.log('percel added', res.data)
                    if (res.data?.insertedId) {
                        reset()
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Your percel has been send successfully",
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }
                })
                .catch(error => {
                    console.log('error', error)
                });
        }
    };

    return (
        <div className="max-w-6xl mx-auto p-6">
            <h2 className="text-3xl font-bold text-center mb-6">Send Parcel</h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">

                {/* ---------- Parcel Info ---------- */}
                <div className="p-4 border rounded-md">
                    <h3 className="font-semibold text-xl mb-3">Parcel Info</h3>

                    <label className="block font-medium">Parcel Type</label>
                    <div className="flex gap-6 mb-3">
                        <label className="flex items-center gap-2">
                            <input type="radio" value="document" {...register("type", { required: true })} />
                            Document
                        </label>
                        <label className="flex items-center gap-2">
                            <input type="radio" value="non-document" {...register("type", { required: true })} />
                            Non-Document
                        </label>
                    </div>

                    <label className="block font-medium">Parcel Title</label>
                    <input className="input input-bordered w-full mb-3 ring-1 ring-[#ddf95f]" {...register("title", { required: true })} />

                    {parcelType === "non-document" && (
                        <>
                            <label className="block font-medium">Weight (KG)</label>
                            <input type="number" step="0.1" className="input input-bordered w-full ring-1 ring-[#ddf95f]" {...register("weight")} />
                        </>
                    )}
                </div>

                {/* ---------- Sender Info ---------- */}
                <div className="p-4 border rounded-md">
                    <h3 className="font-semibold text-xl mb-3">Sender Info</h3>
                    <div className="grid md:grid-cols-2 gap-4">

                        <div>
                            <label className="font-medium">Sender Name</label>
                            <input className="input input-bordered w-full ring-1 ring-[#ddf95f]" {...register("senderName", { required: true })} />
                        </div>

                        <div>
                            <label className="font-medium">Sender Contact</label>
                            <input className="input input-bordered w-full ring-1 ring-[#ddf95f]" {...register("senderPhone", { required: true })} />
                        </div>

                        <div>
                            <label className="font-medium">Region</label>
                            <select className="select select-bordered w-full ring-1 ring-[#ddf95f]" {...register("senderRegion", { required: true })}>
                                <option value="">Select Region</option>
                                {[...new Set(centers.map(c => c.region))].map((r, i) => (
                                    <option key={i} value={r}>{r}</option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label className="font-medium">District</label>
                            <select className="select select-bordered w-full ring-1 ring-[#ddf95f]" {...register("senderDistrict", { required: true })}>
                                <option value="">Select District</option>
                                {getDistricts(senderRegion).map((d, i) => (
                                    <option key={i} value={d}>{d}</option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label className="font-medium">Service Center</label>
                            <select className="select select-bordered w-full ring-1 ring-[#ddf95f]" {...register("senderServiceCenter", { required: true })}>
                                <option value="">Select Service Center</option>
                                {getCoveredAreas(senderDistrict).map((area, i) => (
                                    <option key={i} value={area}>{area}</option>
                                ))}
                            </select>
                        </div>

                    </div>
                </div>

                {/* ---------- Receiver Info ---------- */}
                <div className="p-4 border rounded-md">
                    <h3 className="font-semibold text-xl mb-3">Receiver Info</h3>
                    <div className="grid md:grid-cols-2 gap-4">

                        <div>
                            <label className="font-medium">Receiver Name</label>
                            <input className="input input-bordered w-full ring-1 ring-[#ddf95f]" {...register("receiverName", { required: true })} />
                        </div>

                        <div>
                            <label className="font-medium">Receiver Contact</label>
                            <input className="input input-bordered w-full ring-1 ring-[#ddf95f]" {...register("receiverPhone", { required: true })} />
                        </div>

                        <div>
                            <label className="font-medium">Region</label>
                            <select className="select select-bordered w-full ring-1 ring-[#ddf95f]" {...register("receiverRegion", { required: true })}>
                                <option value="">Select Region</option>
                                {[...new Set(centers.map(c => c.region))].map((r, i) => (
                                    <option key={i} value={r}>{r}</option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label className="font-medium">District</label>
                            <select className="select select-bordered w-full ring-1 ring-[#ddf95f]" {...register("receiverDistrict", { required: true })}>
                                <option value="">Select District</option>
                                {getDistricts(receiverRegion).map((d, i) => (
                                    <option key={i} value={d}>{d}</option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label className="font-medium">Service Center</label>
                            <select className="select select-bordered w-full ring-1 ring-[#ddf95f] border-none" {...register("receiverServiceCenter", { required: true })}>
                                <option value="">Select Service Center</option>
                                {getCoveredAreas(receiverDistrict).map((area, i) => (
                                    <option key={i} value={area}>{area}</option>
                                ))}
                            </select>
                        </div>

                    </div>
                </div>

                {/* ---------- Show Total Cost Above Submit ---------- */}
                <div className="text-center mb-4">
                    {parcelType && (
                        <p className="text-xl font-bold">
                            Estimated Total Cost: ৳ {totalCost}
                        </p>
                    )}
                </div>

                <button type="submit" className="btn bg-[#ddf95f] w-full">Submit Parcel</button>
            </form>
        </div>
    );
}
