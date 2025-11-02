import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    })
    return (
        <>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-3 bg-[#03373D] p-4 rounded-md'>
                {
                    services.map((service) => <ServiceCard
                        key={service.id}
                        title={service.title}
                        description={service.description}
                        id ={service.id}
                    ></ServiceCard>)
                }
            </div>
        </>
    );
};

export default Services;