import { useLoaderData } from 'react-router';
import BangladeshMap from './BangledeshMap';

const Coverage = () => {
    const serviceCenters = useLoaderData();

    return (
        <div className="max-w-6xl mx-auto bg-gray-200 shadow-2xl rounded-md px-4 py-12">
            {/* Header */}
            <header className="text-center mb-10">
                <h1 className="text-3xl md:text-4xl font-bold text-[#03373D] mb-4">
                    We are available in 64 districts
                </h1>
                <p className="text-gray-600 text-sm font-semibold md:text-base">
                    Explore our service centers across Bangladesh. Find the nearest location and get fast, reliable service wherever you are.
                </p>
            </header>

            {/* Map */}
            <section className="mb-10">
                <div className="w-full h-[500px] md:h-[600px] border rounded-lg overflow-hidden shadow-lg">
                    <BangladeshMap serviceCenters={serviceCenters} />
                </div>
            </section>
        </div>
    );
};

export default Coverage;
