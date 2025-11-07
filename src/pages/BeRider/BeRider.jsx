import { useState } from "react";
import useAuth from "../../Hook/useAuth";


const BeRider = () => {
    const { users } = useAuth();

    const [formData, setFormData] = useState({
        name: users?.displayName || "",
        email: users?.email || "",
        nid: "",
        age: "",
        region: "",
        contact: "",
        warehouse: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitted:", formData);
        // axiosInstance.post("/rider-profile", formData)
    };

    return (
        <div className="max-w-3xl mx-auto mt-10 p-6 shadow-lg rounded-lg bg-base-200">
            <h2 className="text-xl font-bold mb-6">Rider Information Form</h2>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* Left Column */}
                <div className="space-y-4">
                    <div className="form-control">
                        <label className="label">Your Name</label>
                        <input
                            type="text"
                            name="name"
                            className="input input-bordered"
                            value={formData.name}
                            readOnly
                        />
                    </div>

                    <div className="form-control">
                        <label className="label">Your Email</label>
                        <input
                            type="email"
                            name="email"
                            className="input input-bordered"
                            value={formData.email}
                            readOnly
                        />
                    </div>

                    <div className="form-control">
                        <label className="label">NID Number</label>
                        <input
                            type="text"
                            name="nid"
                            className="input input-bordered"
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>

                {/* Right Column */}
                <div className="space-y-4">
                    <div className="form-control">
                        <label className="label">Your Age</label>
                        <input
                            type="number"
                            name="age"
                            className="input input-bordered"
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-control">
                        <label className="label">Your Region</label>
                        <select
                            name="region"
                            className="select select-bordered"
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select Region</option>
                            <option value="Dhaka">Dhaka</option>
                            <option value="Chattogram">Chattogram</option>
                            <option value="Rajshahi">Rajshahi</option>
                            <option value="Khulna">Khulna</option>
                            <option value="Sylhet">Sylhet</option>
                            <option value="Barishal">Barishal</option>
                            <option value="Rangpur">Rangpur</option>
                            <option value="Mymensingh">Mymensingh</option>
                        </select>
                    </div>

                    <div className="form-control">
                        <label className="label">Contact Number</label>
                        <input
                            type="text"
                            name="contact"
                            className="input input-bordered"
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>

                {/* Bottom Full Row */}
                <div className="form-control ">
                    <label className="label">Which Warehouse You Work?</label>
                    <input
                        type="text"
                        name="warehouse"
                        className="input input-bordered w-full"
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Submit Button */}
                <button type="submit" className="btn btn-primary md:col-span-2 w-full">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default BeRider;
