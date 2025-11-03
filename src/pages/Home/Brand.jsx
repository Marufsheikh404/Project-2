import React from 'react';
import Marquee from "react-fast-marquee";
import img1 from '../../assets/brands/amazon.png'
import img2 from '../../assets/brands/amazon_vector.png'
import img3 from '../../assets/brands/casio.png'
import img4 from '../../assets/brands/moonstar.png'
import img5 from '../../assets/brands/randstad.png'
import img6 from '../../assets/brands/start-people 1.png'
import img7 from '../../assets/brands/start.png'
import SectionTitle from '../../components/shared/SectionTitle';

const Brand = () => {
    return (
        <div>
            <SectionTitle title={"We Have Help Thousands Of Seals Teams"}></SectionTitle>
            <Marquee >
                <div className='flex items-baseline gap-10'>
                    <img src={img1} />
                    <img src={img2} />
                    <img src={img3} />
                    <img src={img4} />
                    <img src={img5} />
                    <img src={img6} />
                    <img src={img7} />
                </div>
            </Marquee>
        </div>
    );
};

export default Brand;