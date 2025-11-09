import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const PricingCalculator = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        Swal.fire({
            title: "Thank You!",
            icon: "success",
            draggable: true
        });
    };
    return (
        <div className="w-full max-w-5xl mx-auto py-12 px-6">
            <h1 className="text-4xl font-semibold text-green-900 mb-4">Pricing Calculator</h1>
            <p className="text-gray-600 max-w-xl mb-8">
                Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle.
            </p>

            <div className="border-t my-6 mb-10" />

            <h2 className="text-2xl font-semibold text-center mb-10">Calculate Your Cost</h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 max-w-md mx-auto">
                <div className="form-control">
                    <label className="label text-sm font-medium">Parcel type</label>
                    <select className="select select-bordered w-full ring-1 ring-[#ddf95f] border-none" {...register("parcel", { required: true })}>
                        <option value="">Select Parcel type</option>
                        <option>Document</option>
                        <option>Small Box</option>
                        <option>Medium Box</option>
                        <option>Large Box</option>
                    </select>
                    {errors.parcel && <p className="text-red-500 text-sm">This field is required</p>}
                </div>

                <div className="form-control">
                    <label className="label text-sm font-medium">Delivery Destination</label>
                    <select className="select select-bordered w-full ring-1 ring-[#ddf95f] border-none" {...register("destination", { required: true })}>
                        <option value="">Select Delivery Destination</option>
                        <option>Inside City</option>
                        <option>Outside City</option>
                    </select>
                    {errors.destination && <p className="text-red-500 text-sm">This field is required</p>}
                </div>

                <div className="form-control">
                    <label className="label text-sm font-medium">Weight (KG)</label>
                    <input
                        type="number"
                        placeholder="Enter weight"
                        className="input input-bordered w-full ring-1 ring-[#ddf95f] border-none"
                        {...register("weight", { required: true })}
                    />
                    {errors.weight && <p className="text-red-500 text-sm">This field is required</p>}
                </div>

                <div className="flex gap-4">
                    <button type="button" onClick={() => reset()} className="btn hover:bg-[#bcd646]">Reset</button>
                    <button type="submit" className="btn bg-[#bcd646] hover:bg-[#5e700b] text-white border-none">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default PricingCalculator;