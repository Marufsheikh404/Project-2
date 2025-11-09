import RImage from '../../assets/New folder/location-merchant.png';
import BkImage from '../../assets/New folder/Frame 2087326212.png'
const InfoCard = () => {
    return (
        <div data-aos="zoom-out-right" style={{backgroundImage: `url(${BkImage})`}} className="bg-[#F5F7F8] bg-cover rounded-2xl shadow-lg my-5 hover:shadow-2xl border border-gray-100 p-8 flex flex-col md:flex-row items-center md:items-start gap-8">

            {/* Left Side */}
            <div className="flex-1 text-center md:text-left">
                <h1 className="text-3xl font-bold text-[#ffff] mb-4">
                    Merchant and Customer Satisfaction is Our First Priority
                </h1>
                <p className="text-gray-300 mb-6 leading-relaxed">
                    Enjoy quick and secure delivery with real-time tracking and guaranteed safety.
                    Whether it’s personal or business parcels, we deliver on time, every time.
                </p>

                <div className="flex justify-center md:justify-start gap-4">
                    <button className="bg-[#CAEB66] text-white font-semibold px-5 py-2 rounded-lg hover:bg-[#b0df24] cursor-pointer transition-all duration-300">
                        Get Started
                    </button>
                    <button className="border border-[#CAEB66] font-semibold text-[#CAEB66] px-5 py-2 rounded-lg hover:bg-[#b0df24] hover:text-white transition-all duration-300">
                        Learn More
                    </button>
                </div>
            </div>

            {/* Right Side */}
            <div className="flex-shrink-0">
                <img
                    src={RImage}
                    alt="Delivery Service"
                    className="w-72 md:w-96 rounded-xl"
                />
            </div>
        </div>
    );
};

export default InfoCard;
