import React from 'react';
import SectionTitle from '../../components/shared/SectionTitle';

const Collaspe = () => {
    return (
        <div className='my-3 flex flex-col gap-3'>
            <SectionTitle title={"Frequently Asked Question (FAQ)"} description={"Enhance posture, mobility, and well-being effortlessly with Posture Pro <br/> Achieve proper alignment, reduce pain, and strengthen your body with ease!"}></SectionTitle>
            <div
                tabIndex={0}
                className="bg-[#ddf95f] border border-gray-200 shadow-lg text-black focus:bg-[#9ac2c2] focus:text-secondary-content collapse"
            >
                <div className="collapse-title font-semibold">How do I create an account?</div>
                <div className="collapse-content text-sm">
                    Click the "Sign Up" button in the top right corner and follow the registration process.
                </div>
            </div>
            <div
                tabIndex={0}
                className="bg-[#ddf95f] border border-gray-200 shadow-lg text-black focus:bg-[#9ac2c2] focus:text-secondary-content collapse"
            >
                <div className="collapse-title font-semibold">How do I create an account?</div>
                <div className="collapse-content text-sm">
                    Click the "Sign Up" button in the top right corner and follow the registration process.
                </div>
            </div>
            <div
                tabIndex={0}
                className="bg-[#ddf95f] border border-gray-200 shadow-lg text-black focus:bg-lime-100 focus:text-black collapse"
            >
                <div className="collapse-title font-semibold">How do I create an account?</div>
                <div className="collapse-content text-sm">
                    Click the "Sign Up" button in the top right corner and follow the registration process.
                </div>
            </div>
            <div
                tabIndex={0}
                className="bg-[#ddf95f] border border-gray-200 shadow-lg text-black focus:bg-[#9ac2c2] focus:text-secondary-content collapse"
            >
                <div className="collapse-title font-semibold">How do I create an account?</div>
                <div className="collapse-content text-sm">
                    Click the "Sign Up" button in the top right corner and follow the registration process.
                </div>
            </div>
        </div>
    );
};

export default Collaspe;