import React from 'react';

const SectionTitle = ({title, description}) => {
    return (
        <div className='place-items-center mb-5'>
            <h1 className='text-4xl font-bold text-white'>{title}</h1>
            <p className='text-sm text-gray-500' dangerouslySetInnerHTML={{__html:description}}></p>
        </div>
    );
};

export default SectionTitle;