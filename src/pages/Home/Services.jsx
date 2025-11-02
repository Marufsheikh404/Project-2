import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';
import SectionTitle from '../../components/shared/SectionTitle';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    })
    return (
        <>
            <div className='bg-[#03373D] p-4'>
                 <SectionTitle title={'Our Services'} description={'Enjoy fast, reliable parcel delivery with real-time tracking  and zero hassle.<br/> From personal packages to business shipments — we deliver on time, every time.'}></SectionTitle>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-3  rounded-md'>
                    {
                        services.map((service) => <ServiceCard
                            key={service.id}
                            title={service.title}
                            description={service.description}
                            id={service.id}
                        ></ServiceCard>)
                    }
                </div>
            </div>
        </>
    );
};

export default Services;