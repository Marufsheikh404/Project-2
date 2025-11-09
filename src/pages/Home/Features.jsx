
import { FiPhoneCall } from 'react-icons/fi';
import { BsBoxSeam } from 'react-icons/bs';
import { MdOutlineLocationOn } from 'react-icons/md';

const features = [
    {
        id: 1,
        icon: <MdOutlineLocationOn size={50} className="text-[#03373D]" />,
        title: 'Live Parcel Tracking',
        text: "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind."
    },
    {
        id: 2,
        icon: <BsBoxSeam size={50} className="text-[#03373D]" />,
        title: '100% Safe Delivery',
        text: "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time."
    },
    {
        id: 3,
        icon: <FiPhoneCall size={50} className="text-[#03373D]" />,
        title: '24/7 Call Center Support',
        text: "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us."
    },
];

const Features = () => {
    return (
        <div className="bg-[#F5F7F8] py-8 px-2">
            <div data-aos="zoom-in-left" className="flex flex-col gap-6">
                {features.map(({ id, icon, title, text }) => (
                    <div
                        key={id}
                        className="flex flex-col md:flex-row items-center md:items-start gap-6 bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
                    >
                        <div className="bg-[#E6F0F2] p-4 rounded-xl flex justify-center items-center w-24 h-24">
                            {icon}
                        </div>
                        <div className="flex-1 text-center md:text-left">
                            <h2 className="text-[#03373D] text-xl md:text-2xl font-bold mb-2">{title}</h2>
                            <p className="text-gray-600 text-sm md:text-base leading-relaxed">{text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Features;
