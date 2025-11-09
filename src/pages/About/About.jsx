

const About = () => {
    return (
        <div className="bg-gray-100 min-h-screen py-16 px-4 sm:px-6 lg:px-8 flex justify-center items-start">
            <div data-aos="zoom-in-up" className="bg-white rounded-lg shadow-xl p-8 max-w-4xl w-full">
                <h1 className="text-5xl font-bold text-green-800 mb-8">About Us</h1>
                <p className="text-lg text-gray-700 mb-12 max-w-2xl">
                    Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal
                    packages to business shipments — we deliver on time, every time.
                </p>

                <div className="tabs tabs-boxed mb-8">
                    <a className="tab tab-active text-lg">Story</a>
                    <a className="tab text-lg">Mission</a>
                    <a className="tab text-lg">Success</a>
                    <a className="tab text-lg">Team & Others</a>
                </div>

                <div className="space-y-6">
                    <p className="text-gray-700 text-lg leading-relaxed">
                        We started with a simple promise — to make parcel delivery fast, reliable, and stress-free. Over the years, our commitment to real-time tracking,
                        efficient logistics, and customer-first service has made us a trusted partner for thousands. Whether it's a personal gift or a time-sensitive business
                        delivery, we ensure it reaches its destination — on time, every time.
                    </p>
                    <p className="text-gray-700 text-lg leading-relaxed">
                        We started with a simple promise — to make parcel delivery fast, reliable, and stress-free. Over the years, our commitment to real-time tracking,
                        efficient logistics, and customer-first service has made us a trusted partner for thousands. Whether it's a personal gift or a time-sensitive business
                        delivery, we ensure it reaches its destination — on time, every time.
                    </p>
                    <p className="text-gray-700 text-lg leading-relaxed">
                        We started with a simple promise — to make parcel delivery fast, reliable, and stress-free. Over the years, our commitment to real-time tracking,
                        efficient logistics, and customer-first service has made us a trusted partner for thousands. Whether it's a personal gift or a time-sensitive business
                        delivery, we ensure it reaches its destination — on time, every time.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;