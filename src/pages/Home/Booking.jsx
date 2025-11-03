import React, { useEffect, useState } from 'react';
import logo from '../../assets/New folder/bookingIcon.png'

const Booking = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch('boking.json')
            .then(res => res.json())
            .then(data => setBooks(data))
    })
    return (
        <div>
            <h1 className='text-3xl font-bold text-[#03373D] translate-x-6'>How It Works?</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 bg-[#f8fafc] rounded-xl">
                {books.map((book, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center text-center bg-white shadow-md rounded-tr-4xl rounded-bl-4xl p-5 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                    >
                        <img
                            src={logo}
                            className="w-20 h-20 object-contain mb-4"
                        />
                        <h1 className="text-[#03373D] text-xl font-bold mb-2">
                            {book.title}
                        </h1>
                        <p className="text-sm text-gray-500">{book.text}</p>
                    </div>
                ))}
            </div>
        </div>

    );
};

export default Booking;