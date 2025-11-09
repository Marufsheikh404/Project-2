import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAuth from "../../Hook/useAuth"; // if needed

const BeRider = () => {
    const { users } = useAuth(); // jodi auth theke name/email ante chao
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {
        console.log("Form Data:", data);
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your request has been submitted",
            showConfirmButton: false,
            timer: 1500,
        });
        reset();
    };

    return (
        <div className="max-w-3xl mx-auto mt-10 p-6 shadow-lg rounded-lg bg-base-200">
            <h2 className="text-xl font-bold mb-6">Rider Information Form</h2>

            <form data-aos="zoom-in-up" onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* Left Column */}
                <div className="space-y-4">

                    {/* Name */}
                    <div className="form-control">
                        <label className="label">Your Name</label>
                        <input
                            type="text"
                            {...register("name", { required: true })}
                            className="input input-bordered text-black ring-1 ring-[#ddf95f]"
                            defaultValue={users?.displayName || ""}
                            readOnly={!!users?.displayName}
                            placeholder="Enter your name"
                        />
                    </div>

                    {/* Email */}
                    <div className="form-control">
                        <label className="label">Your Email</label>
                        <input
                            type="email"
                            {...register("email", { required: true })}
                            className="input input-bordered ring-1 ring-[#ddf95f]"
                            defaultValue={users?.email || ""}
                            readOnly={!!users?.email}
                            placeholder="Enter your email"
                        />
                    </div>

                    {/* NID */}
                    <div className="form-control">
                        <label className="label">NID Number</label>
                        <input
                            {...register("nid", { required: true })}
                            type="text"
                            className="input input-bordered ring-1 ring-[#ddf95f]"
                            placeholder="Enter your NID"
                        />
                    </div>
                </div>

                {/* Right Column */}
                <div className="space-y-4">

                    {/* Age */}
                    <div className="form-control">
                        <label className="label">Your Age</label>
                        <input
                            {...register("age", { required: true })}
                            type="number"
                            className="input input-bordered ring-1 ring-[#ddf95f]"
                            placeholder="Enter your age"
                        />
                    </div>

                    {/* Region */}
                    <div className="form-control">
                        <label className="label">Your Region</label>
                        <select
                            {...register("region", { required: true })}
                            className="select select-bordered ring-1 ring-[#ddf95f]"
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

                    {/* Contact */}
                    <div className="form-control">
                        <label className="label">Contact Number</label>
                        <input
                            {...register("contact", { required: true })}
                            type="text"
                            className="input input-bordered ring-1 ring-[#ddf95f]"
                            placeholder="Enter your contact number"
                        />
                    </div>
                </div>

                {/* Warehouse */}
                <div className="form-control md:col-span-2">
                    <label className="label">Which Warehouse You Work?</label>
                    <input
                        {...register("warehouse", { required: true })}
                        type="text"
                        className="input w-full ring-1 ring-[#ddf95f]"
                        placeholder="Enter warehouse name"
                    />
                </div>

                <button type="submit" className="btn bg-[#CAEB66] md:col-span-2 w-full">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default BeRider;
