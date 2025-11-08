import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import SectionTitle from "../../components/shared/SectionTitle";

import author1 from "../../assets/New folder/image-upload-icon.png";


const authors = [
    { id: 1, name: "Maruf Hasan", title: "Creative Designer" },
    { id: 2, name: "Tomas Rahman", title: "Web Developer" },
    { id: 3, name: "Sadia Islam", title: "UI/UX Expert" },
    { id: 4, name: "Imran Hossain", title: "App Developer" },
    { id: 5, name: "Nusrat Jahan", title: "Marketing Lead" },
    { id: 6, name: "Tanvir Ahmed", title: "Product Manager" },
];

const  Review = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 2 },
            },
            {
                breakpoint: 640,
                settings: { slidesToShow: 1 },
            },
        ],
    };

    return (
        <div className="bg-[#F7F9FA] py-12 px-6">
            {/* Top Text */}
            <SectionTitle title={"What Our Customer Is Saying"} description={"always be happy is the same time. I want to buy some grocerious."}></SectionTitle>

            {/* Divider */}
            <div className="w-24 h-[3px] bg-[#CAEB66] mx-auto mb-10 rounded-full"></div>

            {/* Carousel */}
            <Slider {...settings}>
                {authors.map(({ id, name, title }) => (
                    <div key={id} className="px-4">
                        <div className="bg-white shadow-md w-60 h-20 lg:h-30 mb-4 cursor-pointer lg:rounded-tl-4xl lg:rounded-br-4xl p-6 flex items-center gap-5 hover:shadow-lg transition-all duration-300">
                            <img
                                src={author1}
                                alt={name}
                                className="w-10 h-10 rounded-full object-cover border-2 border-[#CAEB66]"
                            />
                            <div className="hidden lg:block">
                                <h3 className="text-xs lg:text-lg lg:font-semibold text-[#03373D]">{name}</h3>
                                <p className="text-gray-500 text-sm">{title}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Review;
